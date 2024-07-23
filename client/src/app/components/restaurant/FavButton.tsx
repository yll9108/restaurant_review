"use client";
import { CiHeart } from "react-icons/ci";
import { IoIosHeart } from "react-icons/io";

type FavBtnProps = {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isFav: Boolean;
};
const FavButton = (props: FavBtnProps) => {
  console.log("isFav", props.isFav);

  return (
    <button className={props.className} onClick={props.onClick}>
      <IoIosHeart className={props.isFav ? "fill-red-600" : "fill-gray-200"} />
    </button>
  );
};

export default FavButton;
