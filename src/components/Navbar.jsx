// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import G20 from '../assets/g20.png'
import image1 from "../assets/msme-logo-clipart-9.jpg"
import emblem from '../assets/emblem-dark.png'
import SwachBharat from '../assets/swach-bharat.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);





    return (
        <div className='wrapper'>
            <div className='nav-head'>
                <div className='wrap-1'>
                    <div className="head">
                        <a className="head-1"
                            href="https://india.gov.in">भारत सरकार</a>
                        <a className="head-2"
                            href="https://india.gov.in">GOVERNMENT OF INDIA</a>
                    </div>

                    <div className="head">
                        <a className="head-1"
                            href="https://india.gov.in">एमएसएमई
                            मंत्रालय</a>
                        <a className="head-2"
                            href="https://india.gov.in">Ministry
                            of MSME</a>
                    </div>
                </div>

                <div className="wrap-2">
                    <a className="head-1 icon"
                        href="https://www.facebook.com/msmedinagpur.gov.in/"><FaFacebook />
                    </a>
                    <a className="head-1 icon"
                        href="https://twitter.com/msmedi_nagpur"><FaTwitter />
                    </a>
                    <a className="head-1 icon"
                        href="https://www.youtube.com/channel/UCI7eKvD3NJt38Bu7hdhIruQ"><FaYoutube />
                    </a>
                </div>
            </div>

            <div className="menu" onClick={() => {
                setIsOpen(!isOpen)
            }}>
                {isOpen ? <IoCloseSharp className="hum-icon" /> : <GiHamburgerMenu className="hum-icon" />}
            </div>


            <div className='logosection'>
            <div className='logo-0'>
                    <img src={image1} alt="" />
                </div>
                <div className='logo-1'>
                    <img src={G20} alt="" />
                </div>


                <div className="logo-2">
                    <img src={emblem} alt="" />
                    <h2>एम.एस.एम.ई विकास एवं सुविधा कार्यालय</h2>
                    <h2>MSME DEVELOPMENT & FACILITATION OFFICE, NAGPUR</h2>
                </div>

                <div className="logo-3">
                    <img src={SwachBharat} alt="" />
                </div>
            </div>
            <hr />

            <div className={`navitems-wrap ${isOpen ? 'open' : ''}`}>
                <ul className='nav'>
                    <NavLink to='/' className='text-decor'>  
                    <li className="navitem">
                        Home
                    </li>
                    </NavLink>

                    <NavLink to='/about' className='text-decor'><li className="navitem">
                        About Us
                    </li>
                    </NavLink>

                    <NavLink to='/services' className='text-decor'><li className="navitem">
                        Services
                    </li>
                    </NavLink>

                    <NavLink to='/schemes' className='text-decor'><li className="navitem">
                        Schemes
                    </li>
                    </NavLink>

                    <NavLink to='/notices' className='text-decor'><li className="navitem">
                        Notices
                    </li>
                    </NavLink>

                    <NavLink to='/act&rules' className='text-decor'><li className="navitem">
                        Acts & Rules
                    </li>
                    </NavLink>

                    <NavLink to='/tenders' className='text-decor'><li className="navitem">
                        Tenders
                    </li>
                    </NavLink>

                    <NavLink to='/documents' className='text-decor'><li className="navitem">
                        RTI
                    </li>
                    </NavLink>

                    <NavLink to='/form' className='text-decor'><li className="navitem">
                        Grievances
                    </li>
                    </NavLink>

                    <NavLink to='/contact' className='text-decor'><li className="navitem">
                        Contact Us
                    </li>
                    </NavLink>
                </ul>
            </div>


        </div>
    )
}

export default Navbar
