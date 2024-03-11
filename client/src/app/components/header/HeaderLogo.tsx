"use client";
import { useRouter } from "next/navigation";

export default function HeaderLogo() {
  const homeRouter = useRouter();

  const clickedHomeHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    homeRouter.push("/");
  };
  return (
    <div className="flex-1 ml-12">
      <a className="btn btn-ghost text-xl p-0" onClick={clickedHomeHandler}>
        home
      </a>
    </div>
  );
}
