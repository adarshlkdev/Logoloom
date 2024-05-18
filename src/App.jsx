import { useState } from "react";
import BackgoundController from "./components/BackgoundController";
import Header from "./components/Header";
import IconController from "./components/IconController";
import SideNav from "./components/SideNav";
import IconPreview from "./components/IconPreview";
import { UpdateStorageContext } from "./context/UpdateStorageContext";
import ToastFun from "./components/ToastFun";

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [updateStorage, setUpdateStorage] = useState({});

  const [downloadIcon , setDownloadIcon] = useState();

  return (
    <>
     <ToastFun />
      <UpdateStorageContext.Provider
        value={{ updateStorage, setUpdateStorage }}
      >
        <Header DownloadIcon={setDownloadIcon} />

        <div className="w-64 fixed">
          <SideNav selectedIndex={(value) => setSelectedIndex(value)} />
        </div>

        <div className="ml-64 grid grid-cols-1 md:grid-cols-6">
          <div className="md:col-span-2 h-[700px] border shadow-sm p-10 overflow-auto">
            {selectedIndex == 0 ? <IconController /> : <BackgoundController />}
          </div>
          <div className="md:col-span-4">
            <IconPreview  downloadIcon={downloadIcon}  />
          </div>
          </div>
      </UpdateStorageContext.Provider>
    </>
  );
};

export default App;
