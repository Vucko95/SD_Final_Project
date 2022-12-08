import React from "react"
import './homepage.css';
import dog_logo from '../images/dognew.jpg'
import dog1 from '../images/dog1.jpg'
import dog2 from '../images/dog2.jpg'
import dog3 from '../images/dog3.jpg'
import cv2 from '../images/group_dogs.jpg'
export default function homepage () {
    return (
        // BANNER
<div className="homepage_all">

        <section class="banner"> 
        <div className="Banner">
            {/* <img alt="" src={dog_logo}   /> */}
            <img alt="" src={cv2}   />
                <div className="Banner-text">
              

                </div>
        </div>
        </section>
{/* // 3 Pictures */}
<section class="text_layers"> 
<div className="layers"> 

    <h1>Pet First Approach to Accomodation</h1>
    <div className="rows"> 
            <div className="col-in-row"> 
                <h3>Socialization</h3>
                <p>Sometimes dogs might have fear of getting to know new people, as they might have some bad experience in the past that they remeber. Meeting of new caring might change thinking of these dogs </p>
            </div>
            <div className="col-in-row"> 
                <h3>New Friendships</h3>
                <p>Many dogs can often be depressed if they are lonely for bigger amount of time. Meeting new friendly dogs from other owners enriches their life a lot. </p>
            </div>
            <div className="col-in-row"> 
                <h3>New Adventures</h3>
                <p>Most of the dogs love to explore new areas, specially parks, forests and simillar, with DogSurf they might be taken for a walk to a different locations with their temporary keeper.</p>
            </div>
    </div>
</div>
</section>


<section class="picture_layers"> 
<div className="picture-layers">
    
    <div className="rows"> 
        <div className="col-in-row pic-in-row">
        <img alt="" src={dog1}   />
        <h1 className="dogs_h1">Bumble</h1>
        </div>
        <div className="col-in-row pic-in-row">
        <img alt="" src={dog2}   />
        <h1 className="dogs_h1" >John</h1>
        </div>
        <div className="col-in-row pic-in-row">
        <img alt="" src={dog3}   />
        <h1 className="dogs_h1">Silver Jack</h1>
        </div>


    </div>



</div>
</section>


</div>
    )
    
}
