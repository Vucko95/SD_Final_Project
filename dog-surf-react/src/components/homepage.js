import React from "react"
import './homepage.css';
import dog_logo from '../images/banner.jpg'
import dog1 from '../images/dog1.jpg'
import dog2 from '../images/dog2.jpg'
import dog3 from '../images/dog3.jpg'
export default function homepage () {
    return (
        // BANNER
        <div className="homepage_all">
            <section class="banner"> 
        <div className="Banner">
        <img src={dog_logo}   />
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
        <h2>Our happy dogs</h2>
    <div className="rows"> 
        <div className="col-in-row pic-in-row">
        <img src={dog1}   />
        <h1>Dusan</h1>
        </div>
        <div className="col-in-row pic-in-row">
        <img src={dog2}   />
        <h1>Mujo</h1>
        </div>
        <div className="col-in-row pic-in-row">
        <img src={dog3}   />
        <h1>Nedeljko</h1>
        </div>


    </div>

</div>
</section>


</div>
    )
    
}
