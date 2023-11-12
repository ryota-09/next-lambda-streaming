import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>
        Next.js App on Lambda Web Adapter
      </h1>
      <div className="flex justify-center gap-5">
        <Image alt="" src="/red.png" width={300} height={200} />
        <div>
          <h2 className="text-xl font-bold">Static Area</h2>
          <br />
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
      </div>
    </main>
  );
}
