import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaArtstation } from 'react-icons/fa';

export const FooterContainer = styled.div`
    background-color: #101522;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FooterSubscription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 24px;
    padding: 24px;
    color: #FFF;
`;

export const FooterSubHeading = styled.div`
    font-family: 'Trebuchent MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, Helvetica, sans-serif, sans-serif;
    margin-bottom: 24px;
    font-size: 24px;
`;

export const FooterSubText = styled.div`
    margin-bottom: 24px;
    font-size: 20px;
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 820px){
        flex-direction: column;
        width: 80%;
    }
`;

export const FormInput = styled.input`
    padding: 10px 20px;
    border-radius: 2px;
    margin-right: 10px;
    outline: none;
    border: none;
    font-size: 16px;

    &::placeholder{
        color: #242424;
    }

    @media screen and (max-width: 820px){
        width: 100%;
        margin: 0 0 16px 0;
    }
`;

export const FooterLinksContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px){
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`;

export const FooterLinksItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #FFF;

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h2`
    margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
    color: #FFF;
    text-decoration: none;
    margin-bottom: .5rem;

    &:hover{
        color: #0467FB;
        transition: .3s ease-out;
    }
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 60%;

    @media screen and (max-width: 820px){
        width: 80%;
    }
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`;

export const SocialLogo = styled(Link)`
    color: #FFF;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`;

export const SocialIcon = styled(FaArtstation)`
    margin-right: 10px;
`;

export const WebsiteRights = styled.small`
    color: #FFF;
    margin-bottom: 16px;

    @media screen and (max-width: 820px){
        padding-top: 1.2rem;
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink = styled.a`
    color: #FFF;
    font-size: 24px;

    @media screen and (max-width: 820px){
        padding-top: 1rem;
    }
`;


