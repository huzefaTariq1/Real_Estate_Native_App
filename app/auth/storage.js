import * as SecureStore from "expo-secure-store";
import jwt_decode from "jwt-decode";

const key = "authToken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error Storing auth token", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("error getting auth", error);
  }
};

const getUser = async () => {
  const token = await getToken();
  if (token) return jwt_decode(token);
  return null;
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing auth token", error);
  }
};

export default {
  getUser,
  removeToken,
  storeToken,
  getToken,
};
