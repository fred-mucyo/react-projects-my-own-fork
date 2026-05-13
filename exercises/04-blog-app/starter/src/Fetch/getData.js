const BASEURL = "http://localhost:3001";

export async function getPosts() {
  try {
    const res = await fetch(`${BASEURL}/posts`);
    if (!res.ok) {
      throw new Error(`Http error ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("Error", err);
  }
}

export async function getUsers() {
  try {
    const res = await fetch(`${BASEURL}/users`);

    if (!res.ok) {
      throw new Error(`Http error ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(`We met an error ${err}`);
  }
}

export async function getCategories() {
  try {
    const res = await fetch(`${BASEURL}/categories`);
    if (!res.ok) {
      throw new Error(`HTPP Error happened ${res.status}`);
    }
    const data = await res.json();

    return data;
  } catch (err) {
    console.log("Error", err);
  }
}

