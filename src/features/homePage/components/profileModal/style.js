import styled from "styled-components";
import Modal from "react-modal";
import CancelIcon from "../../../../assets/images/CancelIcon.png";
import LoveIcon from "../../../../assets/images/Love.png";
import MessageIcon from "../../../../assets/images/messageIcon.png";
import MenuIcon from "../../../../assets/images/MenuIcon.png";

export const Contaner = styled(Modal)`
  position: absolute;
  width: 430px;
  height: 90%;
  overflow: auto;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  outline: none;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  border-radius: 10px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const IconGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 25px;
  align-items: center;
`;

export const CloseModalButton = styled.button`
  margin-left: 25px;
  width: 17px;
  height: 17px;
  background: url(${CancelIcon});
  background-size: cover;
  border: none;
  :focus {
    outline: none;
  }
`;

export const LoveStatus = styled(CloseModalButton)`
  margin-left: 240px;
  width: 26px;
  height: 22px;
  background: url(${LoveIcon});
`;

export const Message = styled(CloseModalButton)`
  margin-left: 20px;
  width: 27px;
  height: 21px;
  background: url(${MessageIcon});
  background-size: cover;
`;

export const Menu = styled(CloseModalButton)`
  margin-left: 20px;
  width: 25px;
  height: 5px;
  background: url(${MenuIcon});
  background-size: cover;
`;

export const GroupInfo = styled.div`
  width: 330px;
  height: 75px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
`;

export const Pane = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 10px 0 0 20px;
`;

export const Name = styled.h3`
  margin: 0;
  padding: 0;
`;

export const Engine = styled.img`
  width: 50px;
  height: 45px;
`;

export const Nation = styled.span`
  position: absolute;
  width: 100px;
  left: 60px;
  bottom: 15px;
  font-size: 13px;
  color: #88888b;
`;

export const CallVideoButton = styled.button`
  margin-top: 20px;
  width: 305px;
  height: 35px;
  background: #2f8c92;
  color: #ffffff;
  font-size: 13px;
  line-height: 35px;
  border-radius: 5px;
  text-align: center;
  border: none;
  :focus {
    outline: none;
  }
`;

export const Line = styled.div`
  width: 326px;
  height: 2px;
  background: #8c8c8c;
  margin: 30px 0;
`;

export const VideoIntro = styled.video`
  width: 340px;
  max-height:200px;
  background: rgba(0,0,0,0.7);
`;

export const FeedBack = styled.div`
  width: 126px;
  height: 23px;
`;

export const IntroGroup = styled.div`
  width: 300px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  margin: 0;
  padding: 0;
  font-size: 18px;
`;

export const SubTitle = styled.span`
  margin-top: 10px;
  font-size: 15px;
  color: #4a4747;
`;
