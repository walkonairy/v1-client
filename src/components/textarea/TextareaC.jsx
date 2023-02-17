import React from "react";
import top from "../../pages/AIGhat/img/AI_uidi4.png";
import bottom from "../../pages/AIGhat/img/AI_uidi3.png";
import sharp from "../../pages/AIGhat/img/AI_uidi2.png";
import { Input } from "./Textarea.styled";

function TextareaA() {
  return (
    <>
      <div style={{ position: "relative", width: "100%" }}>
        <div
          style={{
            border: "1px solid #FFF",
            height: 400,
            width: "100%",
            position: "absolute",
            background: "rgba(158,205,245,0.38)",
          }}
        />
        <Input as="div" style={{ height: 400, padding: 16 }} />

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
          src={top}
          alt=""
          style={{
            position: "absolute",
            bottom: -14,
            right: -14,
            width: 116,
            transform: "rotate(-180deg)",
          }}
        />

        <img
          src={sharp}
          alt=""
          style={{
            position: "absolute",
            top: -7,
            right: -15,
          }}
        />

        <img
          src={sharp}
          alt=""
          style={{
            position: "absolute",
            left: -8,
            bottom: -12,
            transform: "rotate(-180deg)",
          }}
        />
      </div>
    </>
  );
}

export default TextareaA;
