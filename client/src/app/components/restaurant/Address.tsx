import React from "react";

interface AddProps {
  add: string;
}

function Address({ add }: AddProps) {
  return (
    <>
      <div className="bg-warning">
        <div>{add}</div>
      </div>
    </>
  );
}

export default Address;
