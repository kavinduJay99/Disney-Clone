import logo from './../assets/Images/logo.png'
import {HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv} from "react-icons/hi2";
import {HiPlus,HiDotsVertical} from "react-icons/hi";
import HeaderItem from './HeaderItem';
import { useState } from 'react';

function Header() {

  const [toggle, setToggle]=useState(false);

  const menu=[
    {
      name:'Home',
      icon:HiHome
    },{
      name:'Search',
      icon:HiMagnifyingGlass
    },
    {
      name:'Watch List',
      icon:HiPlus
    },
    {
      name:'Originals',
      icon:HiStar
    },
    {
      name:'Movies',
      icon:HiPlayCircle
    },
    {
      name:'Series',
      icon:HiTv
    }
  ]
  return (
    <div  className='flex items-center justify-between p-5'>
      <div className='flex items-center  gap-8'>
        <img src={logo} className='w-[80px] md:w-[115px] object-cover' />
  
        <div className='hidden md:flex gap-8'>
        {menu.map((item) => (
          <HeaderItem name={item.name} Icon={item.icon} />
        ))}
        </div>

        <div className='flex md:hidden gap-5'>
        {menu.map((item, index) =>index<3&& (
          <HeaderItem name={''} Icon={item.icon} />
        ))}

        <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
          <HeaderItem name={''} Icon={HiDotsVertical}/>
          {toggle? <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 px-5 py-3 p-4'>
            {menu.map((item, index) =>index>2&& (
              <HeaderItem name={item.name} Icon={item.icon} />
            ))}
          </div>:null}
        </div>
        </div>
      </div>
      <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png" className='w-[40px] rounded-full' />
    </div>
  );
  
}

export default Header