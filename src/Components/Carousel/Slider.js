import { Paper } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel'

const Slider = () => {
    const img1 = "https://img.freepik.com/free-photo/podium-abstract-blue-composition-product-presentation3d-rendering_41470-4408.jpg?w=1060"
    const img2 = "https://img.freepik.com/free-photo/scene-with-minimal-podiums_23-2149269990.jpg?w=826"
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
        }
    ]
    return (
        <div  >

            <Carousel sx={{ border: 0, height: 0 }}

            >
                {
                    items.map(item => {
                        return (
                            <Paper>
                                {/* <h2>{item.name}</h2>
                                <img src={item.img} alt="pic" width="100%" height={600} /> */}
                            </Paper>
                        )
                    })
                }
            </Carousel>




        </div>
    );
};

export default Slider;