import axios from "axios";

export interface Product {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
  }

    export const getAllProducts = async (): Promise<Product[]> => {
      const response = await axios.get<Product[]>('http://localhost:3000/products');
      return (response.data);
    }