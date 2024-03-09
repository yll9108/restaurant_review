import React from "react";

interface TagsProps {
  tags: string;
}

function Tags({ tags }: TagsProps) {
  return (
    <>
      <div className="bg-secondary flex gap-5">
        <div>{tags}</div>
        <div>heart icon</div>
      </div>
    </>
  );
}

export default Tags;
