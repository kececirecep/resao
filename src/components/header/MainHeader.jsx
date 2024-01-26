import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';


const Nav = styled.nav`
  position: absolute;
  display: flex; 
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.subHeader ? "white" : "transparent"};
  color: #1e1f25;
  padding: ${props => props.subHeader ? "0.5rem" : "3rem"};
  padding-right: 7rem;
  padding-left: 7rem;
  width: 100%;

  @media (max-width: 1000px) { 
    padding-left: 2rem;
  }
`;


const Logo = styled.img`
  font-size: 1.5rem;
  margin-top: ${props => props.subHeader ? "0px" : "-20px"}; 

`;

const MobileNavToggle = styled.button`
  position: ${props => props.isOpen ? "fixed" : "absolute"};
  top:${props => props.subHeader ? "15px" : "40px"};
  right: 25px;
  background-color: transparent;
  border: none;
  color: ${props => props.demo === "white" && props.isOpen === false ? "#ffffff" : "#1e1f25"};
  font-size: 2.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 500;

  &:hover {
    color: #ef4444;
  }

  @media (min-width: 1000px) {
    display: none;
  }
`;

const DesktopNav = styled.ul`
  display: flex;
  padding-top: ${props => props.subHeader ? "20px" : "0px"};
  flex-direction: row;

  a{
    color: ${props => props.demo === "white" ? "#ffffff" : "#1e1f25"};
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

const NavItem = styled.li`
  list-style: none;
  margin: 0 1rem;
  font-size: 20px;

  a {
    color:"#1e1f25";
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;
    position: relative;

    &:hover {
      color: #ef4444;
    }
    &:hover > div > ul {
        display: flex; 
        flex-direction: column;
    } 
  }
`;

const NavItemSubMenu = styled.ul`
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.11);
    z-index: 1;
    width: 240px;
    border-radius: 8px;
    padding: 8px; 
   
    
`;

const NavItemSubMenuItem = styled.li`
  margin: 0;
    font-size: 14px;
    padding-bottom: 0px;
    

    a {
    padding: 6px;
    color: rgb(0, 0, 0);
    display: block;
    padding-left: 15px;

    &:hover {
    background: #fdd6d6;
    color: #eb0147;
    border-radius: 4px;
    }
} 
`;
const NavItemSubMenuOverlay = styled.div` 
    padding-top: 20px;
    background-color: transparent; 
