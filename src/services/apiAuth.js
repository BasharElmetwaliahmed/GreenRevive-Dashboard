import toast from "react-hot-toast";
import { BASE_URL } from "../utils/constants";

export async function loginApi(userData) {
  try {
    const res = await fetch(`${BASE_URL}/api/admin/login`, {
      method: "POST",
      headers: {
        accept: "application/json",
      },
      body: userData,
    });
    const  data  = await res.json();
    if (!res.ok) {
      throw data.errors;
    }
    return data.data;
  } catch (errors) {


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
    console.log(err)
    toast.error(err.message[0])
    throw new Error(err);
  }

}