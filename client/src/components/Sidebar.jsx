import React, { useState } from 'react';
import { LInk, Link, useNavigate } from "react-router-dom";

import { logo, sun } from "../assets";
import { navLinks } from "../constants";

const Sidebar = () => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState('dashboard');

  return (
    <div className='flex justify-between items-center flex-col sticky top-5 h-[93vh]'>
        <Link to='/'>

        </Link>

    </div>
  )
}

export default Sidebar