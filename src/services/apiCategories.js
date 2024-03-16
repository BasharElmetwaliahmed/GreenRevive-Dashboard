import { BASE_URL } from "../utils/constants";
import { headers } from "../utils/helpers";

export async function getCategories() {
    const headers = {
      Accept: "application/json",
      Authorization: `Bearer ${
        localStorage.getItem("user")
          ? JSON.parse(localStorage.getItem("user")).token
          : ""
      }`,
    };

  try {
    const res = await fetch(`${BASE_URL}/api/admin/category`, {
      method: "GET",
      headers: headers,
    });

    const data = await res.json();


    if (!res.ok) {
      throw data;
    }

    return data.data.categories;
  } catch (error) {
    throw error.errors;
  }
}


export async function deleteCategoryApi(id) {
    const headers = {
      Accept: "application/json",
      Authorization: `Bearer ${
        localStorage.getItem("user")
          ? JSON.parse(localStorage.getItem("user")).token
          : ""
      }`,
    };

  try {
    const res = await fetch(`${BASE_URL}/api/admin/category/${id}`, {
      method: "DELETE",
      headers: headers,
    });

    const data = await res.json();
    if (!res.ok) {
      throw data;
    }

    console.log(data)
    return data;
  } catch (error) {
    throw error.errors;
  }
}

export async function updateCategoryApi({id,updatedCategory}) {
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${
      localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user")).token
        : ""
    }`,
  };  try {
    const res = await fetch(`${BASE_URL}/api/admin/category/${id}`, {
      method: "POST",
      headers: headers,
      body: updatedCategory,
    });

    const data = await res.json();
    if (!res.ok) {
      throw data;
    }

    return data;
  } catch (error) {
    console.log(error)
    throw error.errors;
  }
}



export async function createCategoryApi(newCategory) {
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${
      localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user")).token
        : ""
    }`,
  };

  try {
    const res = await fetch(`${BASE_URL}/api/admin/category`, {
      method: "POST",
      headers: headers,
      body: newCategory,
    });

    const data = await res.json();
    if (!res.ok) {
      throw data;
    }

    return data;
  } catch (error) {
    throw error.errors;
  }
}
