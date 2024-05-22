import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import { icons } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import html2canvas from "html2canvas";
import { toast, Bounce } from "react-toastify";


const IconPreview = ({downloadIcon}) => {
  const [storageValue, setStorageValue] = useState();

  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value"));
    setStorageValue(storageData);
  }, [updateStorage]);

  useEffect(() => {
    if(downloadIcon){
      downloadPngLogo();
      toast.success('Download Successfully', {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    }
  },[downloadIcon]);
 

  const downloadPngLogo = () => {
    const downloadLogoDiv = document.getElementById("downloadLogoDiv");

    html2canvas(downloadLogoDiv,{
      backgroundColor: null,
    }).then((canvas) => {
      const pngImage = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngImage;
      downloadLink.download = 'Logoloom.png'; // The file name
      downloadLink.click();
    });
    }
  // function for icon

  const Icon = ({ name, color, size, rotate }) => {
    const LucideIcon = icons[name];

    if (!LucideIcon) {
      return;
    }
    return (
      <LucideIcon
        color={color}
        size={size}
        style={{ transform: `rotate(${rotate}deg)` }}
      />
    );
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        style={{ padding: storageValue?.bgPadding }}
        className="h-[500px] w-[500px] outline-dotted bg-gray-200 outline-gray-300"
      >
        <div
          id="downloadLogoDiv"
          className="w-full h-full flex items-center justify-center"
          style={{
            borderRadius: storageValue?.bgRounded,
            background: storageValue?.bgColor,
          }}
        >
          {storageValue?.icon?.includes(".png") ? <img src={'/api/png/'+storageValue?.icon}
           style={{
            height: storageValue?.iconSize,
            width: storageValue?.iconSize,
            transform: `rotate(${storageValue?.iconRotate}deg)`,
            
           }}/>
          :<Icon
            name={storageValue?.icon}
            color={storageValue?.iconColor}
            size={storageValue?.iconSize}
            rotate={storageValue?.iconRotate}
          />}
          
        </div>
      </div>
    </div>
  );
};

export default IconPreview;
