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
      throw data.errors;
    }

    return data.data;
  } catch (errors) {
    console.log(errors);
    throw errors;
  }
}

export async function logoutApi(token){
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${
      localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user")).token
        : ""
    }`,
  };
  try {
    const res = await fetch(`${BASE_URL}/api/admin/logout`, {
      method: "POST",
      headers
    });
    if(!res.ok){
      throw new Error('some thing went wrong');
    }
  } catch (err) {
    throw new Error(err);
  }

}