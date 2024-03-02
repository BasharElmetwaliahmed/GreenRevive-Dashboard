import { BASE_URL } from "../utils/constants";
import { headers } from "../utils/helpers";

export async function createNewArticle(article) {
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
  try {
    res = await fetch(`${BASE_URL}/api/admin/articles?page=${page}`, {
      method: "GET",
      headers,
    });

    const data = await res.json();

    if (!res.ok) {
      throw data;
    }
    console.log(data);

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
