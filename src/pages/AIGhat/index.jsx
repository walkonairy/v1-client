import React, { useEffect, useState } from "react";
import { axiosRequest } from "../../request";
import { Wrapper, Content, Button, Left, Right } from "./index.styled";
import TextareaA from "../../components/textarea/TextareaA";
import TextareaB from "../../components/textarea/TextareaB";
import TextareaC from "../../components/textarea/TextareaC";

import bg from "./img/BG.png";

const AIGhat = () => {
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const onChangeText = (e) => {
    const { value } = e.target;
    setPrompt(value);
  };

  const onKeyPress = (e) => {
    const code = e.charCode || e.which;
    if (loading) {
      e.preventDefault();
      return;
    }
    if (code === 13) {
      e.preventDefault();
      onClick();
    }
  };

  const onClick = () => {
    setLoading(true);
    setResult("");
    setError("");
    const url = "https://api.openai.com/v1/completions";
    const token = "Bearer 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";
    const headers = {
      headers: {
        Authorization: token,
      },
    };

    const body = {
      model: "text-davinci-003",
      prompt,
      temperature: 0.9,
      max_tokens: 4000,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.6,
      stop: "[' Human:', ' AI:']",
    };
    axiosRequest(url, "post", body, headers)
      .then((res) => {
        const result = res.data.choices[0].text;
        const filterResult = result?.replace("?", "");
        setResult(filterResult);
      })
      .catch((err) => {
        const error = err.response.data.error.message;
        console.log(error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "round",
        backgroundSize: "100% 100%",
        opacity: "0.9",
        // background: "linear-gradient(to top, #575656 100%, #2f2f30 0%)",
      }}
    >
      <div style={{ display: "flex", flex: "1 1 auto" }}>
        <Wrapper>
          <Left>left</Left>
          <Content>
            <TextareaA onChange={onChangeText} onKeyPress={onKeyPress} />
            <Button onClick={onClick} disabled={loading}>
              {/*{loading ? "发送中..." : "发送"}*/}
            </Button>

            <TextareaB>
              {!error && <div>{loading ? "AI思考中..." : result}</div>}
              {error && (
                <div style={{ color: "red" }}>他🐎的，报错了：{error}</div>
              )}
            </TextareaB>
          </Content>
          <Right>
            <div style={{ width: "60%" }}>
              <TextareaC />
            </div>
          </Right>
        </Wrapper>
      </div>
      <footer
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 40,
          fontSize: 14,
          color: "#fff",
        }}
      >
        © 2023 Asow AI
      </footer>
    </div>
  );
};

export default AIGhat;
