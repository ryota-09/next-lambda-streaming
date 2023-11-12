import { fetchText } from "@/lib/data";

export default async function Text() {
  const data = await fetchText();
  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}
      <div className="text-lg font-bold flex justify-center bg-blue-500">
        <div>{data}</div>
      </div>
    </>
  );
}
