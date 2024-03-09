import { BASE_URL } from "../utils/constants";

export async function createNewArticle(article) {
    const headers = {
      Accept: "application/json",
      Authorization: `Bearer ${
        localStorage.getItem("user")
          ? JSON.parse(localStorage.getItem("user")).token
          : ""
      }`,
    };
  try {
    const res = await fetch(`${BASE_URL}/api/admin/articles`, {
      method: "POST",
      headers,
      body: article,
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

export async function getArticles(page) {
  let res;
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${
      localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user")).token
        : ""
    }`,
  };

  try {
    res = await fetch(`${BASE_URL}/api/admin/articles?page=${page}`, {
      method: "GET",
      headers,
    });

    const data = await res.json();

    if (!res.ok) {
      throw data;
    }

    return data.data.articles;
  } catch (error) {
    throw error.errors;
  }
}

export async function deleteArticleApi(id) {
  try {
    const res = await fetch(`${BASE_URL}/api/admin/articles/${id}`, {
      method: "DELETE",
      headers: headers,
    });
    const data = await res.json();
    if (!res.ok) {
      throw data.errors;
    }

    return data;
  } catch (error) {
    console.log("err + ", error);
    throw new Error(error[0]);
  }
}

export async function updateArticleApi({ id, updatedArticle }) {
  try {
    const res = await fetch(`${BASE_URL}/api/admin/articles/${id}/edit`, {
      method: "POST",
      headers: headers,
      body: updatedArticle,
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
