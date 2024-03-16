import React from "react";

function Address({ add }: DummyRestaurantData) {
  return (
    <>
      <div className="bg-warning">
        <div>{add}</div>
      </div>
    </>
  );
}

export default Address;
