import React from 'react'
import { Container, Button } from '../../globalStyles'
// import Profile from '../../Images/profile.png';
import { Link } from 'react-router-dom'
// import { ReactComponent as Logo } from '../../Images/svg-1.svg'

import { 
    TextWrapper, 
    InfoRow, 
    InfoColumn, 
    InfoSec,
    Heading,
    TopLine,
    SubTitle,
    ImgWrapper,
    Img
} from './InfoSection.elements'

const InfoSection = ({ img, lightBg, imgStart, lightTopLine, topLine, lightText, headLine, lightTextDesc, description, buttonLabel, primary, start, alt}) => {
    return (
        <div>
            <InfoSec lightBg={lightBg}> 
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>
                                <Link to="/sign-up" style={{textDecoration: "none"}}>
                                    <Button big fontBig primary={primary}>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt}/>
                                {/* <Logo/> */}
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </div>
    )
}

export default InfoSection
