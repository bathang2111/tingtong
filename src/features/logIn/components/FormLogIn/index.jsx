import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getAuthLogin, isLoginOn } from "../../../../app/authSlide/loginSlide";
import { unwrapResult } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { Grid, InputAdornment, IconButton, Button, TextField, Typography } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';
import { get, pick } from 'lodash';
import FacebookLogin from 'react-facebook-login';
import { useEffect } from "react";
import { signInWithGoogle, auth } from '../../../../app/firebaseConfig';
import fbIcon from '../../../../assets/images/facebookIcon.svg';
import ggIcon from '../../../../assets/images/googleIcon.svg';
import { useHistory } from "react-router-dom";
FormLogIn.propTypes = {

};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#f3f8ff',
    height: '100vh'
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    backgroundColor: '#ffffff',
    padding: theme.spacing(2),
  },

  submit: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    height: 38,
    width: '100%', // Fix IE 11 issue.
    backgroundColor: '#c12026',
    '&:hover': {
      backgroundColor: '#99181d',
    },
  },

  submit_fb: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    marginTop: theme.spacing(2),
    height: 38,
    width: '100%', // Fix IE 11 issue.
    border: '1px solid',
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 1.75,
    borderRadius: 3,
    boxShadow: theme.boxShadow,
    backgroundColor: '#ffffff',
  },

  submit_gg: {
    width: '100%',
    height: 38,
    fontSize: 14,
    fontWeight: 500,
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    marginTop: theme.spacing(2),
    backgroundColor: '#ffffff',
    textTransform: 'inherit',
    '&:hover': {
      backgroundColor: '#ffffff',
    },
    border: '1px solid',
  },

  txt_not_acc: {
    fontSize: 16,
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: 'rgba(0, 0, 0, 0.85)'
  },

  txt_register: {
    fontSize: 16,
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    marginLeft: theme.spacing(1),
    color: '#c12026',
  },

  not_acc: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  },

  txt_forgot: {
    fontSize: 12,
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    marginLeft: theme.spacing(1),
    color: '#c12026',
  },

  title: {
    fontSize: 18,
    display: 'flex',
    fontWeight: 500,
    justifyContent: 'center'
  }

}));

function FormLogIn(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  const responseFacebook = response => {
    const data = {
      email: '',
      phone: '',
      password: '',
      social_req: {
        login_type: 'FACEBOOK',
        access_token: response.accessToken,
      },
    };

    console.log(data);
  };

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      if (user !== null) {
        const data = {
          email: '',
          phone: '',
          password: '',
          social_req: {
            login_type: 'GOOGLE',
            access_token: user.refreshToken,
          },
        };

        console.log(data);
      }
    });

    return () => {
      if (unsubscribeFromAuth) {
        unsubscribeFromAuth();
        auth.signOut()
      }
    }
  }, []);

  const onSubmit = data => {
    const user_info = pick(data, [
      'username',
      'password',
    ]);

    const body = {
      username: user_info.username,
      password: user_info.password
    }

    fetchLogin(body);

  };

  const fetchLogin = useCallback(async (data) => {
    await dispatch(getAuthLogin(data))
      .then((res) => {
        const result = unwrapResult(res);
        if (result.user.id && result.user.role == 0) {
          localStorage.setItem("idUser", result.user.id);
          localStorage.setItem("token", result.accessToken);
          // connectSocket();
          dispatch(isLoginOn());
          history.push('/');
        } else {
          
        }
      })
      .catch((e) => {
        
      });
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form} noValidate>

        <Typography className={classes.title}>Đăng nhập</Typography>

        <TextField
          {...register("username", {
            required: 'Vui lòng nhập tên đăng nhập !',
          })}
          error={!!errors.username}
          helperText={get(errors, 'username.message', '')}
          size="small"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Tên đăng nhập"
          name="username"
        />

        <TextField
          {...register("password", {
            required: 'Vui lòng nhập mật khẩu !',
          })}
          error={!!errors.password}
          helperText={get(errors, 'password.message', '')}
          size="small"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="password"
          label="Mật khẩu"
          name="password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end">
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }}
        />

        <Button
          type='submit'
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}>
          Đăng nhập
        </Button>

        <a href="/forgot" className={classes.txt_forgot}>
          Quên mật khẩu ?
        </a>

        <div role="button" style={{ width: '100%' }}>
          <FacebookLogin
            appId="343460986666818"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
            cookie={false}
            cssClass={classes.submit_fb}
            icon={<img src={fbIcon} style={{
              width: '20px',
              height: '20px', marginLeft: '10px', marginRight: '10px',
              objectFit: 'contain'
            }}></img>}
            textButton="Đăng nhập với Facebook"
          />
        </div>

        <Button
          onClick={signInWithGoogle}
          fullWidth
          className={classes.submit_gg}
          startIcon={<img src={ggIcon} style={{
            width: '20px',
            height: '20px',
            objectFit: 'contain'
          }}></img>}>
          Đăng nhập với Google
        </Button>

        <Grid container direction='row' className={classes.not_acc}>
          <Typography className={classes.txt_not_acc}>
            Bạn chưa có tài khoản?
          </Typography>
          <a href="/signup" className={classes.txt_register}>
            Đăng ký
          </a>
        </Grid>
      </form>
    </div>
  );
}

export default FormLogIn;
