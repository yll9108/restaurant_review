"use client";
import { ReactNode } from "react";
import { Input, TextType } from "@/components/common/Input";
import { Rating, ReviewInputProps } from "@/types/types";
import {
  BsEmojiAngry,
  BsEmojiAstonished,
  BsEmojiExpressionless,
  BsEmojiSmile,
  BsEmojiHeartEyes,
} from "react-icons/bs";

export default function ReviewInput(props: ReviewInputProps) {
  //Ratings
  const options: Array<Rating> = [];
  for (let i = 1.0; i <= 5.0; i += 0.5) {
    let face: ReactNode;
    if (i === 1.0 || i === 1.5) {
      face = <BsEmojiAngry />;
    } else if (i === 2.0 || i === 2.5) {
      face = <BsEmojiAstonished />;
    } else if (i === 3.0 || i === 3.5) {
      face = <BsEmojiExpressionless />;
    } else if (i === 4.0 || i === 4.5) {
      face = <BsEmojiSmile />;
    } else {
      face = <BsEmojiHeartEyes />;
    }
    options.push({ num: i, face });
  }

  console.log("reviewRating1", props.reviewRating);
  console.log("reviewTitle1", props.reviewTitle);
  console.log("reviewDesc1", props.reviewDesc);

  return (
    <div className="flex flex-col ">
      <div className="bg-red-300 flex ">
        {options.map((option) => (
          <label key={option.num} className="flex items-center">
            <input
              type="radio"
              name="rating"
              value={option.num}
              checked={props.reviewRating === option.num}
              onChange={() => props.setReviewRating(option.num)}
            />
            {option.face}
            {option.num}
          </label>
        ))}
      </div>
      <Input
        textType={TextType.text}
        placeholder="Title"
        name="title"
        value={props.reviewTitle}
        onChange={(event) => props.setReviewTitle(event?.target.value)}
      />
      <textarea
        className="textarea textarea-bordered"
        placeholder="Description"
        name="description"
        value={props.reviewDesc}
        onChange={(event) => props.setReviewDesc(event?.target.value)}
      ></textarea>
    </div>
  );
}
