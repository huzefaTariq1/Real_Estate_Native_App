import { create } from "apisauce";
import storage from "../auth/storage";

const apiClient = create({
  baseURL: "https://twiddle-production.up.railway.app",
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await storage.getToken();
  if (!authToken) return;
  const bearerToken = `Bearer ${authToken}`;
  request.headers["Authorization"] = bearerToken;
});

export default apiClient;
