"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function HeaderLogo() {
  const homeRouter = useRouter();

  const clickedHomeHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    homeRouter.push("/");
  };
  return (
    <div className=" flex flex-1 ml-4 sm:ml-12 items-center">
      <a
        className="btn btn-ghost text-xl p-0 text-accent"
        onClick={clickedHomeHandler}
      >
        <Image src="/logo.png" width={40} height={40} alt="logo" />
      </a>
    </div>
  );
}
