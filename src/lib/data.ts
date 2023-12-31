"server-only";

export async function fetchPosts() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 0 },
  });

  const data = await response.json();
  return data;
}

export async function fetchTodos() {
  // await new Promise((resolve) => setTimeout(resolve, 6000));

  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    next: { revalidate: 0 },
  });

  const data = await response.json();
  return data;
}

export async function fetchText() {
  const response = await fetch("https://hub.dummyapis.com/delay?seconds=8", {
    next: { revalidate: 0 },
  });

  console.log(response);

  return "サクセス";
}
