"use client";
import { CiHeart } from "react-icons/ci";

type FavBtnProps = {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isFav: Boolean;
};
const FavButton = (props: FavBtnProps) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      <CiHeart className={props.isFav ? "bg-warning-200" : "bg-accent-200"} />
    </button>
  );
};

export default FavButton;
