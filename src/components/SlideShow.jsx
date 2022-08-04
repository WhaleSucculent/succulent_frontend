import { Box, styled, Typography } from '@mui/material'
import { height } from '@mui/system';
import React from 'react'

function SlideShow() {

    const BannerContainer =styled(Box)(()=>({
        display:'flex',
        justifyContent:'center',
        width: '100%',
        height: '100%',
        padding:'0px 0px',
        backgroundColor:'	#F0FFFF',

    }));
    const BannerContent =styled(Box)(()=>({
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center',
        maxWidth: 600,
        height: '100%',
        padding:'30px',
        fontFamily: "monospace"
       

    }));
    const BannerTitle =styled(Typography)(()=>({
       lineHeight:3.5,
       fontSize:'50px',
       marginBottom:'10px',
       fontFamily: "monospace"
       

    }));
    const BannerDescription =styled(Typography)(()=>({
       lineHeight:1.25,
       letterSpacing:1.25,
       fontSize:'20px',
       marginBottom:'5em',
       fontFamily: "monospace"
       
    }));
    const BannerImg =styled('img')((src)=>({
        src :`url(${src})`,
       width: '880px',
       
 
       
    }));

    
  return (
    <div>
        <BannerContainer>
            <BannerImg src='https://images.unsplash.com/photo-1599523444669-d5849add9ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'/>
            <BannerContent>
                <Typography variant='h6'>News header</Typography>
                <BannerTitle variant='h1'>New Collections</BannerTitle>
                <BannerDescription variant='subtitle'>Come with a wide range of shapes and colors, succulents and cacti stand out in common houseplants, particularly as low-maintenance types. As long as they get well-drained succulent soil, at least 6 hours of sunlight...</BannerDescription>
            </BannerContent>
            </BannerContainer></div>
  )
}

export default SlideShow