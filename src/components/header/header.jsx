import React, { useEffect, useState } from "react";
import * as SC from "./style";
import logo from "../../assets/images/logo.svg";
import LogoSmall from "../../assets/images/LogoSmall.png";
import MessageIcon from "../../assets/images/messageIcon.png";
import CalendarIcon from "../../assets/images/calendarIcon.png";
import { useDispatch, useSelector } from "react-redux";
import {
  resetNotificatiom,
  ToggleListChat,
} from "../../features/messenger/messageSlide";
import { ToggleCalender } from "../calender/calenderSlide";
import { ToggleSmallScreen } from "../controlSlide";
import DefaulAvatar from "../../assets/images/avatar4.png";
import Ripples from "react-ripples";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const isLogin = useSelector((state) => state.login.checkLogin);
  const { language } = useSelector((state) => state);
  const { notification } = useSelector((state) => state.message);
  const { image } = useSelector((state) => state.userprofile);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const toggleMessage = () => {
    dispatch(ToggleListChat());
    dispatch(resetNotificatiom());
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleSetting = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);

    history.push("/setting");
  };

  const handleLogout = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);

    localStorage.clear();
    // history.replace("/wellcome");
    window.location.reload();
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <SC.Container>
        <SC.Logo>
          <SC.Img src={logo} />
          <SC.ImgSmall src={LogoSmall} />
          {isLogin ? <SC.Lin to="/" /> : <SC.Lin to="/wellcome" />}
        </SC.Logo>
        {isLogin ? (
          <>
            <SC.LinkGroup>
              <Ripples>
                <SC.TutorLink to="/tutors">{language.tutors}</SC.TutorLink>
              </Ripples>
              <Ripples>
                <SC.CoursesLink to="/courses">
                  {language.courses}
                </SC.CoursesLink>
              </Ripples>
            </SC.LinkGroup>

            <SC.Group>
              {/* <SC.PainBtn>
                <Ripples>
                  <SC.BtnSubcribe to="/payment">
                    {language.subcribe}
                  </SC.BtnSubcribe>
                </Ripples>
              </SC.PainBtn> */}
              <Button
                onClick={() => history.push("/payment")}
                fullWidth
                variant="contained"
                color="primary"
              >
                {language.subcribe}
              </Button>
              <SC.Message onClick={toggleMessage}>
                <SC.Icon src={MessageIcon} />
                {notification > 0 ? <SC.Noti>{notification}</SC.Noti> : ""}
              </SC.Message>
              {/* <SC.CalenDar onClick={() => dispatch(ToggleCalender())}>
                <SC.Icon src={CalendarIcon} />
              </SC.CalenDar> */}
              <SC.btnAvatar
                ref={anchorRef}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
              >
                <SC.Avatar src={image ? image : DefaulAvatar} />
              </SC.btnAvatar>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="menu-list-grow"
                          onKeyDown={handleListKeyDown}
                        >
                          <MenuItem onClick={handleSetting}>Cài đặt</MenuItem>
                          <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
              <SC.Menu onClick={() => dispatch(ToggleSmallScreen())} />
            </SC.Group>
          </>
        ) : (
          <div>
            <Button
              style={{ marginRight: "16px" }}
              onClick={() => history.push("/login")}
            >
              Đăng nhập
            </Button>
            <Button
              onClick={() => history.push("/signup")}
              variant="contained"
              color="primary"
            >
              Đăng ký
            </Button>
          </div>
        )}
      </SC.Container>
      <SC.SubContainer />
      <SC.Line />
    </>
  );
};

export default Header;
