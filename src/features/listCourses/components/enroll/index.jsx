import * as SC from "./style";
import Ripples from "react-ripples";
import { useRef } from "react";

const Enroll = (props) => {
  return (
    <SC.Container
      style={{
        overlay: {
          background: "rgba(0,0,0,0.4)",
          zIndex: "100",
        },
      }}
      isOpen={props.isOpen}
    >
      <SC.Title>Đăng kí khóa học</SC.Title>
      <SC.Ul>
        <SC.Li>
          <span>Nhận thông báo khi giáo viên bắt đầu</span>
        </SC.Li>
        <SC.Li>
          <span>Thực hành mọi lúc mọi nơi</span>
        </SC.Li>
        <SC.Li>
          <span>Học kèm 1 vs 1</span>
        </SC.Li>
      </SC.Ul>
      <SC.Enroll onClick={() => props.togglePopup(false)}>Ghi danh</SC.Enroll>
      <SC.Close onClick={() => props.togglePopup(false)}>Đóng</SC.Close>
    </SC.Container>
  );
};

export default Enroll;

{
  /* <>
  <div className="Demo__some-network">
    <FacebookShareButton
      url={shareUrl}
      quote={title}
      className="Demo__some-network__share-button"
    >
      <FacebookIcon size={32} round />
    </FacebookShareButton>

    <div>
      <FacebookShareCount
        url={shareUrl}
        className="Demo__some-network__share-count"
      >
        {(count) => count}
      </FacebookShareCount>
    </div>
  </div>

  <div className="Demo__some-network">
    <FacebookMessengerShareButton
      url={shareUrl}
      appId="521270401588372"
      className="Demo__some-network__share-button"
    >
      <FacebookMessengerIcon size={32} round />
    </FacebookMessengerShareButton>
  </div>

</> */
}
