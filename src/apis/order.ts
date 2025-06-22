import { components, operations } from "../types/server";
import { https } from "./instance";

export const getMyOrders = async (
  params?: operations["query_2"]["parameters"]["query"],
): Promise<components["schemas"]["QueryMyOrderResponses"]> => {
  return await https.get("/orders/my", { params });
};

export const cancelOrder = async (
  id: operations["cancel"]["parameters"]["path"]["id"],
): Promise<components["schemas"]["Unit"]> => {
  return await https.post(`/orders/${id}/cancel`);
};
