import React, {useContext, useState} from 'react';
import { Link, useNavigate } from "react-router-dom";

// import { useStateContext } from "../context";
import {CustomButton } from "./";
import {logo, menu, search, thirdweb } from "../assets";
import { navlinks } from '../constants';


const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { connect, address } = useContext();

  return (
    <div className='flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6'>
      <div className='lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]'>
       
       <input type="text" placeholder='Search for campaigns' className='flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4acd8d] text-white bg-transparent outline-none'/>
        <div className='w-[72px] h-full rounded-[20px] bg-[#4acd8d] justify-center cursor-pointer'>
          <img src={search} alt="search" className='w-[15px] h-[15px] object-contain' />
          </div> 
          </div>

          <div className='sm:flex hidden flex-row justify-end gap-4'>
            <CustomButton 
            btnType='button'
            title={address ? 'Create a campaign' : "Connect Wallet"}
            styles={address ? "bg-[#1dc071]" : 'bg-[#8c6dfd]'}
            handleClick={() => {
              if (address) navigate('Create-campaign') 
              else 'connect()'
            }}
            />

            <Link to='/profile'>
              <div className='w-[52px] h-[40px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer' >
                <img src={thirdweb} alt="user" className='w-[60%] h-[60%] object-contain'/>
              </div>
            </Link>
            </div>

            {/* Small screen navigation */}
            <div className='sm:hidden flex justify-between items-center relative'>
            <div className='w-[52px] h-[40px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer' >
                <img src={thirdweb} alt="user" className='w-[60%] h-[60%] object-contain'/>
              </div>
            </div>
          </div>

    
  );
}

export default Navbar;