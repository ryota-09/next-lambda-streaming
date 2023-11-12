export async function fetchPosts() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
      cache: "no-cache",
    });

    console.log("Data fetch complete after 3 seconds.");
    console.log(data.json())
    return data.json()
  } catch (error) {
    throw new Error("Failed to fetch posts data.");
  }
}
