import { components, operations } from "../types/server";
import { https } from "./instance";

export const getSocialUrl = async (
  params: operations["create"]["parameters"]["query"],
): Promise<components["schemas"]["CreateOauthUrlResponse"]> => {
  return await https.get("/members/social/url", { params });
};
