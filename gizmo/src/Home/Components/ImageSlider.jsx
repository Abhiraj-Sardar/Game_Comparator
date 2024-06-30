import React, { useEffect } from 'react'
import "../Css/ImageSlider.css";

const ImageSlider = () => {

    function change(arr,prev,next){
        arr[prev].style.width="0%";
        arr[next].style.width="100%";
    }

    function slideChange(){
        var slide1=document.querySelector("#img-slide1");
        var slide2=document.querySelector("#img-slide2");
        var slide3=document.querySelector("#img-slide3");
        var arr=[slide1,slide2,slide3]; 
        var next=0;
        setInterval(()=>{
            var prev=next
            next=(next+1)%3
            change(arr,prev,next);
        },3000);      
    }
    
    useEffect(()=>{
        slideChange();
    },[])
    

  return (
    <div className='slider'>
        <div id="img-slide1">

        </div>
        <div id="img-slide2">

        </div>
        <div id="img-slide3">

        </div>
    </div>
  )
}

export default ImageSlider
