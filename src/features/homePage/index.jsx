import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/header/header";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import Backgroundd from "../../components/homePageBackground";
import * as SC from "./style";
import ImageChat from "../../components/homePageBackground/image/chat.png";
import ImageWorld from "../../components/homePageBackground/image/world.png";
import Footer from "../../components/footer";

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <SC.Container>
      <Header />
      <Backgroundd />
      <SC.GroupTitle>
        <SC.Title>Say hello to your private English tutor</SC.Title>
        <SC.SubTitle>
          Become fluent faster through one-on-one video chat lessons tailored to
          your goals.
        </SC.SubTitle>
      </SC.GroupTitle>
      <SC.Pane>
        <SC.Cover>
          <SC.Image src={ImageChat} />
          <SC.SubPane>
            <SC.Title>English immersion from anywhere</SC.Title>
            <SC.SubTitle>
              Build English proficiency and confidence through real
              conversations with friendly tutors from the US, UK, Australia, and
              more. All you need is your device!
            </SC.SubTitle>
          </SC.SubPane>
        </SC.Cover>
      </SC.Pane>
      <SC.Pane>
        <SC.Cover>
          <SC.SubPane>
            <SC.Title>One subscription, unlimited access</SC.Title>
            <SC.SubTitle>
              Every one of our plans unlocks access to our full tutor community
              and course catalog. Study with your favorite tutors every week or
              meet someone new for every lesson!
            </SC.SubTitle>
          </SC.SubPane>
          <SC.Image src={ImageWorld} />
        </SC.Cover>
      </SC.Pane>
      <Footer/>
    </SC.Container>
  );
}

export default HomePage;
