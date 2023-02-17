import React, { useEffect } from "react";
import { cartesian, GetRandomNum } from "@asow/core/utils";

import { useAppSelector, useAppDispatch } from "@asow/core/redux";

import {
  updateAddress,
  changeDeposit,
} from "@asow/common-client/redux/slices/userSlice";
import { updateUserId } from "@asow/common-client/redux/slices/localStoreSlice";

import { useHistory } from "react-router-dom";
import { updateStudentId } from "../../redux/slices/studentSlice";
import { Button } from "@asow/ui";
import "@asow/ui/dist/index.css";

const Login = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state?.user);
  const student = useAppSelector((state) => state?.student);
  const store = useAppSelector((state) => state?.store);

  const history = useHistory();

  useEffect(() => {
    // console.log(user);
    const data = [
      { type: "color", values: ["Yellow", "Red"] },
      { type: "type", values: ["X", "Y"] },
    ];
    const r = cartesian(data);
    console.log(r);
  }, []);

  const _updateAddress = () => {
    console.log(store);
    dispatch(updateAddress("深圳湾壹号"));
    dispatch(updateStudentId(student.id + 1));
    dispatch(updateUserId(store.userId + 1));
  };

  const _changeDeposit = (type) => {
    if (type === "add") {
      dispatch(changeDeposit(user.deposit + 1000));
    } else {
      dispatch(changeDeposit(user.deposit - 1000));
    }
  };

  const goV2 = () => {
    window.location.href = window.location.origin + "/v2";
  };

  const goV3 = () => {
    window.location.href = window.location.origin + "/v3";
  };

  React.useEffect(() => {
    const x = GetRandomNum(1000, 9999);
    console.log(x);
    // const user = new User();
    // user.name = "123";
    // console.log(user);
  }, []);

  return (
    <div>
      <div>这里是CSR项目v1</div>
      <div style={{ marginTop: 16 }}>
        <Button type="button" onClick={goV2}>
          去V2
        </Button>
      </div>
      <div style={{ marginTop: 16 }}>
        <Button type="button" onClick={goV3}>
          去V3
        </Button>
      </div>

      <div style={{ marginTop: 16 }}>
        <Button
          type="button"
          onClick={() => {
            history.push("/v1/home");
          }}
        >
          去Home
        </Button>
      </div>

      <Button onClick={_updateAddress}>修改地址</Button>
      <div style={{ marginBottom: 32 }} />
      <Button onClick={() => _changeDeposit("add")}>增加存款1000</Button>
      <div style={{ marginBottom: 32 }} />
      <Button onClick={() => _changeDeposit("subtract")}>减少存款1000</Button>
      <div style={{ marginBottom: 32 }} />
      <div>当前地址：{user.address}</div>
      <div style={{ marginBottom: 32 }} />
      <div>当前存款: {user.deposit}</div>
      <div style={{ marginBottom: 32 }} />
      <div>当前Id: {student.id}</div>

      <div style={{ marginBottom: 32 }} />
      <div>当前Local Id: {store?.userId}</div>
    </div>
  );
};

export default Login;
