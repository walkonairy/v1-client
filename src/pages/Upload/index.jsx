import React from "react";
import axios from "axios";

const Upload = () => {
  function image2Base64(img) {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);
    return canvas.toDataURL("image/png");
  }

  const onChangeFile = (event) => {
    const { files } = event.target;

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      const base64 = e.target.result;
      onUpload(files[0].name, base64);
    };

    // onUpload(files[0]);
  };

  const onUpload = (name, base64) => {
    console.log(name);

    const url = `https://api.github.com/repos/walkonairy/asow-image/230131/contents/${name}`;
    // const url = `https://api.github.com/repos/walkonairy/imgs/contents/asow-image/230131/${name}`;

    const data = JSON.stringify({
      message: "txt file",
      content: base64,
    });

    const config = {
      method: "put",
      url,
      headers: {
        // 'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data,
    };

    axios(config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <input type="file" onChange={onChangeFile} />
      </div>
    </>
  );
};

export default Upload;
