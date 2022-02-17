import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Publication } from '../../types/Publication';
import { Select, Button, TextField, MenuItem, FormControl, InputLabel } from '@mui/material';
import { AppContext } from '../../context/AppContext';

const validationSchema = yup.object({
    description: yup
        .string()
        .required('Description is required'),
    title: yup
        .string()
        .required('Title is required'),
    category: yup
        .string()
        .oneOf(["MLA1652", "MLA8883", "MLA126689"])
        .required('Category is required'),
    price: yup
        .number()
        .required("Price is required"),
    picture: yup
        .string()
        .url()
        .required("Picture is required"),
    brand: yup
        .string()
        .required('Brand is required'),
    quantity: yup
        .number()
        .required("Quantity is required")
        .moreThan(0, "Quantity should be higher than 0")

});

const ItemTemplate: Publication =
{
    "description": "Random Description",
    "ItemPub": {
        "title": "Item de test - No Ofertar",
        "category_id": "MLA3530",
        "price": 350,
        "currency_id": "ARS",
        "available_quantity": 10,
        "buying_mode": "buy_it_now",
        "condition": "new",
        "listing_type_id": "gold_special",
        "sale_terms": [
            {
                "id": "WARRANTY_TYPE",
                "value_name": "Garantía del vendedor"
            },
            {
                "id": "WARRANTY_TIME",
                "value_name": "90 días"
            }
        ],
        "pictures": [
            {
                "source": "http://mla-s2-p.mlstatic.com/968521-MLA20805195516_072016-O.jpg"
            }
        ],
        "attributes": [
            {
                "id": "BRAND",
                "value_name": "Marca del producto"
            },
            {
                "id": "EAN",
                "value_name": "7898095297749"
            }
        ]
    }
}


export const PublishItemForm = () => {
    const { publishItem } = useContext(AppContext);
    const formik = useFormik({
        initialValues: {
            description: "",
            title: "",
            category: "MLA1652",
            price: 0,
            quantity: 1,
            picture: "https://via.placeholder.com/200",
            brand: "",

        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            ItemTemplate.description = values.description;
            ItemTemplate.ItemPub.title = values.title;
            ItemTemplate.ItemPub.price = values.price;
            ItemTemplate.ItemPub.category_id = values.category;
            ItemTemplate.ItemPub.available_quantity = values.quantity;
            ItemTemplate.ItemPub.attributes[0].value_name = values.brand;
            ItemTemplate.ItemPub.pictures[0].source = values.picture;
            console.log(values);
            publishItem(ItemTemplate);
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="title"
                    name="title"
                    label="Title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                    sx={{ margin: "5px" }}
                />
                <TextField
                    fullWidth
                    id="description"
                    name="description"
                    label="Description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    helperText={formik.touched.description && formik.errors.description}
                    sx={{ margin: "5px" }}
                />
                <TextField
                    fullWidth
                    id="brand"
                    name="brand"
                    label="Brand"
                    value={formik.values.brand}
                    onChange={formik.handleChange}
                    error={formik.touched.brand && Boolean(formik.errors.brand)}
                    helperText={formik.touched.brand && formik.errors.brand}
                    sx={{ margin: "5px" }}
                />
                <TextField
                    fullWidth
                    id="picture"
                    name="picture"
                    label="Picture"
                    value={formik.values.picture}
                    onChange={formik.handleChange}
                    error={formik.touched.picture && Boolean(formik.errors.picture)}
                    helperText={formik.touched.picture && formik.errors.picture}
                    sx={{ margin: "5px" }}
                />
                <TextField
                    fullWidth
                    id="price"
                    name="price"
                    label="Price"
                    type="number"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    error={formik.touched.price && Boolean(formik.errors.price)}
                    helperText={formik.touched.price && formik.errors.price}
                    sx={{ margin: "5px" }}
                />
                <TextField
                    fullWidth
                    id="quantity"
                    name="quantity"
                    label="Quantity"
                    type="number"
                    value={formik.values.quantity}
                    onChange={formik.handleChange}
                    error={formik.touched.quantity && Boolean(formik.errors.quantity)}
                    helperText={formik.touched.quantity && formik.errors.quantity}
                    sx={{ margin: "5px" }}
                />
                <FormControl fullWidth sx={{ margin: "5px" }}>
                    <InputLabel id="categoryLabel">Category</InputLabel>
                    <Select
                        fullWidth
                        labelId='categoryLabel'
                        id="category"
                        name="category"
                        label="Category"
                        value={formik.values.category}
                        onChange={formik.handleChange}
                        error={formik.touched.category && Boolean(formik.errors.category)}
                    >
                        <MenuItem value="MLA1652">Notebooks</MenuItem>
                        <MenuItem value="MLA8883">Netbooks</MenuItem>
                        <MenuItem value="MLA126689">Ultrabooks</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" fullWidth sx={{ margin: "5px" }} type='submit'>
                    Submit
                </Button>
            </form>
        </div>
    );
};