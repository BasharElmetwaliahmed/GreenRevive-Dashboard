import { BASE_URL } from "../utils/constants";
import { headers } from "../utils/helpers";

export async function createNewArticle(article) {

  console.log(article)
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
   console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw error.errors;
  }
}
