export async function Reviews({ data }: { data: Promise<Response> }) {
  const reviews = await data.then((res) => res.json());

  return (
    <div className="space-y-6">
      <div className="text-lg font-medium text-red-500">Customer Reviews</div>
      <div className="space-y-8">
        {reviews.map((review: any) => {
          return (
            <>
              <div key={review.id} className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-x-2">
                    <div className="h-6 w-6 rounded-full bg-gray-700" />
                    <div className="text-sm text-white">{review.name}</div>
                  </div>
                </div>

                <div className="text-gray-400">{review.text}</div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
