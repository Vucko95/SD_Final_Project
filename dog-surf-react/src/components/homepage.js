import React from "react"
import './homepage.css';
import dog_logo from '../images/dognew.jpg'
import dog1 from '../images/dog1.jpg'
import dog2 from '../images/dog2.jpg'
import dog3 from '../images/dog3.jpg'
import cv2 from '../images/cv2.png'
export default function homepage () {
    return (
        // BANNER
<div className="homepage_all">

        <section class="banner"> 
        <div className="Banner">
            <img alt="" src={dog_logo}   />
            <img alt="" src={cv2}   />
                <div className="Banner-text">
                    <p>Pet First Approach to Accomodation</p>

                </div>
        </div>
        </section>
{/* // 3 Pictures */}
<section class="text_layers"> 
<div className="layers"> 

    <h1>Some good reasons for dogs to socialize</h1>
    <div className="rows"> 
            <div className="col-in-row"> 
                <h3>One Reason</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, repudiandae consectetur at praesentium dicta possimus repellendus dolor ipsum placeat doloribus aliquid, unde dignissimos volu Quasi.</p>
            </div>
            <div className="col-in-row"> 
                <h3>One Reason</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, repudiandae consectetur at praesentium dicta possimus repellendus dolor ipsum placeat doloribus aliquid, unde dignissimos volu Quasi.</p>
            </div>
            <div className="col-in-row"> 
                <h3>One Reason</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, repudiandae consectetur at praesentium dicta possimus repellendus dolor ipsum placeat doloribus aliquid, unde dignissimos volu Quasi.</p>
            </div>
    </div>
</div>
</section>


<section class="picture_layers"> 
<div className="picture-layers">
        <h1>Our happy dogs</h1>
    <div className="rows"> 
        <div className="col-in-row pic-in-row">
        <img alt="" src={dog1}   />
        <h1>Dusan</h1>
        </div>
        <div className="col-in-row pic-in-row">
        <img alt="" src={dog2}   />
        <h1>Mujo</h1>
        </div>
        <div className="col-in-row pic-in-row">
        <img alt="" src={dog3}   />
        <h1>Nedeljko Radic</h1>
        </div>


    </div>



</div>
</section>


</div>
    )
    
}
