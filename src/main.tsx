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