`;


const MobileNav = styled.ul`
  display: none; 
  flex-direction: column; 
  padding: 120px 30px 30px 30px;  
  overflow-y: scroll; 

  @media (max-width: 1000px) {
    display: flex;
    position: fixed;
    z-index: 211;
    top:0; 
    right:0;
    bottom:0;
    width: 60%;
    background-color: #ffffff; 
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  @media (max-width: 500px) { 
    width: 80%; 
    transition: .8s;
  }
`;
const NavItemMobile = styled.li`
list-style: none;
margin: 0.5rem 1rem;

> a {
color: #1c1d23;
text-decoration: none;
transition: all 0.3s ease;
font-size: 18px; 
display: flex; 
justify-content: space-between;
align-items: center;

&:hover {
color: #ef4444;
}
}
`;

const NavItemMobileSubMenu = styled.ul`
list-style: none; 

a {
color: #fff;
text-decoration: underline;
transition: all 0.3s ease;
font-size: 18px;

&:hover {
color: #ef4444;
}
}
`;

const NavItemMobileSubMenuItem = styled.li`
list-style: none;
margin: 0.5rem; 

a {
background-color: #fff;
border-radius: 5px; 
color: #333;
padding: 4px 20px;
text-decoration: none;
transition: all 0.3s ease;
font-size: 18px;
width: 100%; 
display: flex;
align-items: center;

&:hover {
color: #FA2D4D;
background-color: #FFEDF2;
}
}
`;

const ScrollbarContainer = styled.div`
  *::-webkit-scrollbar {
    height: 10px;
    width: 0px;
  }
 
`;


const MainHeader = ({ subHeader, demo }) => {

    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const [submenuStates, setSubmenuStates] = useState({
        home: false,
        pages: false,
        blocks: false,
        contact: false,

        // Add more submenu keys as needed
    });

    const toggleSubMenu = (submenu) => {
        setSubmenuStates((prevState) => ({
            ...prevState,
            [submenu]: !prevState[submenu],
        }));
    };


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1000) {
                setIsMobileNavOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <ScrollbarContainer>
            <MobileNavToggle demo={demo} subHeader={subHeader} onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} isOpen={isMobileNavOpen} className='z-[300]'>
                {isMobileNavOpen ? <IoClose /> : <RxHamburgerMenu />}
            </MobileNavToggle>
            <Nav subHeader={subHeader} className='z-[200]'>
                <Link to="/"><Logo src={demo === 'white' ? '/images/logo/logo_white_red.png' : '/images/logo/logo.png'} width={subHeader ? '150px' : '200px'} subHeader={subHeader}></Logo></Link>

                <DesktopNav demo={demo} subHeader={subHeader}>
                    <NavItem >
                        <Link to="/">Home
                            <NavItemSubMenuOverlay>
                                <NavItemSubMenu>
                                    <NavItemSubMenuItem>
                                        <Link to="/">Main Demo</Link>
                                    </NavItemSubMenuItem>
                                    <NavItemSubMenuItem>
                                        <Link to="/creative">Creative</Link>
                                    </NavItemSubMenuItem>
                                    <NavItemSubMenuItem>
                                        <Link to="/design">Design</Link>
                                    </NavItemSubMenuItem>
                                    <NavItemSubMenuItem>
                                        <Link to="/minimal">Minimal</Link>
                                    </NavItemSubMenuItem>
                                </NavItemSubMenu>
                            </NavItemSubMenuOverlay>
                        </Link>
                    </NavItem>
                    <NavItem><a href="/about">About</a></NavItem>
                    <NavItem>
                        <Link to="#">Pages
                            <NavItemSubMenuOverlay>
                                <NavItemSubMenu>
                                    <NavItemSubMenuItem>
                                        <Link to="/blog">Blog</Link>
                                    </NavItemSubMenuItem>
                                    <NavItemSubMenuItem>
                                        <Link to="/blog-details">Blog Details</Link>
                                    </NavItemSubMenuItem>
                                    <NavItemSubMenuItem>
                                        <Link to="/service">Service</Link>
                                    </NavItemSubMenuItem>
                                    <NavItemSubMenuItem>
                                        <Link to="/service-details">Service Details</Link>
                                    </NavItemSubMenuItem>
                                    <NavItemSubMenuItem>
                                        <Link to="/portfolio">Portfolio</Link>
                                    </NavItemSubMenuItem>
                                    <NavItemSubMenuItem>
                                        <Link to="/portfolio-details">Portfolio Details</Link>
                                    </NavItemSubMenuItem>
                                    <NavItemSubMenuItem>
                                        <Link to="/error-page">404</Link>
                                    </NavItemSubMenuItem>
                                </NavItemSubMenu>
                            </NavItemSubMenuOverlay>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="#">Blocks
                            <NavItemSubMenuOverlay>
                                <NavItemSubMenu>
                                    <NavItemSubMenuItem>
                                        <Link to="/about-components">About</Link>
                                    </NavItemSubMenuItem>
                                    <NavItemSubMenuItem>
                                        <Link to="/team">Team</Link>
                                    </NavItemSubMenuItem>
                                    <NavItemSubMenuItem>
                                        <Link to="/counter">Counter</Link>
                                    </NavItemSubMenuItem>
                                    <NavItemSubMenuItem>
                                        <Link to="/brands">Brands</Link>
                                    </NavItemSubMenuItem>
                                    <NavItemSubMenuItem>
                                        <Link to="/pagination">Pagination</Link>
                                    </NavItemSubMenuItem>
                                    <NavItemSubMenuItem>
                                        <Link to="/pricing-table">Pricing Table</Link>
                                    </NavItemSubMenuItem>
                                    <NavItemSubMenuItem>
                                        <Link to="/contact-forms">Contact Forms</Link>
                                    </NavItemSubMenuItem>
                                </NavItemSubMenu>
                            </NavItemSubMenuOverlay>
                        </Link>
                    </NavItem>
                    <NavItem><Link to="/contact">Contact</Link></NavItem>
                </DesktopNav>
            </Nav>
            <MobileNav style={{ display: isMobileNavOpen ? 'flex' : 'none' }}>
                <NavItemMobile>
                    <Link onClick={() => toggleSubMenu("home")}>
                        <span>Home </span><MdOutlineKeyboardArrowDown />
                    </Link>
                    <NavItemMobileSubMenu
                        style={{ display: submenuStates.home ? "block" : "none" }}
                    >
                        <NavItemMobileSubMenuItem>
                            <Link to="/">Main Demo</Link>
                        </NavItemMobileSubMenuItem>
                        <NavItemMobileSubMenuItem>
                            <Link to="/creative">Creative</Link>
                        </NavItemMobileSubMenuItem>
                        <NavItemMobileSubMenuItem>
                            <Link to="/design">Design</Link>
                        </NavItemMobileSubMenuItem>
                        <NavItemMobileSubMenuItem>
                            <Link to="/minimal">Minimal</Link>
                        </NavItemMobileSubMenuItem>
                    </NavItemMobileSubMenu>
                </NavItemMobile>

                <NavItemMobile>
                    <Link to="/about">About</Link>
                </NavItemMobile>

                <NavItemMobile>
                    <Link onClick={() => toggleSubMenu("pages")}>
                        <span>Pages </span><MdOutlineKeyboardArrowDown />
                    </Link>
                    <NavItemMobileSubMenu
                        style={{ display: submenuStates.pages ? "block" : "none" }}
                    >
                        <NavItemMobileSubMenuItem>
                            <Link to="/blog">Blog</Link>
                        </NavItemMobileSubMenuItem>
                        <NavItemMobileSubMenuItem>
                            <Link to="/blog-details">Blog Details</Link>
                        </NavItemMobileSubMenuItem>
                        <NavItemMobileSubMenuItem>
                            <Link to="/service">Service</Link>
                        </NavItemMobileSubMenuItem>
                        <NavItemMobileSubMenuItem>
                            <Link to="/service-details">Service Details</Link>
                        </NavItemMobileSubMenuItem>
                        <NavItemMobileSubMenuItem>
                            <Link to="/portfolio">Portfolio</Link>
                        </NavItemMobileSubMenuItem>
                        <NavItemMobileSubMenuItem>
                            <Link to="/portfolio-details">Portfolio Details</Link>
                        </NavItemMobileSubMenuItem>
                        <NavItemMobileSubMenuItem>
                            <Link to="/error-page">404</Link>
                        </NavItemMobileSubMenuItem>
                    </NavItemMobileSubMenu>
                </NavItemMobile>

                <NavItemMobile>
                    <Link to="" onClick={() => toggleSubMenu("blocks")}>
                        <span>Blocks </span><MdOutlineKeyboardArrowDown />
                    </Link>
                    <NavItemMobileSubMenu
                        style={{ display: submenuStates.blocks ? "block" : "none" }}
                    >
                        <NavItemMobileSubMenuItem>
                            <Link to="/about-components">About</Link>
                        </NavItemMobileSubMenuItem>
                        <NavItemMobileSubMenuItem>
                            <Link to="/team">Team</Link>
                        </NavItemMobileSubMenuItem>
                        <NavItemMobileSubMenuItem>
                            <Link to="/counter">Counter</Link>
                        </NavItemMobileSubMenuItem>
                        <NavItemMobileSubMenuItem>
                            <Link to="/brands">Brands</Link>
                        </NavItemMobileSubMenuItem>
                        <NavItemMobileSubMenuItem>
                            <Link to="/pagination">Pagination</Link>
                        </NavItemMobileSubMenuItem>
                        <NavItemMobileSubMenuItem>
                            <Link to="/pricing-table">Pricing Table</Link>
                        </NavItemMobileSubMenuItem>
                        <NavItemMobileSubMenuItem>
                            <Link to="/contact-forms">Contact Form</Link>
                        </NavItemMobileSubMenuItem>
                    </NavItemMobileSubMenu>
                </NavItemMobile>

                <NavItemMobile>
                    <Link to="/contact">Contact</Link>
                </NavItemMobile>
            </MobileNav>
        </ScrollbarContainer>
    )
}

export default MainHeader