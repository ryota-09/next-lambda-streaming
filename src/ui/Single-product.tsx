import Image from "next/image";

export const SingleProduct = async ({ data }: { data: Promise<Response> }) => {
  const product = await data.then((res) => res.json());

  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="col-span-full lg:col-span-1">
        <div className="space-y-2">
          <div className="flex gap-x-2">
            
          </div>
        </div>
      </div>

      <div className="col-span-full space-y-4 lg:col-span-2">
        <div className="truncate text-xl font-medium text-white lg:text-2xl">
          {product.name}
        </div>
        <div className="space-y-4 text-sm text-gray-200">
          <p>{product.description}</p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};
