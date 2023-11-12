import { fetchTodos } from "@/lib/data";

export default async function Todos() {
  const data = await fetchTodos();
  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}
      <div className="flex gap-5">
        <div className="border-4 border-indigo-300">
          <div>userId: {data[0].id}</div>
          <div>Title: {data[0].title}</div>
        </div>
        <div className="border-4 border-indigo-300">
          <div>userId: {data[1].id}</div>
          <div>Title: {data[1].title}</div>
        </div>
        <div className="border-4 border-indigo-300">
          <div>userId: {data[2].id}</div>
          <div>Title: {data[2].title}</div>
        </div>
        <div className="border-4 border-indigo-300">
          <div>userId: {data[3].id}</div>
          <div>Title: {data[3].title}</div>
        </div>
        <div className="border-4 border-indigo-300">
          <div>userId: {data[4].id}</div>
          <div>Title: {data[4].title}</div>
        </div>
      </div>
    </>
  );
}
