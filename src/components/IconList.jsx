import React from 'react'
import { useState , useEffect } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { iconList } from '@/constants/icons'
import { icons } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import axios from 'axios';

const BaseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;


const IconList = ({selectedIcon}) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [pngIconList , setPngIconList] = useState([]);
    const storageValue = JSON.parse(localStorage.getItem("value"));
    const [icon , setIcon] = useState(storageValue?storageValue?.icon:'Smile');

    useEffect(() =>{
        getPngIcons();
    },[])

    const Icon = ({ name, color, size }) => {
        const LucideIcon = icons[name];
    
        if (!LucideIcon) {
          return;
        }
        return (
          <LucideIcon
            color={color}
            size={size}
          />
        );
      };

      const getPngIcons=()=>{
        axios.get(BaseUrl+'/getIcons.php').then(
            (resp) => {
            setPngIconList(resp.data);
            })
         }
  return (
    <div>
      <div>
      <label>Icon</label>
        <div
        onClick={()=> setOpenDialog(true)}
        className="p-3 bg-gray-200 cursor-pointer rounded-md w-[50px] h-[50px] my-2 flex items-center justify-center">
            {icon?.includes('.png')?<img src={'/png/'+icon}/>:<Icon name={icon} color={'#000'} size={20} />}
        </div>
     </div>
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle className="text-center text-2xl font-semibold">Pick your favourite Icon</DialogTitle>
      <DialogDescription>
      <Tabs defaultValue="icon" className="">
  <TabsList className="my-2 flex justify-center">
    <TabsTrigger value="basicIcons">Basic Icons</TabsTrigger>
    <TabsTrigger value="colorfulIcons">Colorfull Icons</TabsTrigger>
  </TabsList>
  <TabsContent value="basicIcons">
  <div className='grid grid-cols-2  md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6 '>
            {iconList.map((icon, index) => (
                <div className='border p-4 flex rounded-sm items-center justify-center cursor-pointer'
                  onClick={()=> {selectedIcon(icon);setOpenDialog(false);
                    setIcon(icon);
                  }}
                >
                    <Icon name={icon} color={'#000'} size={25} />
                </div>
                ))}
         </div>
  </TabsContent>

  <TabsContent value="colorfulIcons">
  <div className='grid grid-cols-2  md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6 '>
            {pngIconList.map((icon, index) => (
                <div className='border p-3 flex rounded-sm items-center justify-center cursor-pointer'
                  onClick={()=> {selectedIcon(icon);setOpenDialog(false);
                    setIcon(icon);
                  }}
                >
                    <img src= {'/png/'+icon}/>
                </div>
                ))}
         </div>
  </TabsContent>
</Tabs>
         
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
</div>
  )
}

export default IconList
