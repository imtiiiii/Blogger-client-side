import { Paper } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel'

const Slider = () => {
    const img1 = "https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_960_720.jpg"
    const img2 = "https://cdn.pixabay.com/photo/2016/10/27/22/52/apples-1776744_960_720.jpg"
    const img3 = "https://cdn.pixabay.com/photo/2017/05/25/15/08/jogging-2343558_960_720.jpg"
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            img: img1
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            img: img2
        },
        {
            img: img3
        }
    ]
    return (
        <div  >

            <Carousel sx={{ height: 1000, my: 10 }}

            >
                {
                    items.map(item => {
                        return (
                            <Paper sx={{ height: 800 }} >
                                {/* <h2>{item.name}</h2> */}
                                <img src={item.img} alt="pic" width="100%" height="100%" style={{ objectFit: "cover" }} />
                            </Paper>
                        )
                    })
                }
            </Carousel>




        </div>
    );
};

export default Slider;