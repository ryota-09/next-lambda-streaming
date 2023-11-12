import {
  RecommendedProducts,
} from "@/ui/Recommended-products";
import { Reviews } from "@/ui/Reviews";
import { SingleProduct } from "@/ui/Single-product";
import { CardsSkeleton } from "@/ui/skeletons";
import { Suspense } from "react";

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-8 lg:space-y-14">
      <SingleProduct
        data={fetch(`https://app-router-api.vercel.app/api/products?id=1`)}
      />

      <Suspense fallback={<CardsSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <RecommendedProducts
          data={fetch(
            // We intentionally delay the reponse to simulate a slow data
            // request that would benefit from streaming
            `https://app-router-api.vercel.app/api/products?delay=1000&filter=1`,
            {
              // We intentionally disable Next.js Cache to better demo
              // streaming
              cache: "no-store",
            }
          )}
        />
      </Suspense>

      <Suspense fallback={<CardsSkeleton />}>
        <Reviews
          data={fetch(
            // We intentionally delay the reponse to simulate a slow data
            // request that would benefit from streaming
            `https://app-router-api.vercel.app/api/reviews?delay=5000`,
            {
              // We intentionally disable Next.js Cache to better demo
              // streaming
              cache: "no-store",
            }
          )}
        />
      </Suspense>
    </div>
  );
}
