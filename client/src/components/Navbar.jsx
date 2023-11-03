import React, {useContext, useState} from 'react';
import { Link, useNavigate } from "react-router-dom";

import { useStateContext } from "../context";
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
        
      </div>
    </div>
  )
}

export default Navbar

export default Navbar