import { Skeleton } from "@/src/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar skeleton */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b-2 border-primary/80 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          <Skeleton className="h-10 w-48" style={{ borderRadius: 0 }} />
          <div className="hidden md:flex gap-8">
            <Skeleton className="h-6 w-20" style={{ borderRadius: 0 }} />
            <Skeleton className="h-6 w-20" style={{ borderRadius: 0 }} />
            <Skeleton className="h-6 w-20" style={{ borderRadius: 0 }} />
            <Skeleton className="h-6 w-20" style={{ borderRadius: 0 }} />
          </div>
          <Skeleton className="h-10 w-10 md:hidden" style={{ borderRadius: 0 }} />
        </div>
      </div>

      {/* Hero section skeleton */}
      <div className="relative flex min-h-[80vh] flex-col items-center justify-center px-4 pt-28">
        <div className="mx-auto max-w-5xl w-full">
          <div className="flex flex-col items-center text-center space-y-8">
            <Skeleton className="h-8 w-64" style={{ borderRadius: 0 }} />
            <Skeleton className="h-16 w-full max-w-3xl" style={{ borderRadius: 0 }} />
            <Skeleton className="h-6 w-full max-w-2xl" style={{ borderRadius: 0 }} />
            <div className="flex gap-4">
              <Skeleton className="h-12 w-48" style={{ borderRadius: 0 }} />
              <Skeleton className="h-12 w-32" style={{ borderRadius: 0 }} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-2xl mt-8">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-24" style={{ borderRadius: 0 }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sections skeleton */}
      <div className="space-y-24 px-4 py-24">
        {[1, 2, 3].map((i) => (
          <div key={i} className="mx-auto max-w-7xl">
            <Skeleton className="h-12 w-64 mx-auto mb-8" style={{ borderRadius: 0 }} />
            <div className="grid gap-6 md:grid-cols-3">
              {[1, 2, 3].map((j) => (
                <Skeleton key={j} className="h-48" style={{ borderRadius: 0 }} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
