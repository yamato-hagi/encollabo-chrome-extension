import React, { useState, useCallback, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import $ from "jquery";

const Main = (): JSX.Element => {
  let ran = 1;
  const intervalRef = useRef<any>(null);
  const [count, setCount] = useState(0);
  // 関数定義

  useEffect(() => {
    const pushButtonDakoku = function (): void {
      (document.querySelector(
        "#stampPop > button:nth-child(2)"
      ) as HTMLInputElement).disabled = true;
    };
    const dakoku = document.querySelector(
      "#header > dl:nth-child(2) > dd > button"
    );
    dakoku?.setAttribute("onclick", "stampFn();pushButtonDakoku()");
  }, []);

  const everyTimeDo = function (): void {
    //autocomplete input value 取れない
    console.log(location.pathname === "/ibj/login");
    console.log(document.querySelector("#username") !== undefined);
    console.log(
      (document.querySelector("#username") as HTMLInputElement).value
    );
    if (
      location.pathname === "/ibj/login" &&
      document.querySelector("#username") !== undefined &&
      (document.querySelector("#username") as HTMLInputElement).value !== ""
    ) {
      document.getElementsByName("login")[0].click();
    }
  };

  const pushButtonDakoku = function (): void {
    (document.querySelector(
      "#stampPop > button:nth-child(2)"
    ) as HTMLInputElement).disabled = true;
  };
  const stop = function (): void {
    const dakoku = document.querySelector(
      "#header > dl:nth-child(2) > dd > button"
    );
    dakoku?.setAttribute("onclick", "pushButton()");
  };

  const inputKyujithu = function (): void {
    const trTags = document
      .querySelector("#list_att_add > tbody")
      ?.getElementsByTagName("tr");
    if (trTags !== undefined) {
      for (let i = 0; i < trTags.length; i++) {
        const td = document.getElementById(`category_box${i.toString()}`);

        if (td === undefined || td === null) continue;
        if (td.textContent === undefined || td.textContent === null) continue;

        const kintaiCode = td.textContent?.replace("\n", "").replace(/\s/g, "");
        if (kintaiCode !== "") continue;
        console.log(kintaiCode);
        const button = document.querySelector(`#add_btn${i}`);
        if (button === undefined || button === null) continue;
        (button as HTMLElement).click();
        $(`#category_box${i}>select`).val("14,11").trigger("change");

        $(`#category_box${i}>select`)[0].dispatchEvent(new Event("change"));
      }
    }
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button color="secondary">{count}</Button>
      <Button onClick={inputKyujithu} variant="contained" color="success">
        休日入力
      </Button>
      <Button onClick={stop} variant="outlined" color="error">
        ストップ
      </Button>
    </Stack>
  );
};

const app = document.createElement("div");
document.body.prepend(app);
ReactDOM.render(<Main />, app);
