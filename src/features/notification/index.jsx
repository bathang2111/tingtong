import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as SC from "./style";
import { Card, Typography, CardHeader } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import { ToggleLobby } from "./notificationSlide";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
  },
  title: {
    width: "100%",
    fontSize: 24,
    margin: 0,
    padding: "10px 10px 0",
  },
}));
const Notification = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isOpen, listNoti } = useSelector((state) => state.notification);
  const { userInfo } = useSelector((state) => state.userprofile);

  const getDate = () => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const dateObj = new Date();
    const month = monthNames[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, "0");
    const year = dateObj.getFullYear();
    const output = month + "\n" + day + "," + year;
    return output;
  };

  const formatSecond = (s) => {
    if (s == 0) return "Hết thời gian";
    if (!s) return;
    return new Date(s * 1000).toISOString().substr(11, 8);
    // return s
  };

  const showNoti = () => {
    const result = listNoti.map((item) => {
      return (
        <ListItem>
          <ListItemAvatar>
            <Avatar src={item.avatar}></Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={"Bạn đã gọi cho " + item.name}
            secondary={item.time}
          />
        </ListItem>
      );
    });
    return result;
  };

  return (
    <SC.Container
      isOpen={isOpen}
      onRequestClose={() => dispatch(ToggleLobby())}
      style={{
        overlay: {
          background: "none",
          zIndex: 10,
        },
      }}
    >
      <Typography variant="h3" className={classes.title}>
        Thông báo
      </Typography>
      <List className={classes.root}>
        <ListItem style={{ border:"3px solid #358E93 ",borderRadius:5 }}>
          <ListItemAvatar>
            <Avatar src={userInfo.avatar}></Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={"Thời gian còn lại: " + formatSecond(userInfo.totalTime)}
            secondary={getDate()}
          />
        </ListItem>
        {showNoti()}
      </List>
    </SC.Container>
  );
};
export default Notification;
