import { fetchPosts } from "@/lib/data";

export default async function Posts() {
  const data = await fetchPosts();
  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}
      <div>{data[0].title}</div>
    </>
  );
}
