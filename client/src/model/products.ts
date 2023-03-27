/*  B"H
*/

import data from "../data/products.json";
import { api } from "./myFetch";

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export function getProducts(): Product[] {

    api('products').then(res => {
        console.log(res);
    });
    return data.products;
}