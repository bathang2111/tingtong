import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as SC from "./style";
import BookImage from "../banner/image/book.png";
import Book2Image from "../banner/image/book2.png";
import Computer from "../banner/image/compiter.png";
import GraduateCap from "../banner/image/graduateCap.png";
import Logo from "../../assets/images/logo.svg";

Background.propTypes = {};

function Background(props) {
  return (
    <SC.Container>
      <SC.Back1 position={props.position}>
        <SC.Group>
          <SC.Title>TingTong</SC.Title>
          <SC.Description>
            Say hello to your private English tutor Become fluent faster through
            one-on-one video chat lessons tailored to your goals.
          </SC.Description>
          <SC.Image1 src={BookImage} />
          <SC.Image2 src={Book2Image} />
        </SC.Group>
      </SC.Back1>
      <SC.Back2 position={props.position}>
        <SC.Group>
          <SC.Group2 position={props.position}>
            <SC.Descrip2 text={props.textAlign}>
              Build English proficiency and confidence through real
              conversations with friendly tutors from the US, UK, Australia, and
              more. All you need is your device!
            </SC.Descrip2>
            <SC.Image3 src={Computer} />
          </SC.Group2>
          <SC.Group2 position={props.position}>
            <SC.Descrip2 text={props.textAlign}>
              Every one of our plans unlocks access to our full tutor community
              and course catalog. Study with your favorite tutors every week or
              meet someone new for every lesson!
            </SC.Descrip2>
            <SC.Image3 src={GraduateCap} />
          </SC.Group2>
        </SC.Group>
      </SC.Back2>
      <SC.Back3 position={props.position}>
      <SC.Logo2 src={Logo}/>
        <SC.Group>
          <SC.Group3>
            <SC.SubTitle3>
              English immersion from anywhere, One subscription, unlimited
              access
            </SC.SubTitle3>
            <SC.SubTitle3>
              Study with your favorite tutors every week or meet someone new for
              every lesson!
            </SC.SubTitle3>
          </SC.Group3>
        </SC.Group>
      </SC.Back3>
    </SC.Container>
  );
}

export default Background;
