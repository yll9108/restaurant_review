"use client";
import { Input, TextType } from "../common/Input";

export default function SearchBar() {
  return <Input textType={TextType.question} className="mr-2 mb-0" />;
}
