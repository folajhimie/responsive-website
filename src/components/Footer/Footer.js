import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Button } from '../../globalStyles';
import 
{   FooterContainer, 
    FooterSubscription, 
    FooterSubHeading, 
    FooterSubText,
    Form, 
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    SocialIcon,
    SocialIconLink,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights,
    SocialIcons
} from './Footer.elements';

const Footer = () => {
    return (
        <div>
            <FooterContainer>
                <FooterSubscription>
                    <FooterSubHeading>
                        Join our exclusive membership to receive the latest news amd trends.
                    </FooterSubHeading>
                    <FooterSubText>
                        You can unsubscribe at any time.
                    </FooterSubText>
                    <Form>
                        <FormInput name="email" type="email" placeholder="Your Email"/>
                        <Button fontBig> SubScribe </Button>
                    </Form>
                </FooterSubscription>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                            <FooterLink to="/sign-up"> How it Works</FooterLink>
                            <FooterLink to="/"> Testimonials </FooterLink>
                            <FooterLink to="/"> Careers </FooterLink>
                            <FooterLink to="/"> Investors </FooterLink>
                            <FooterLink to="/"> Terms of Service </FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle> Contact Us </FooterLinkTitle>
                            <FooterLink to="/sign-up"> How it Works</FooterLink>
                            <FooterLink to="/"> Testimonials </FooterLink>
                            <FooterLink to="/"> Careers </FooterLink>
                            <FooterLink to="/"> Investors </FooterLink>
                            <FooterLink to="/"> Terms of Service </FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle> Videos </FooterLinkTitle>
                            <FooterLink to="/sign-up"> How it Works</FooterLink>
                            <FooterLink to="/"> Testimonials </FooterLink>
                            <FooterLink to="/"> Careers </FooterLink>
                            <FooterLink to="/"> Investors </FooterLink>
                            <FooterLink to="/"> Terms of Service </FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle> Social Media </FooterLinkTitle>
                            <FooterLink to="/sign-up"> How it Works</FooterLink>
                            <FooterLink to="/"> Testimonials </FooterLink>
                            <FooterLink to="/"> Careers </FooterLink>
                            <FooterLink to="/"> Investors </FooterLink>
                            <FooterLink to="/"> Terms of Service </FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            <SocialIcon>
                                PERK
                            </SocialIcon>
                        </SocialLogo>
                        <WebsiteRights> PERK © 2020</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook style={{ color: "dodgerblue"}}/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram style={{ color: "indianred"}}/>
                            </SocialIconLink>
                            <SocialIconLink href={'https://www.youtube.com/watch?v=LUv20QxXjfw&t=1322s'} target="_blank" aria-label="Youtube" rel="noopener" noreferrer>
                                <FaYoutube style={{ color: "red"}}/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter style={{ color: "cornflowerblue"}}/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin style={{ color: "royalblue"}}/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterContainer>
        </div>
    )
}

export default Footer;
