import NotFound from "./components/NotFound/NotFound";
import { Suspense } from "react";
export default function NotFoundPage() {
  return (
    <Suspense>
      <NotFound />
    </Suspense>
  );
}
