import React from "react";

function User() {
  return (
    <>
      <div className="flex flex-col">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div>Username</div>
      </div>
    </>
  );
}

export default User;
