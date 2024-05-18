import React, { useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";

const ColorPickerController = ({ hideController = false, selectedColor }) => {
  const [color, setColor] = useState("#6366f1");

  return (
    <ColorPicker
      value={color}
      onChange={(e) => {
        setColor(e);
        selectedColor(e);
      }}
      hideControls={hideController}
      hideEyeDrop
      hideAdvancedSliders
      hideColorGuide
      hideInputType
    />
  );
};

export default ColorPickerController;
