
import React from 'react';
import styled, { keyframes } from 'styled-components'
import './PortfolioItem.scss';

const MoveUp = keyframes`
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
`

const MoveDown = keyframes`
    0% { transform: translateY(0); }
    100% { transform: translateY(20px); }
`

const TextContainer = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    opacity: 0 !important;
    transition: .5s;
    display: flex;
    align-items: flex-end;
    visibility: visible;
    padding: 0 20px;
    background-image: linear-gradient(to top, rgba(4,229,229,1), rgba(255, 255, 255, 0));
`

const Text = styled.div`
    transform: translateY(50px);
    transition: .5s;
    width: 100%;
    text-align: center;
`


const ItemContainer = styled.div`
    position: relative;
    min-height: 700px;
    max-height: 700px;
    @media (max-width:1500px) {
        min-height: 600px;
        max-height: 600px;
    }
    @media (max-width:1024px) {
        min-height: 400px;
        max-height: 400px;
    }
    overflow: hidden;
    max-width: 95%;
    margin: 40px 0 40px;
    border-radius: 10px;
    &.move-up {
        animation: ${MoveUp} 5s infinite alternate;
    }
    &.move-down {
        animation: ${MoveDown} 5s infinite alternate;
    }
    &:hover {
        ${Text} {
            transform: translateY(-100px);
        }
        img {
            transform: scale(1.1);
        }
        ${TextContainer} {
            opacity: 1 !important;
        }
        > a.repo-link {
            transform: translateY(-100px);
        }
    }
    &.blue-shadow {
        box-shadow: 0 28px 60px rgb(4,229,229,.2);
        transition: .5s;
        &:hover {
            box-shadow: 0 28px 60px rgb(4,229,229,.5);
        }
    }
`

const Heading = styled.h4`
    color: #fff;
    font-weight: 600;
    font-size: 25px;
    font-family: "Montserrat", sans-serif;
    @media screen and (max-width: 767px){
        font-size: 18px;
    }
`

const SubHeading = styled.h5`
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    max-width: 250px;
    margin: 0 auto;
    font-family: "Montserrat", sans-serif;
    @media screen and (max-width: 767px){
        font-size: 16px;
    }
`

const Image = styled.img`
    width: 100%;
    object-fit: cover;
    height: "600px";
    transition: .5s;
    height: 700px;
    @media (max-width:1500px) {
        height: 600px;
    }
    @media (max-width:1024px) {
        height: 400px;
    }
`

const RepoLink = styled.a`
    // transition: .5s;
    // text-transform: uppercase;
    // display: block;
    // font-weight: 700;
    // &:hover, 
    // &:focus, 
    // &:active {
    //     color: #000;
    // }
`;

export default function PortfolioItem({image, alt, link,  title, category, repoLink}){

    return(
        <ItemContainer className="blue-shadow">
            <a 
                href={link} 
                aria-label={title} 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <Image src={image} alt={alt} />
                <TextContainer>
                    <Text>
                        <Heading>{title}</Heading>
                        <SubHeading>{category}</SubHeading>
                    </Text>
                </TextContainer>
            </a>
            {
                repoLink !== undefined ? 
                    <RepoLink 
                        className="repo-link button_1"
                        rel="noopener noreferrer"
                        href={repoLink} 
                        aria-label={title} 
                        target="_blank"
                    >
                        SEE CODE
                    </RepoLink>
                : null
            }
        </ItemContainer>
    )
}