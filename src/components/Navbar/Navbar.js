import React, { useEffect } from 'react'
import { FaBars, FaTimes  } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    MobileIcon, 
    NavMenu,
    NavLinks,
    NavItem,
    NavItemBtn,
    NavBtnLink
} from './Navbar.elements';
// import { Route, Switch, Link } from 'react-router-dom';


const Navbar = () => {
    const [click, setClick] = React.useState(false)
    const [button, setButton] = React.useState(true)

    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    useEffect(()=> {
        closeMobileMenu()
    }, [])

    window.addEventListener('resize', closeMobileMenu)


    return (
        <div>
            <IconContext.Provider value={{ color: 'orange'}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <NavIcon/>
                        PERK
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        { click ? <FaTimes/> : <FaBars/>}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to="/"> Home </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/services"> Services </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/products"> Products </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/contact"> Contacts </NavLinks>
                        </NavItem>
                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to="/sign-up">
                                    <Button primary> SIGN UP </Button>
                                </NavBtnLink>
                            ):
                                <NavBtnLink to="/sign-up">
                                    <Button fontBig primary> SIGN UP </Button>
                                </NavBtnLink>
                            }
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </div>
    )
}

export default Navbar;
 

