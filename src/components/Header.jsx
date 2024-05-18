import React from 'react'
import { Button } from './ui/button'
import { Download } from 'lucide-react'


function Header({DownloadIcon}){
  return (
    <div className='p-4 shadow-sm border flex justify-between items-center'>
      <div className='flex items-center gap-2 text-2xl font-bold text-primary'>
        <img src='/logo.svg' />
        <h2>Logoloom</h2>
      </div>
      <Button className="flex gap-2 items-center"
      onClick={()=> DownloadIcon(Date.now())}
      >Download <Download className='h-4 w-4'/></Button>
    </div>
  )
}

export default Header
