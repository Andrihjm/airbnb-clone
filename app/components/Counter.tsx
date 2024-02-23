"use client"

import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

    const Counter = () => {
  const [amount, setAmount] = useState(0);

  function increacee() {
    setAmount(amount + 1);
  }
  function decrease() {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  }

  return (
    <>
      <div className="flex items-center gap-x-4">
        <Button className="outline" size={"icon"} type={"button"} onClick={decrease}>
          <Minus className="h-4 w-4" />
        </Button>
        <p className="font-medium text-lg">{amount}</p>
        <Button className="outline" size={"icon"} type="button" onClick={increacee}>
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
};

export default Counter;
