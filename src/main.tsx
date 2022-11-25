import React, { useCallback, useRef } from "react";
import ReactDOM from "react-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import $ from "jquery";

const Main = (): JSX.Element => {
  let ran = 1;
  const intervalRef = useRef<any>(null);

  /////////////////////////////////////////////////////////////////////////////////////////ここだよ
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
  /////////////////////////////////////////////////////////////////////////////////////////ここだよ

  const inTimeButtonEle: HTMLElement | null = document.querySelector(
    "#stampPop > button:nth-child(1)"
  );
  const outTimeButtonEle: HTMLElement | null = document.querySelector(
    "#stampPop > button:nth-child(2)"
  );
  const headerEle: HTMLElement | null = document.querySelector("#header");
  const userNameInputEle: HTMLInputElement | null = document.querySelector(
    "#username"
  );
  const passwordInputEle: HTMLInputElement | null = document.querySelector(
    "#password"
  );
  const loginButtonEle: HTMLElement | null = document.querySelector(
    "#login > div.login_button > input[type=image]"
  );

  const hiddenPunch = (headerText: string) => {
    if (headerText.includes("未出勤")) {
      console.log("出勤のみ実行できます");
      inTimeButtonEle!.style.display = "";
      outTimeButtonEle!.style.display = "none";
    }

    if (headerText.includes("出勤済")) {
      console.log("退勤のみ実行できます");
      inTimeButtonEle!.style.display = "none";
      outTimeButtonEle!.style.display = "";
    }
    if (headerText.includes("退勤済")) {
      console.log("打刻は完了しています");
      inTimeButtonEle!.style.display = "none";
      outTimeButtonEle!.style.display = "none";
    }
  };

  !!userNameInputEle &&
    userNameInputEle!.value.length > 1 &&
    passwordInputEle!.value.length > 1 &&
    loginButtonEle &&
    loginButtonEle.click();

  !!headerEle &&
    !!inTimeButtonEle &&
    !!outTimeButtonEle &&
    hiddenPunch(headerEle.textContent ?? "");

  return (
    <Stack direction="row" spacing={2}>
      <Button onClick={inputKyujithu} variant="contained" color="success">
        休日入力
      </Button>
    </Stack>
  );
};

const app = document.createElement("div");
document.body.prepend(app);
ReactDOM.render(<Main />, app);
