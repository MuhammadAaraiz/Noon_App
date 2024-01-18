import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import First_Card from "../Images/First_Main_Card.avif"
import Second_Card from "../Images/Second_Main_Card.avif"
import Third_Card from "../Images/Third_Main_Card.avif"
import Fourth_Card from "../Images/Fourth_Main_Card.avif"
import Fifth_Card from "../Images/Fifth_Main_Card.jpg"
import Sixth_Card from "../Images/Sixth_Main_Card.jpg"
import Seventh_Card from "../Images/Seventh_Main_Card.jpg"
import Eight_Card from "../Images/Eight_Main_Card.jpg"
import Third_Main_Img from "../Images/Third_Main_Div_img.avif"
import Fourth_Main_Img from "../Images/Fourth_Main_Div_img.avif"
// C:\Users\C.z\OneDrive\Desktop\Noon App\noon_App\src\Images\Third_Main_Div_img.avif

export default function ActionAreaCard() {
  return (
    <>
      <div className='container-fluid Main_Cards_Container_Div'>
        <div className='row '>
          <div className='col-4 '>
            <div className='Image_Design_Div  mt-3 m-1'>
              <h4 className=' p-2'>More Reasons To Shop</h4>
              <img className=' Images_Div p-2' src={First_Card} alt="" />
              <img className=' Images_Div p-2' src={Second_Card} alt="" />
              <img className=' Images_Div p-2' src={Third_Card} alt="" />
              <img className=' Images_Div p-2' src={Fourth_Card} alt="" />
            </div>
          </div>
          <div className='col-4 '>
            <div className='Image_Design_Div  mt-3 m-1 '>
              <div className='row'>
                <h4 className='m-1'>More Reasons To Shop</h4>
                <div className='col-3 p-3 Scnd_Images_Div text-center '>
                  <div className='Image_Design'>
                    <img className='col-3 Images_Div m-1 Items_Card_Div' src={Fifth_Card} alt="" />
                    <p><small>Apple 2023 Newest Macbook Pro MTL83 <br /> <s>7179</s></small> <b>6255  AED</b></p>
                  </div>
                </div>

                <div className='col-3 p-3 Scnd_Images_Div Iems_Card_Div text-center '>
                  <div className='Image_Design'>
                    <img className='col-3 Images_Div m-1' src={Sixth_Card} alt="" />
                    <p><small>Noon East Mechanical Air <br />Fryer 3.4 Liter Capacity <br /><s> 239 </s> </small> <b> 129  AED </b></p>
                  </div>
                </div>

                <div className='col-3 p-3 Scnd_Images_Div Iems_Card_Div  text-center '>
                  <div className='Image_Design'>
                    <img className='col-3 Images_Div m-1' src={Seventh_Card} alt="" />
                  </div>
                </div>
                <div className='col-3 p-3 Scnd_Images_Div Iems_Card_Div  text-center '>
                  <div className='Image_Design'>
                    <img className='col-3 Images_Div m-1' src={Eight_Card} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-4 '>
            <div className='Image_Design_Div mt-3'>
              <h4 className=' p-2'>In Focus</h4>
              <img className=' Images_Divfsd p-2' src={Third_Main_Img} alt="" />
              <img className=' Images_Divfsd p-2' src={Fourth_Main_Img} alt="" />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}