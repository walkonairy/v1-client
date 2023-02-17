import React, { useEffect } from "react";
import { useAppSelector } from "@asow/core/redux";

import { useHistory } from "react-router-dom";
import { Button } from "@asow/ui";

const Home = () => {
  const user = useAppSelector((state) => state.user);
  const student = useAppSelector((state) => state?.student);

  const history = useHistory();

  useEffect(() => {
    console.log(user);
    console.log(student);
  }, []);

  return (
    <div>
      home
      <div style={{ marginTop: 16 }}>
        <button
          type="button"
          onClick={() => {
            history.push("/v1/login");
          }}
        >
          去login
        </button>
      </div>
      <Button type={"link"}>Hello</Button>
    </div>
  );
};

export default Home;
