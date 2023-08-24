import React from "react";
import styled from "styled-components";
import htmlParse from "html-react-parser";

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selector: Object.keys(this.props.data)[0],
    };
  }

  render() {
    const TimelineContainer = styled.div`
      display: flex;
      min-height: 250px;
      margin-top: 60px;
      position: relative;
    `;

    const TimelineSelectors = styled.div`
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      bottom: 50px;
      left: 20px;
      &::before {
        content: "";
        position: absolute;
        height: 100%;
        width: 20%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: -1;
        margin: auto;
        left: 40%;
        border-radius: 20px;
      }
      @media screen and (max-width: 767px) {
        left: 3px;
      }
    `;

    const TimelineSelector = styled.button`
      width: 15px;
      height: 15px;
      border-radius: 7.5px;
      border: none;
      margin: 10px 0px;
      transition: 0.5s;
      background-color: #000;
      &:focus {
        outline: none;
      }
      &.active,
      &:hover {
        background-color: #04e5e5;
      }
    `;

    const Details = styled.div`
      display: block;
    `;

    const Heading = styled.h4`
      font-size: 25px;
      font-weight: 600;
      color: #000;
      margin-bottom: 5px;
      font-family: "Montserrat", sans-serif;
    `;

    const Company = styled.h5`
      font-size: 18px;
      font-weight: 600;
      color: #000;
      margin-bottom: 5px;
      font-family: "Montserrat", sans-serif;
    `;
    const Text = styled.div`
      font-size: 14px;
      font-weight: 400;
      color: #000;
      font-family: "Montserrat", sans-serif;
    `;

    const Years = styled.h5`
      color: #000;
      font-weight: 800;
      letter-spacing: 2px;
      font-size: 74px;
      position: absolute;
      top: -60px;
      opacity: 0.2;
      font-family: "Montserrat", sans-serif;
      @media (max-width: 1439px) {
        font-size: 40px;
        top: -38px;
      }
      @media (max-width: 767px) {
        font-size: 34px;
        top: -35px;
        opacity: 0.2;
      }
    `;

    const selector = this.state.selector;
    let { data } = this.props;

    return (
      <TimelineContainer>
        <Details>
          <Years>{data[selector].date}</Years>
          <Heading>{data[selector].title}</Heading>
          <Company>{data[selector].institution}</Company>
          <Text>{htmlParse(data[selector].description)}</Text>
        </Details>
        <TimelineSelectors>
          {Object.keys(this.props.data).map((value, index) => (
            <TimelineSelector key={index} onClick={() => this.setState({ selector: value })} className={this.state.selector === value ? "active" : ""} />
          ))}
        </TimelineSelectors>
      </TimelineContainer>
    );
  }
}

export default Timeline;
