const APIURL = "https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/";

export async function fetchPosts() {
  try {
    const response = await fetch(`${APIURL}posts`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
