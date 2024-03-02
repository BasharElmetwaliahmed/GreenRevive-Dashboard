import { BASE_URL } from "../utils/constants";
import { headers } from "../utils/helpers";

export async function getCategories() {


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

 
  try {
    const res = await fetch(`${BASE_URL}/api/admin/category/${id}`, {
      method: "DELETE",
      headers: headers,
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

export async function updateCategoryApi({id,updatedCategory}) {

  try {
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
    throw error.errors;
  }
}



export async function createCategoryApi(newCategory) {


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
