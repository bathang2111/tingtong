import * as SC from "./style";
import IconTwitter from './image/twitter_logo25.png';
import IconInstagram from './image/instagram_logo24.png';
import IconFacebook from './image/facebook_logo25.png';
import IconYoutube from './image/youtube_social_square_red.png';

const Footer=()=>{
    return(
        <SC.Container>
            <SC.Pain/>
            <SC.Main>
                <SC.GroupIcon>
                    <SC.Image src={IconTwitter}/>
                    <SC.Image src={IconInstagram}/>
                    <SC.Image src={IconFacebook}/>
                    <SC.Image src={IconYoutube}/>
                </SC.GroupIcon>
            </SC.Main>
            <SC.Pain/>
        </SC.Container>
    )
}

export default Footer