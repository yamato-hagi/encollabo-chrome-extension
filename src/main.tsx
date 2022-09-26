import React, { useState, useCallback, useRef } from "react";
import ReactDOM from "react-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import $ from "jquery";

const Main = (): JSX.Element => {
  let ran = 1;
  const intervalRef = useRef<any>(null);
  const [count, setCount] = useState(0);
  // 関数定義

  const everyTimeDo = function (): void {
    if (document.getElementsByName("login")[0] !== undefined) {
      document.getElementsByName("login")[0].click();
    }
  };

  const inputKyujithu = function (): void {
    if (typeof jQuery !== "undefined") {
      // jQueryの読み込み確認
      $(function () {
        alert("jQuery is ready.");
      });
    }

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

  const start = useCallback(() => {
    if (intervalRef.current !== null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setCount((c) => c + 1);
      swipe();
    }, Math.random() * 4000 + 1000);
  }, []);

  const stop = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  const swipe = function (): void {
    ran = Math.random();
    const result = Math.floor(ran * 100);
    if (result > 84) {
      const badElem = document.querySelector(
        "#s1362659109 > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div.Mt\\(a\\).Px\\(4px\\)--s.Pos\\(r\\).Expand.H\\(--recs-card-height\\)--ml.Maw\\(--recs-card-width\\)--ml > div > div > div.Pos\\(a\\).B\\(0\\).Iso\\(i\\).W\\(100\\%\\).Start\\(0\\).End\\(0\\) > div > div.Mx\\(a\\).Fxs\\(0\\).Sq\\(70px\\).Sq\\(60px\\)--s.Bd.Bdrs\\(50\\%\\).Bdc\\(\\$c-ds-border-gamepad-nope-default\\) > button"
      );
      if (badElem === null) return;
      (badElem as HTMLElement).click();
    } else {
      const goodElem = document.querySelector(
        "#s1362659109 > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div.Mt\\(a\\).Px\\(4px\\)--s.Pos\\(r\\).Expand.H\\(--recs-card-height\\)--ml.Maw\\(--recs-card-width\\)--ml > div > div > div.Pos\\(a\\).B\\(0\\).Iso\\(i\\).W\\(100\\%\\).Start\\(0\\).End\\(0\\) > div > div.Mx\\(a\\).Fxs\\(0\\).Sq\\(70px\\).Sq\\(60px\\)--s.Bd.Bdrs\\(50\\%\\).Bdc\\(\\$c-ds-border-gamepad-like-default\\) > button > span > span"
      );
      if (goodElem === null) return;
      (goodElem as HTMLElement).click();
    }
  };

  everyTimeDo();
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
