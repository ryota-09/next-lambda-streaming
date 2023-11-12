export async function fetchPosts() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      cache: "no-cache",
    });

    const data = await response.json()
    return data
  } catch (error) {
    throw new Error("Failed to fetch posts data.");
  }
}

export async function fetchTodos() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 5000));

    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      cache: "no-cache",
    });

    const data = await response.json()
    return data
  } catch (error) {
    throw new Error("Failed to fetch todos data.");
  }
}
