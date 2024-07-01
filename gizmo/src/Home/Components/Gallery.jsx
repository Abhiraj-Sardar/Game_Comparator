import React from 'react'
import "../Css/Gallery.css";
import char1 from "../../Assets/img/char1.png"
const Gallery = () => {
  return (
    <>
    <div className="container-fluid banner1">
        <div className="row">
            <div className="col-sm-12 col-md-6 banner-quote">
                <span>Play It In Your Way...</span>
            </div>
            <div className="col-sm-12 col-md-6 banner-img">
                <img src={char1}/>
            </div>
        </div>
    </div>

    <div className="container-fluid banner2">
        <div className="row">
            <div className="col-12 gallery">
                <div className="img-1">
                    <div className="img-text"><h5 className='text-center'>GTA V</h5></div>
                </div>
                <div className="img-2">
                <div className="img-text"><h5 className='text-center'>SPIDER MAN : MOBILE</h5></div>
                </div>
                <div className="img-3">
                <div className="img-text"><h5 className='text-center'>WWE 2K22</h5></div>
                </div>
                <div className="img-4"><div className="img-text"><h5 className='text-center'>TEKKEN 3</h5></div></div>
                <div className="img-5"><div className="img-text"><h5 className='text-center'>FREE FIRE</h5></div></div>
                <div className="img-6">
                <div className="img-text"><h5 className='text-center'>NBA LIVE</h5></div>
                </div>
                <div className="img-7">
                <div className="img-text"><h5 className='text-center'>GRANNY CHAPTER 2</h5></div>
                </div>
                <div className="img-8">
                <div className="img-text"><h5 className='text-center'>GTA SAN ANDREAS</h5></div>
                </div>
                <div className="img-9">
                <div className="img-text"><h5 className='text-center'>NEED FOR SPEED</h5></div>
                </div>
                <div className="img-10">
                <div className="img-text"><h5 className='text-center'>DLS 2020</h5></div>
                </div>
                <div className="img-11">
                <div className="img-text"><h5 className='text-center'>AMONG US</h5></div>
                </div>
                <div className="img-12">
                <div className="img-text"><h5 className='text-center'>POPPY PLAYTIME</h5></div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Gallery
