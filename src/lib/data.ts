export async function fetchPosts() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      cache: "no-store",
    });

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch posts data.");
  }
}

export async function fetchTodos() {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 6000));

    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      cache: "no-store",
    });

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch todos data.");
  }
}

export async function fetchText() {
  try {

    const response = await fetch("https://hub.dummyapis.com/delay?seconds=8", {
      cache: "no-store",
    });

    console.log(response)

    return "サクセス"
  } catch (error) {
    throw new Error("Failed to fetch todos data.");
  }
}
