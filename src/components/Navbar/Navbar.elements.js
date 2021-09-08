import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';
import { FaArtstation } from 'react-icons/fa'


export const Nav = styled.nav`
    background: #101522;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    position: -webkit-sticky;
    
    top: 0;
    z-index: 999;
    color: white;
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;

    ${Container}
`;

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`;

export const NavIcon = styled(FaArtstation)`
    margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px){
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({click}) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all .5s ease;
        background: #101522;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 4px solid transparent;

    &:hover{
        border-bottom: 4px solid #4b59f7;
    }
    
    @media screen and (max-width: 960px){
        width: 100%;

        &:hover{
            border: none;
        }
    }
`

export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: .5rem 2rem;
    height: 100%;

    @media screen and (max-width: 960px){
        height: 65%;
        text-align: center;
        padding: 1rem;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        left: 40%;
        width: 20%;
        /* background-color: red; */

        &:hover{
            color: orange;
            transition: all .3s ease;
            border-bottom: 4px solid orange;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            left: 40%;
            width: 20%;
        }
    }
`
export const NavItemBtn = styled.li`
    @media screen and (max-width: 960px){
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
    }
`

export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center; 
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;

`
