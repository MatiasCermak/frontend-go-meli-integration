import { useQuery } from "../../customHooks/useQuery";

const authCodeRegex = /TG-[a-z\d]{24}-\d{9}/;


const AuthenticationHandler = () => {
    const query = useQuery();

    const authCode = query.get("code");
    if (authCode == null || !authCodeRegex.test(authCode)) {
        return <div>The authentication code is not valid</div>;
    }
    const authUrl = "https://go-meli-integration.herokuapp.com/auth?code=" + authCode;
    console.log(authCode);
    fetch(authUrl)
        .then(res => res.json())
        .then(res => window.opener.postMessage({ payload: res }));

    return <div>You'll be redirected in a moment</div>;
};

export default AuthenticationHandler;
