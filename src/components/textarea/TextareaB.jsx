import React from "react";
import top from "../../pages/AIGhat/img/AI_uidi4.png";
import circle from "../../pages/AIGhat/img/AI_uidi0.png";
import sharp from "../../pages/AIGhat/img/AI_uidi2.png";
import { Input } from "./Textarea.styled";

function TextareaA({ children }) {
  return (
    <>
      <div style={{ position: "relative" }}>
        <div
          style={{
            border: "1px solid #FFF",
            height: 600,
            width: "100%",
            position: "absolute",
            background: "rgba(158,205,245,0.38)",
          }}
        />
        <Input
          as="div"
          style={{
            height: 600,
            padding: "4px 26px 4px 4px",
            overflow: "overlay",
          }}
        >
          {children}
        </Input>

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
          src={sharp}
          alt=""
          style={{
            position: "absolute",
            top: -7,
            right: -15,
          }}
        />

        <img
          src={circle}
          alt=""
          style={{
            position: "absolute",
            top: 10,
            right: 4,
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
