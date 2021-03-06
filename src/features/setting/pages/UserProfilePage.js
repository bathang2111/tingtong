import React from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  Container,
  Card,
  Grid,
  Typography,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
} from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useDispatch, useSelector } from "react-redux";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  ChangeLanguageEnglish,
  ChangeLanguageVietNam,
} from "../../../lang/translateSlide";
import Avatar from "react-avatar-edit";
import { useState } from "react";
import { ChangeAvatar, getUserInfo, SaveAvatar } from "../userProfileSlide";
import axios from "axios";
import { FILE_URL } from "../../../constants/baseURl";
import UpdateUser from "../components/updateUser";
import { useEffect } from "react";
import AuthApi from "../../../api/authApi";

UserProfilePage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  container: {
    // background: "#e8e9ec",
  },
  title: {
    textAlign: "center",
  },
  action: {
    marginLeft: "auto",
  },
}));

function UserProfilePage(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state);
  const { changeAvatar } = useSelector((state) => state.userprofile);
  const [imageAfterChange, setImage] = useState(null);
  const { image } = useSelector((state) => state.userprofile);
  const { userInfo } = useSelector((state) => state.userprofile);
  const [ToggleUpdate, setUpdate] = useState(false);
  const [urlOfFile, setUrl] = useState();
  const [expand, setExpand] = useState(false);

  useEffect(async () => {
    if (userInfo.id) return;
    await dispatch(getUserInfo());
  }, []);

  useEffect(async () => {
    if (!urlOfFile) return;
    const data = { avatar: urlOfFile };
    try {
      const res = await AuthApi.UpdateUserInfo(data);
      console.log(res);
    } catch (error) {}
  }, [urlOfFile]);

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const onHandleChange = (e) => {
    if (e.target.value == "vn") {
      dispatch(ChangeLanguageVietNam());
    } else {
      dispatch(ChangeLanguageEnglish());
    }
    localStorage.setItem("lang", e.target.value);
  };

  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 71680) {
      alert("File is too big!");
      elem.target.value = "";
    }
  };

  const onCrop = (preview) => {
    setImage(preview);
  };

  function urltoFile(url, filename, mimeType) {
    return fetch(url)
      .then((res) => {
        return res.blob();
      })
      .then((blob) => {
        return new File([blob], filename, { type: mimeType });
      });
  }

  const saveImage = async () => {
    setExpand(false);
    if (!imageAfterChange) return;
    if (window.confirm(`${language.alertChange}`)) {
      dispatch(SaveAvatar(imageAfterChange));
      dispatch(ChangeAvatar());

      const file = await urltoFile(imageAfterChange, "avatar.jpg", "image/jpg");
      var data = new FormData();
      data.append("files", file);

      // now upload
      const config = {
        headers: {
          authorization: localStorage.getItem("token"),
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
      axios.post(FILE_URL, data, config).then((response) => {
        // console.log(response);
        setUrl(response[0].url);
      });
    } else {
      return;
    }
  };

  const cancleChange = () => {
    setExpand(false);
    dispatch(ChangeAvatar());
  };

  const closePopup = (value) => {
    setUpdate(value);
  };

  const formatSecond = (s) => {
    if (s == 0) return "H???t th???i gian";
    if (!s) return;
    return new Date(s * 1000).toISOString().substr(11, 8);
    // return s
  };

  return (
    <>
      <UpdateUser
        closePopup={(value) => {
          closePopup(value);
        }}
        toggle={ToggleUpdate}
      />
      <Container className={classes.container}>
        <Grid container direction="row" justify="center">
          <Grid item xs={12} md={8}>
            <Card>
              <CardHeader
                title={
                  <Typography
                    className={classes.title}
                    variant="h2"
                    component="h2"
                  >
                    Trang c?? nh??n
                  </Typography>
                }
              />
              <CardContent>
                <CardActions>
                  <Typography
                    className={classes.title}
                    variant="h4"
                    component="h2"
                  >
                    Th???i gian c??n l???i:
                  </Typography>
                  <Button variant="contained" size="small" color="primary">
                    {formatSecond(userInfo.totalTime)}
                  </Button>
                </CardActions>
                <CardActions>
                  <Typography
                    className={classes.title}
                    variant="h4"
                    component="h2"
                  >
                    H??? v?? t??n:
                  </Typography>
                  <Typography
                    className={classes.title}
                    variant="p"
                    component="p"
                  >
                    {userInfo.fullName}
                  </Typography>
                  <Button
                    onClick={() => {
                      setUpdate(true);
                    }}
                    style={{ marginLeft: "auto" }}
                    size="small"
                    color="primary"
                  >
                    C???p nh???t
                  </Button>
                </CardActions>
                <CardActions>
                  <Typography
                    className={classes.title}
                    variant="h4"
                    component="h2"
                  >
                    Email:
                  </Typography>
                  <Typography
                    className={classes.title}
                    variant="p"
                    component="p"
                  >
                    {userInfo.email}
                  </Typography>
                </CardActions>
                <CardActions>
                  <Typography
                    className={classes.title}
                    variant="h4"
                    component="h2"
                  >
                    ?????a ch???:
                  </Typography>
                  <Typography
                    className={classes.title}
                    variant="p"
                    component="p"
                  >
                    {userInfo.address}
                  </Typography>
                  <Button
                    onClick={() => {
                      setUpdate(true);
                    }}
                    style={{ marginLeft: "auto" }}
                    size="small"
                    color="primary"
                  >
                    C???p nh???t
                  </Button>
                </CardActions>
                <CardActions>
                  <Typography
                    className={classes.title}
                    variant="h4"
                    component="h2"
                  >
                    S??? ??i???n tho???i:
                  </Typography>
                  <Typography
                    className={classes.title}
                    variant="p"
                    component="p"
                  >
                    {userInfo.phoneNumber}
                  </Typography>
                  <Button
                    onClick={() => {
                      setUpdate(true);
                    }}
                    style={{ marginLeft: "auto" }}
                    size="small"
                    color="primary"
                  >
                    C???p nh???t
                  </Button>
                </CardActions>
                <CardActions>
                  <Accordion expanded={expand}>
                    <AccordionSummary
                      onClick={() => setExpand(!expand)}
                      expandIcon={
                        <ExpandMoreIcon onClick={() => setExpand(!expand)} />
                      }
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Button size="small" color="primary">
                        C???p nh???t ???nh ?????i di???n
                      </Button>
                    </AccordionSummary>
                    <AccordionDetails
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <Avatar
                        width={300}
                        height={300}
                        onCrop={onCrop}
                        mimeTypes="svg"
                        label={
                          <Typography
                            className={classes.title}
                            variant="p"
                            component="h5"
                          >
                            Ch???n h??nh ???nh
                          </Typography>
                        }
                        exportAsSquare={true}
                        // cropRadius={10}
                        // cropColor="black"
                        // src={userInfo.avatar ? userInfo.avatar : image}
                        // onClose={this.onClose}
                        // onBeforeFileLoad={onBeforeFileLoad}
                      />
                      <CardActions style={{ width: 300 }}>
                        <Button
                          style={{ marginLeft: "auto" }}
                          onClick={cancleChange}
                          size="small"
                          color="primary"
                        >
                          H???y
                        </Button>
                        <Button
                          onClick={saveImage}
                          size="small"
                          color="primary"
                        >
                          C???p nh???t
                        </Button>
                      </CardActions>
                    </AccordionDetails>
                  </Accordion>
                </CardActions>
              </CardContent>
              <Divider />
              <Divider />
              <Divider />
              <CardContent>
                <CardActions>
                  <Typography
                    // className={classes.title}
                    variant="h4"
                    component="h2"
                  >
                    C??i ?????t kh??c
                  </Typography>
                </CardActions>

                <CardActions>
                  <Typography variant="h4" component="h2">
                    Ng??n ng???:
                  </Typography>
                  <FormControl className={classes.formControl}>
                    {/* <InputLabel htmlFor="age-native-simple">Age</InputLabel> */}
                    <Select
                      native
                      defaultValue={localStorage.getItem("lang")}
                      //   value="VietNam"
                      onChange={onHandleChange}
                      inputProps={{
                        name: "age",
                        id: "age-native-simple",
                      }}
                    >
                      <option value="en">English</option>
                      <option value="vn">VietNam</option>
                    </Select>
                  </FormControl>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default UserProfilePage;
