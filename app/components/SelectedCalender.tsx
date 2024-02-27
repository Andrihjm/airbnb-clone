"use client";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { DateRange } from "react-date-range";
import { useState } from "react";

export default function SelectedCalender() {
  const [state, setState] = useState([
    {
      startData: new Date(),
      endData: new Date(),
      key: "selection",
    },
  ]);

  return (
    <DateRange
      date={new Date()}
      showDateDisplay={false}
      rangeColors={["#0f172a"]}
      ranges={state}
      onChange={(item) => setState([item.selection] as any)}
      minDate={new Date()}
      direction="vertical"
    />
  );
}
