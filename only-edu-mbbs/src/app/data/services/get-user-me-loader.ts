import axios from "axios";
import { getAuthToken } from "./get-token";
import qs from "qs";


export async function getUserMeLoader() {
  const baseUrl = process.env.API_URL || "https://admin.onlyeducation.co.in";

  const authToken = await getAuthToken();

  if (!authToken) return { ok: false, data: null, error: null };

  try {
    const response = await axios.get(baseUrl + "/api/users/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      // Axios automatically sets 'no-cache' for GET requests
    });

    const data = response.data;
    if (data.error) return { ok: false, data: null, error: data.error };
    return { ok: true, data: data, error: null };
  } catch (error) {
    console.log(error);
    return { ok: false, data: null, error: error };
  }
}