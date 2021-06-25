import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Avatar from "@material-ui/core/Avatar";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import DuoOutlinedIcon from "@material-ui/icons/DuoOutlined";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import { useDispatch, useSelector } from "react-redux";
import DefaultAvatar from "../../../assets/images/avatar4.png";
import { ImportContacts } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const drawerWidth = 240;

SettingDrawer.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0 0 35px 0 rgb(154 161 171 / 15%)",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  drawerOpenPaper: {
    display: "contents",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClosePaper: {
    display: "contents",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },

  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },

  info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(1),
  },
}));

function SettingDrawer({ open, onClose }) {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const { image } = useSelector((state) => state.userprofile);
  const { userInfo } = useSelector((state) => state.userprofile);
  const history = useHistory();

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpenPaper]: open,
          [classes.drawerClosePaper]: !open,
        }),
      }}
    >
      {!open ? (
        <Avatar
          className={classes.info}
          alt="Remy Sharp"
          src={image ? image : DefaultAvatar}
        />
      ) : (
        <div className={classes.info}>
          <Avatar
            alt="Remy Sharp"
            style={{ width: 70, height: 70 }}
            src={image ? image : DefaultAvatar}
          />
          <Typography style={{ marginTop: "8px" }} variant="h4" component="h2">
            {userInfo.fullName}
          </Typography>
          <Typography variant="body2" component="p">
            {userInfo.email}
          </Typography>
        </div>
      )}

      <Divider />
      <List>
        <ListItem button onClick={() => history.push("/setting/user-profile")}>
          <ListItemIcon>
            <AccountCircleOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={"Trang cá nhân"} />
        </ListItem>

        <ListItem button onClick={() => history.push("/setting/courses-saved")}>
          <ListItemIcon>
            <ImportContacts />
          </ListItemIcon>
          <ListItemText primary={"Khóa học"} />
        </ListItem>
        <ListItem button onClick={() => history.push("/setting/call-history")}>
          <ListItemIcon>
            {" "}
            <DuoOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={"Lịch sử cuộc gọi"} />
        </ListItem>
        <ListItem button onClick={() => history.push("/setting/trasaction-history")}>
          <ListItemIcon>
            {" "}
            <MonetizationOnOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={"Lịch sử giao dịch"} />
        </ListItem>
      </List>
      <Divider />
      <div className={classes.toolbar}>
        <IconButton onClick={onClose}>
          {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
    </Drawer>
  );
}

export default SettingDrawer;
