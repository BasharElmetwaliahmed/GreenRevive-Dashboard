import { BASE_URL } from "../utils/constants";
export async function deleteAccount() {
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${
      localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user")).token
        : ""
    }`,
  };

  console.log(JSON.parse(localStorage.getItem("user")).token, headers);
  try {
    const res = await fetch(`${BASE_URL}/api/admin/delete-profile`, {
      method: "POST",
      headers,
    });
    const data = await res.json();
    console.log(data);
    if (!res.ok) {
      throw new Error("some thing went wrong");
    }
    return data;
  } catch (err) {
    throw new Error(err);
  }
}
