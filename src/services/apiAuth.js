import { BASE_URL } from "../utils/constants";

export async function loginApi(useData) {
  try {
    const res = await fetch(`${BASE_URL}/api/admin/login`, {
      method: "POST",
      headers: {
        accept: "application/json",
      },
      body: useData,
    });
    const  data  = await res.json();
    if (!res.ok) {
      throw data;
    }

    return data.data;
  } catch (error) {
    console.log(error);
    throw error.errors;
  }
}

export async function logoutApi(token){
  try {
    const res = await fetch(`${BASE_URL}/api/admin/logout`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if(!res.ok){
      throw new Error('some thing went wrong');
    }
  } catch (err) {
    throw new Error(err);
  }

}