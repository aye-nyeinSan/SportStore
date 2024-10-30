import type { Category, Product } from "@/types";
import apiClient from "./AxiosClient";

export default{
    getProducts() {
        return apiClient.get('/api/products');
      },
    getProduct(id: number) {
        return apiClient.get('/api/products/' + id)
    },
    saveProduct(product: Product){
        return apiClient.post('/api/products',product)
    },
    getProductsByCategory(category: string) {
        return apiClient.get(`/api/products?category=${category}`);
    },

}