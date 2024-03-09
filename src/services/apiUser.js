import { BASE_URL } from "../utils/constants";

export async function createUserApi(newUser) {
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${
      localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user")).token
        : ""
    }`,
  };

  try {
    const res = await fetch(`${BASE_URL}/api/admin/store`, {
      method: "POST",

      headers: headers,
      body: newUser,
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

export async function getUserApi(searchQuery, page) {
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${
      localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user")).token
        : ""
    }`,
  };
  try {
    let res;
    if (!searchQuery) {
      if (!page)
        res = await fetch(`${BASE_URL}/api/admin/users`, {
          method: "GET",
          headers,
        });
      else {
        res = await fetch(`${BASE_URL}/api/admin/users?page=${page}`, {
          method: "GET",
          headers,
        });
      }
    } else {
      res = await fetch(`${BASE_URL}/api/admin/search`, {
        method: "POST",
        headers,
        body: searchQuery,
      });
    }
    if (res.status === 401) {
      localStorage.removeItem('user')
    }
    const { data } = await res.json();
    if (!searchQuery) return { data: data.users.data, count: data.users.total };
    else {
      return { data: data.data };
    }
  } catch (err) {
    throw new Error(err);
  }
}

export async function deleteUserApi(id) {
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${
      localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user")).token
        : ""
    }`,
  };
  try {
    const res = await fetch(`${BASE_URL}/api/admin/destroy/${id}`, {
      method: "POST",
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

export async function changeUserRoleApi({ body, id }) {
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${
      localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user")).token
        : ""
    }`,
  };
  try {
    const res = await fetch(`${BASE_URL}/api/admin/update/${id}`, {
      method: "POST",
      headers,
      body: body,
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
