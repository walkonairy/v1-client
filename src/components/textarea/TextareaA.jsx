import React from "react";
import top from "../../pages/AIGhat/img/AI_uidi4.png";
import bottom from "../../pages/AIGhat/img/AI_uidi3.png";
import sharp from "../../pages/AIGhat/img/AI_uidi2.png";
import { Input } from "./Textarea.styled";

function TextareaA({ ...rest }) {
  return (
    <>
      <div style={{ position: "relative" }}>
        <div
          style={{
            border: "1px solid #FFF",
            height: 80,
            width: "100%",
            position: "absolute",
            background: "rgba(158,205,245,0.38)",
          }}
        />
        <Input {...rest} placeholder="🤔️🤔️🤔️🤔️🤔️🤔️🤔️🤔️️️️️" />

        <img
          src={top}
          alt=""
          style={{
            position: "absolute",
            top: -8,
            left: -9,
            width: 116,
          }}
        />

        <img
          src={bottom}
          alt=""
          style={{
            position: "absolute",
            top: 88,
            right: 0,
            transform: "rotate(180deg)",
          }}
        />
        <img
          src={sharp}
          alt=""
          style={{
            position: "absolute",
            top: 75,
            left: -10,
            transform: "rotate(-180deg)",
          }}
        />
      </div>
    </>
  );
}

export default TextareaA;
