import { components, operations } from "../types/server";
import { https } from "./instance";

export const getProducts = async (
  params?: operations["query"]["parameters"]["query"],
): Promise<components["schemas"]["QueryProductsResponse"][]> => {
  return await https.get("/products", { params });
};

export const getProductDetail = async (
  id: operations["query_1"]["parameters"]["path"]["id"],
): Promise<components["schemas"]["QueryProductDetailResponse"]> => {
  return await https.get(`/products/${id}`);
};
