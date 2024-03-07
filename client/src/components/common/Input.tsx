"use client";

export enum TextType {
  text,
  password,
  email,
}

export type TextProps = {
  textType: TextType;
  className?: string;
  placeholder?: string;
};

export default function Input(props: TextProps) {
  let type = "";
  switch (props.textType) {
    case TextType.text:
      type = "text";
      break;
    case TextType.password:
      type = "password";
      break;
    case TextType.email:
      type = "email";
      break;
    default:
      type = "text";
      break;
  }
  return (
    <input
      type={type}
      placeholder={props.placeholder}
      className="input input-bordered w-64 mb-4"
    />
  );
}
