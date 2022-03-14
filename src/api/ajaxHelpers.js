const APIURL = "https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/";

export async function fetchPosts() {
  try {
    const response = await fetch(`${APIURL}posts`);
    const data = await response.json();
    return data.data.posts;
  } catch (err) {
    throw err;
  }
}

export async function fetchUserData(token) {
  try {
    const response = await fetch(`${APIURL}users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
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

export async function fetchUserToken(username, password) {
  try {
    const response = await fetch(`${APIURL}users/login`, {
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
    return data.data.token;
  } catch (err) {
    throw err;
  }
}

export async function fetchQueryResults({ queryString }) {
  const url = `${APIURL}/keyword=${queryString}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (err) {
    throw err;
  }
}

export async function createPost(postObj, token) {
  const response = await fetch(`${APIURL}posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: {
        title: postObj.title,
        description: postObj.description,
        location: postObj.location,
        price: postObj.price,
        willDeliver: postObj.willDeliver,
      },
    }),
  });
  const data = await response.json()
  return data
}
