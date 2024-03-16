import { BASE_URL } from "../utils/constants";
import { toast } from "react-hot-toast";

export async function deleteAccount() {
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${
      localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user")).token
        : ""
    }`,
  };

  try {
    const res = await fetch(`${BASE_URL}/api/admin/delete-profile`, {
      method: "POST",
      headers,
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error("some thing went wrong");
    }
    return data;
  } catch (err) {
   toast.error(err);

    throw new Error(err);
  }
}

export async function changePasswordApi(body) {
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${
      localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user")).token
        : ""
    }`,
  };

  try {
    const res = await fetch(`${BASE_URL}/api/admin/change-password`, {
      method: "POST",
      headers,
      body,
    });
    const data = await res.json();
    if (!res.ok) {
      throw data;
    }
    return data;
  } catch (error) {
    if (error?.errors.message) toast.error(error.errors.message[0]);
    throw error.errors;
  }
}
