import React from "react";
import "../Allcss.css/all.css";
import { background, Input } from "@chakra-ui/react";
const MyBag = () => {
  return (
    <>
      <div id="mybag">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <img
              src="https://i.pinimg.com/originals/66/22/ab/6622ab37c6db6ac166dfec760a2f2939.gif"
              alt="bag_gif"
            />
          </div>
          <div>
            <h2>My Bag</h2>
          </div>
        </div>

        <div id="bagin">
          <p>Noida, 201014</p>
          <Input
            variant="flushed"
            type="text"
            maxLength={"6"}
            placeholder="Change PIN Code...."
          />
        </div>
      </div>
    </>
  );
};

export default MyBag;
