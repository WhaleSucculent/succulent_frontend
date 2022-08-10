import { Box, styled, Typography } from '@mui/material'
import { height } from '@mui/system';
import React from 'react'

function SlideShow() {

    const BannerContainer = styled(Box)(() => ({
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '1300px',
        padding: '10px 0px',
        backgroundColor: '	#F0FFFF',

    }));
    const BannerContent = styled(Box)(() => ({
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 500,
        height: '100%',
        padding: '10px',
        fontFamily: "monospace"


    }));
    const BannerTitle = styled(Typography)(() => ({
        lineHeight: 3.5,
        fontSize: '50px',
        marginBottom: '10px',
        fontFamily: "monospace"


    }));
    const BannerDescription = styled(Typography)(() => ({
        lineHeight: 1.25,
        letterSpacing: 1.25,
        width: '900px',
        fontSize: '20px',
        marginBottom: '5em',
        fontFamily: "monospace"

    }));
    const BannerImg = styled('img')((src) => ({
        src: `url(${src})`,
        width: '1000px',
        marginTop:'100px'



    }));


    return (
        <div>
            <BannerContainer sx={{height: "600px"}}>
                <BannerContent>
                    <BannerImg src='https://images.unsplash.com/photo-1599523444669-d5849add9ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' sx={{ width: "100%" }} />
                    {/* <Typography variant='h6'>News header</Typography> */}
                    <BannerTitle variant='h4' sx={{ xs: { position: "fixed" } }}>New Collections</BannerTitle>
                    <BannerDescription variant='subtitle'>Come with a wide range of shapes and colors, succulents and cacti stand out in common houseplants, particularly as low-maintenance types. ...</BannerDescription>
                </BannerContent>
            </BannerContainer>
        </div>
    )
}

export default SlideShow