import { Smile } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import IconList from "./IconList";

const IconController = () => {
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [size, setSize] = useState(storageValue ? storageValue?.iconSize : 280);
  const [color, setColor] = useState(
    storageValue ? storageValue?.iconColor : "#fff"
  );

  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  const [icon , setIcon] = useState(storageValue?storageValue?.icon:'Smile');

  useEffect(() => {
    try {
      const updatedValue = {
        iconSize: size,
        iconColor: color,
        icon: icon,
      };
      setUpdateStorage(updatedValue);
      localStorage.setItem("value", JSON.stringify(updatedValue));
    } catch (error) {
      console.error("Error storing data in localStorage:", error);
      // Handle the error gracefully, such as notifying the user or using a fallback strategy.
    }
  }, [size, color , icon]);


  return (
    <div>
      <div>
      <IconList selectedIcon={(icon) => setIcon(icon)} />

        <div className='py-2'>
            <label className='p-2 flex justify-between items-center'>Size <span>{size} px</span></label>
            <Slider className="cursor-pointer" defaultValue={[280]} max={512} step={1} 
            onValueChange={(event) => setSize(event[0])} />
         </div>
        </div>

        <div className="py-2 h-screen">
          <label className="p-2 flex justify-between items-center">
            Color Picker
          </label>

          <ColorPickerController
            hideController={true}
            selectedColor={(color) => setColor(color)}
          />
        </div>
      </div>
  );
};

export default IconController;
