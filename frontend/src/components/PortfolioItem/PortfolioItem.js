import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./PortfolioItem.scss";
import { useEffect } from "react";

const MoveUp = keyframes`
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
`;

const MoveDown = keyframes`
    0% { transform: translateY(0); }
    100% { transform: translateY(20px); }
`;

const TextContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  opacity: 0 !important;
  transition: 0.5s;
  display: flex;
  align-items: flex-end;
  visibility: visible;
  padding: 0 20px;
  background-image: linear-gradient(to top, rgba(4, 229, 229, 1), rgba(255, 255, 255, 0));
`;

const Text = styled.div`
  transform: translateY(50px);
  transition: 0.5s;
  width: 100%;
  text-align: center;
`;

const ItemContainer = styled.div`
  position: relative;
  min-height: 700px;
  max-height: 700px;
  @media (max-width: 1500px) {
    min-height: 600px;
    max-height: 600px;
  }
  @media (max-width: 1024px) {
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
    box-shadow: 0 28px 60px rgb(4, 229, 229, 0.2);
    transition: 0.5s;
    &:hover {
      box-shadow: 0 28px 60px rgb(4, 229, 229, 0.5);
    }
  }
`;

const Heading = styled.h4`
  color: #fff;
  font-weight: 600;
  font-size: 25px;
  font-family: "Montserrat", sans-serif;
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`;

const SubHeading = styled.h5`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  max-width: 250px;
  margin: 0 auto;
  font-family: "Montserrat", sans-serif;
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: "600px";
  transition: 0.5s;
  height: 700px;
  @media (max-width: 1500px) {
    height: 600px;
  }
  @media (max-width: 1024px) {
    height: 400px;
  }
`;

const RepoLink = styled.a`
  transition: 0.5s;
  text-transform: uppercase;
  display: block;
  font-weight: 700;
  &:hover,
  &:focus,
  &:active {
    color: #000;
  }
`;

export default function PortfolioItem({ image, alt, link, title, skills, repoLink, story, websiteImages }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    event.preventDefault();
    setShow(true);
  };
  const [projectImages, setProjectImages] = useState("");

  useEffect(() => {
    setProjectImages(websiteImages);
  }, [websiteImages]);
  return (
    <>
      <ItemContainer className="blue-shadow">
        <Button
          aria-label={title}
          rel="noopener noreferrer"
          onClick={handleShow}
          className="modal-button"
        >
          <Image
            src={image}
            alt={alt}
          />
          <TextContainer>
            <Text>
              <Heading>{title}</Heading>
              <SubHeading>{skills}</SubHeading>
            </Text>
          </TextContainer>
        </Button>
        {repoLink !== undefined ? (
          <RepoLink
            className="repo-link button_1"
            rel="noopener noreferrer"
            href={repoLink}
            aria-label={title}
            target="_blank"
          >
            SEE CODE
          </RepoLink>
        ) : null}
      </ItemContainer>
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h3>
              Client: <span>{title}</span>
            </h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="categories">
            {
              <h4>
                Developer Skills Covered: <span>{skills}</span>
              </h4>
            }
          </div>
          <div className="website-images">
            {projectImages
              ? projectImages.map((element, index) => {
                  return (
                    <img
                      src={element}
                      alt=""
                      key={index}
                    />
                  );
                })
              : ""}
          </div>
          <div className="project-story">
            <p>{story}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleClose}
            className="button_1"
          >
            Close
          </Button>
          <Button
            variant="secondary"
            href={link}
            className="button_1"
            target="_blank"
            aria-label="Visit Website"
          >
            Visit Website
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
