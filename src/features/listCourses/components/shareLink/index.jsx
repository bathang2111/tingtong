import * as SC from "./style";
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";
import Ripples from "react-ripples";
import { useRef } from "react";

const ShareLink = (props) => {
  const link = window.location.href;
  const inputRef = useRef(null);

  const copy = () => {
    inputRef.current.select();
    document.execCommand("copy");
  };

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
      <SC.Title>Chia sẻ</SC.Title>
      <SC.listShare>
        <SC.GroupBtn>
          <FacebookShareButton
            url={link}
            quote="from tingtong.xyz"
          >
            <FacebookIcon size={60} round />
          </FacebookShareButton>
          Facebook
        </SC.GroupBtn>

        <SC.GroupBtn>
          <FacebookMessengerShareButton
            url={link}
            // appId="521270401588372"
          >
            <FacebookMessengerIcon size={60} round />
          </FacebookMessengerShareButton>
          Messenger
        </SC.GroupBtn>
        <SC.GroupBtn>
          <EmailShareButton
            url={link}
            // appId="521270401588372"
          >
            <EmailIcon size={60} round />
          </EmailShareButton>
          Email
        </SC.GroupBtn>
      </SC.listShare>
      <SC.Link>
        <SC.InputLink ref={inputRef} value={link} type="text" />
        <Ripples color="rgba(255,255,255,0.8)" during="1500">
          <SC.CopyBtn onClick={copy}>Sao chép</SC.CopyBtn>
        </Ripples>
      </SC.Link>
      <SC.Submit onClick={() => props.togglePopup(false)}>Đóng</SC.Submit>
    </SC.Container>
  );
};

export default ShareLink;

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
