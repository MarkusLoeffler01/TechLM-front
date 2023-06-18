import Carousel from "react-material-ui-carousel";
import { Paper, Typography } from "@mui/material";
import Test6 from "../assets/test7.jpg";


function Carousel_()
{
    return (
        <Carousel
        className="w-[50vw] carousel"
        //Make the height of the carousel 0.5625 times the width of the carousel
        // height="calc(50vw * 0.5625)"
        height="calc(50vw * 0.28125)"
        autoPlay={true}
        duration={750}
        animation="slide"
        indicators={false}
        // cycleNavigation={true}
        
        fullHeightHover={true}
        swipe={false}
        >
            { [Test6, Test6, Test6].map((img, index) => <Item img={img} key={index} maintext="Beratung" />)}

        </Carousel>
    )
}


function Item({img, maintext}: {img: string, maintext: string})
{
    return (
        <Paper className="h-full w-full" sx={{
            // backgroundColor: "red",
            backgroundImage: `url(${img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
        }}>
            <Typography variant="overline" color={"coral"} position={"absolute"} left={"50%"} sx={{
                transform: "translate(-50%, -50%)",
            }} top={"50%"} fontWeight={800} fontSize={36} >
                {maintext}
            </Typography>
        </Paper>
    )
}

export default Carousel_;