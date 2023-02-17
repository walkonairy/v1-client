import React, { useEffect, useState } from "react";
import { GetRandomNum } from "@asow/core/utils";

function Card({ name, x, y }) {
  return (
    <div>
      <div
        style={{
          width: 300,
          height: 180,
          border: "1px solid #cdcdcd",
          padding: 18,
          borderRadius: 16,
          position: "absolute",
          top: y,
          left: x,
          background: "green",
        }}
      >
        <div style={{ color: "#fff" }}>
          {name}
          <span style={{ fontSize: "24px" }}>猪</span>
        </div>
      </div>
    </div>
  );
}

function Test() {
  const width = window.screen.width / 1.3;
  const height = window.screen.height / 1.3;
  const COUNT = 200;
  const [data, setData] = useState([]);

  useEffect(() => {
    // console.log(data.length);
    // setInterval(() => {
    //   exe();
    // }, 500);
    if (data.length > COUNT) {
      setData([
        ...data,
        {
          text: "老婆我爱你～",
          x: width / 2,
          y: height / 2,
        },
      ]);
      return;
    }
    for (let i = 0; i < 1; i++) {
      setTimeout(() => {
        exe();
      }, 10);
    }
  }, [data]);

  const exe = () => {
    const _data = generateObj();
    setData((e) => [...e, _data]);
  };

  const generateObj = () => {
    return {
      text: "陈颖仪老婆是",
      x: GetRandomNum(0, width),
      y: GetRandomNum(0, height),
    };
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {data.map((item) => (
        <Card key={item.id} name={item.text} x={item.x} y={item.y} />
      ))}
    </div>
  );
}

export default Test;
