import myAxios from './ajax';
import {BASE_URL} from "../config";

//users
export const reqLogin = (username, password) =>{
  return myAxios.post(`${BASE_URL}/customers/login`, {username, password});
}

export const reqRegister = (user) => (
  myAxios.post('/register', user))

//products
export const reqProductList = (pageNum, pageSize) => (
  myAxios.get(`${BASE_URL}/products`, {params:{pageNum, pageSize}}))

export const reqProductsByCategory = (productCategoryId, pageNum, pageSize) =>  (
  myAxios.get(`${BASE_URL}/products/search`, {params:{productCategoryId,pageNum, pageSize}}))

//categories
export const reqCategories = () => (
  myAxios.get( `${BASE_URL}/categories`))