const APIURL = "https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/";

export async function fetchPosts() {
  try {
    const response = await fetch(`${APIURL}posts`);
    const data = await response.json();
    console.log(data) //= and array of objs
    return data;
  } catch (err) {
    throw err;
  }
}

export async function registerUser(username, password) {
  try {
    const response = await fetch(`${APIURL}users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
}
