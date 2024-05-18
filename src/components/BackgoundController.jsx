import React, { useContext, useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";

const BackgoundController = () => {
  const storagedValue = JSON.parse(localStorage.getItem("value"));

  const [rounded, setRounded] = useState(
    storagedValue ? storagedValue?.bgRounded : 0
  );
  const [padding, setPadding] = useState(
    storagedValue ? storagedValue?.bgPadding : 0
  );
  const [color, setColor] = useState(
    storagedValue ? storagedValue?.bgColor : "#000"
  );
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const updatedValue = {
      ...storagedValue,
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: color,
    };
    localStorage.setItem("value", JSON.stringify(updatedValue));
    setUpdateStorage(updatedValue);
  }, [rounded, padding, color]);

  return (
    <div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Rounded <span>{rounded} px</span>
        </label>
        <Slider
          defaultValue={[0]}
          max={512}
          step={1}
          onValueChange={(event) => setRounded(event[0])}
        />
      </div>

      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Padding <span>{padding} px</span>
        </label>
        <Slider
          defaultValue={[0]}
          max={200}
          step={1}
          onValueChange={(event) => setPadding(event[0])}
        />
      </div>

      <div className="py-2 h-screen">
        <label className="p-2 flex justify-between items-center">
          Color Picker
        </label>

        <ColorPickerController
          hideController={false}
          selectedColor={(color) => setColor(color)}
        />
      </div>
    </div>
  );
};

export default BackgoundController;
