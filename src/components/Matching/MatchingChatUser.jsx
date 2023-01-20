import React from "react";
import { useSelector } from "react-redux";

const MatchingChatUser = () => {
  const chat = useSelector((state) => state.chat);

  return (
    <div>
      {" "}
      {chat.map((item) => {
        return (
          <div>
            <h5>{item.text}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default MatchingChatUser;
