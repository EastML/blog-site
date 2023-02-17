import styled from "@emotion/styled"
import { Box, Typography } from "@mui/material"

const StyledSpan = styled(Box)({
    display: 'inline',
    fontWeight: 600
})

export const CONSTANTS = {
    WELCOME: <Typography>Hi, my name is Micah, but I am more commonly called by my internet tag, <StyledSpan color='error.main'>East</StyledSpan>. I'm a software developer 👨‍💻 at a small company in big Tokyo, Japan. 🍙 I actually went to school to be a chef 🍳, but in the end, decided to become a software developer because <StyledSpan color='warning.main'>I love building.</StyledSpan> I often tell people that a chef and a programmer <StyledSpan color='success.main'>aren't really all that different you see.</StyledSpan> They both take ingredients [foods and frameworks] and make something. And at the end of the day, thats all I really want to do; 🌟 create something. This website is a great example actually 😄 I hope that as you explore this site you learn a little bit about me, if there is anything you're curious about or you feel the need to reach out, <StyledSpan color='info.main'>feel free</StyledSpan> to contact me on any of the socials I have above! ☝☝☝ Have fun!</Typography>,
    COMMANDMENTS: [
        <Typography><StyledSpan color='success.main'><i>"To know that even one life has breathed easier because you lived, this is to have succeeded - </i></StyledSpan>  This quote by the Ralph Waldo Emerson, is my core belief. It is the one metric by which I judge nearly every part of my life. My relationships, both private and professionals, successes and failures, <StyledSpan color='success.main'>everything.</StyledSpan> I just believe that each and everyone one of us should do what we can to give back to ourselves [A little self care never hurt anyone haha], our communities, and the world. Through this, I believe the legacy of the world becomes a better one.</Typography>,
        <Typography><StyledSpan color='error.main'>Be a man of your word - </StyledSpan> <StyledSpan>If you say you are going to do something, absolutely, and without exception, do it.</StyledSpan> <StyledSpan color='error.main'>This also has a heavy responsibility</StyledSpan> attached to it because it forces me to accept and understand my limits, and to carefully consider what I will or will not do.</Typography>,
        <Typography><StyledSpan color='info.main'>Make everyday +1 - </StyledSpan> I played a lot of video games growing up as a kid, and as a result have a lot of fond memories in adding stat points to my characters, and this is no different. Everyday should be a chance to improve <StyledSpan color='info.main'>somewhere.</StyledSpan> Whether its physical, mental, emotional, anything, I always aim to come out of the other side of a day a little bit better. </Typography>,
        <Typography><StyledSpan color='warning.main'>Create a little friction - </StyledSpan> This is just my reminder to myself, that its important to make time to try hard things, even if its for the sake of just doing them. Get out of my comfort zone and do something difficult. <StyledSpan color='warning.main'>Hard times create strong people.</StyledSpan> </Typography>,
    ]
}