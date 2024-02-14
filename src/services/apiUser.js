import { BASE_URL } from "../utils/constants";
import {  headers } from "../utils/helpers";

export async function createUserApi(newUser) {


  try {
    const res = await fetch(`${BASE_URL}/api/admin/store`, {
      method: "POST",

      headers: headers,
      body: newUser,
    });


    const data  = await res.json();
    if(!res.ok){
      throw  data
    }

    return data;
  } catch (error) {
      throw error.errors
  }
}

export async function getUserApi(token) {
  try {
    const res = await fetch(`${BASE_URL}/api/admin/users`, {
      method: "GET",
        
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const { data } = await res.json();
    return data.users.data;
  } catch (err) {
    throw new Error(err);
  }
}

export async function deleteUserApi(id) {
  try {
    const res = await fetch(`${BASE_URL}/api/admin/destroy/${id}`, {
      method: "POST",
      headers: headers,
    });

    console.log(res);

    const data = await res.json();
    if (!res.ok) {
      throw data;
    }

    return data;
  } catch (error) {
    throw error.errors;
  }
}