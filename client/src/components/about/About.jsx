
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;   
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                {/* <Typography variant="h3">Code for Interview</Typography> */}
                <Text variant="h5">I'm a Software Engineer based in India. 
                    I've practical knowledge of web development using which I have built several websites.<br />
                    If you are interested, you can view some of my favorite projects here
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/nisarg-vaghela" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>.
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/nisarg.vaghela88/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="mailto:nisargvaghela0213@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;

// import React from 'react';
// import { Container, Typography, Paper, styled } from '@mui/material';

// const Cont = styled(Paper)`
//     marginTop: theme.spacing(4),
//     padding: theme.spacing(3),
// `

// const AboutUsPage = () => {
// //   const classes = useStyles();

//   return (
//     <Container maxWidth="md">
//       <Cont elevation={3}>
//         <Typography variant="h4" gutterBottom>
//           About Us
//         </Typography>
//         <Typography paragraph>
//           Welcome to our company! We are dedicated to providing high-quality products and services to our customers.
//         </Typography>
//         <Typography paragraph>
//           Our mission is to [insert your mission statement here].
//         </Typography>
//         <Typography paragraph>
//           Contact us at: support@example.com
//         </Typography>
//       </Cont>
//     </Container>
//   );
// };

// export default AboutUsPage;
