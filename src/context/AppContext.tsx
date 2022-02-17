import React, { createContext, useEffect, useState } from "react";
import { Item, Payload, Sale } from "../types/Items";
import { AuthData } from "../types/AuthData";
import { QuestionAnswer } from "../types/QuestionAnswer";
import { Publication } from "../types/Publication";
type AppProviderProps = {
    children: React.ReactNode,
    initialPayload: Payload | null
    initialAuthData: AuthData | null
}

interface IAppContext {
    isAuthenticated: boolean,
    salesList: Sale[] | undefined,
    itemList: Item[] | undefined,
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>,
    performAuthentication: () => void,
    answerQuestion: (payload: QuestionAnswer) => void,
    publishItem: (payload: Publication) => void,

}

export const AppContext = createContext<IAppContext>({
    performAuthentication: () => { },
    isAuthenticated: false,
    salesList: [],
    itemList: [],
    setIsAuthenticated: () => { },
    answerQuestion: (payload: QuestionAnswer) => { },
    publishItem: (payload: Publication) => { },
});

const AUTH_URL = "https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=3589105139307129&redirect_uri=http://localhost:3000/auth";
const API_URL = "https://go-meli-integration.herokuapp.com/"


export const AppProvider = ({ children, initialPayload = null, initialAuthData = null }: AppProviderProps) => {

    const [itemList, setItemList] = useState(initialPayload?.Items);
    const [salesList, setSalesList] = useState(initialPayload?.Sales);
    const [authData, setAuthData] = useState(initialAuthData);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (!isAuthenticated) {
            setAuthData(null);
            console.log("Authentication data set to null");
        }
    }, [isAuthenticated]);

    useEffect(() => {
        if (authData != null) {
            setIsAuthenticated(true);
            getPayload();
        }
        console.log(authData);
    }, [authData])

    const performAuthentication = () => {
        console.log("Estoy autenticando");
        const childWindow = window.open(AUTH_URL)
        window.addEventListener("message", (response) => {
            if (response.data.payload != null) {
                setAuthData(response.data.payload);
                childWindow?.close();
            }
        })
    }

    const getPayload = () => {
        console.log("Trayendo datos");
        fetch(API_URL + `items/all?token=${authData?.Access_token}&userid=${authData?.User_id}`).then(res => {
            if (res.ok) return res.json();
            else {
                console.log("Hubo un error al traer los datos del servidor");
            }
        }).then(res => {
            setItemList(res["Items"]);
            setSalesList(res["Sales"]);
            console.log(res);
        });
    }

    const answerQuestion = (payload: QuestionAnswer) => {
        console.log("Contestando pregunta")
        fetch(API_URL + `items/questions/ans?token=${authData?.Access_token}`, { method: "POST", headers: [["Content-Type", "application/json"], ["Access-Control-Allow-Origin", "*"]], body: JSON.stringify(payload) })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                getPayload();
            })
    }

    const publishItem = (payload: Publication) => {
        console.log("Publicando Producto")
        fetch(API_URL + `items/publish?token=${authData?.Access_token}`, { method: "POST", headers: [["Content-Type", "application/json"], ["Access-Control-Allow-Origin", "*"]], body: JSON.stringify(payload) })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                getPayload();
            })
    }

    return (
        <AppContext.Provider
            value={{
                isAuthenticated,
                salesList,
                itemList,
                setIsAuthenticated,
                answerQuestion,
                performAuthentication,
                publishItem
            }}
        >
            {children}
        </AppContext.Provider>
    );


}