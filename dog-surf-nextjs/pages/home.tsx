import cv2 from '../public/images/cv2.png'
import styles from '../styles/Home.module.css'
import Image from 'next/image';


const homee = () => {
    return (

<div className="homepage_all">

<section > 
<div className={styles.Banner}>
    {/* <img alt="" src={dog_logo}   /> */}
    <img alt="test" src="/images/dog_bannerr.png"  />
        {/* <div className="Banner-text"> */}
        <div className={styles.Bannertext}>
        <h1>Welcome to DogSurf</h1>
        <p>Find a perfect place for your dog </p>

        </div>
</div>
</section>
{/* // 3 Pictures */}
<section > 
{/* <div className="layers">  */}
<div className={styles.layers}> 

<h1>Its time for your dog sharpen some valuable skills!</h1>
<div className={styles.rows}> 
    <div className={styles.colinrow}> 
        <h3>Socialization</h3>
        <p>Sometimes dogs might have fear of getting to know new people, as they might have some bad experience in the past that they remeber. Meeting of new caring might change thinking of these dogs </p>
    </div>
    <div className={styles.colinrow}> 
        <h3>New Friendships</h3>
        <p>Many dogs can often be depressed if they are lonely for bigger amount of time. Meeting new friendly dogs from other owners enriches their life a lot. </p>
    </div>
    <div className={styles.colinrow}> 
        <h3>New Adventures</h3>
        <p>Most of the dogs love to explore new areas, specially parks, forests and simillar, with DogSurf they might be taken for a walk to a different locations with their temporary keeper.</p>
    </div>
</div>
</div>
</section>


<section> 
<div className={styles.picturelayers}>

<div className={styles.picinrow }>
        <div className="onepic">
                <img alt="test" src="/images/dog111.png"  />
            <h1 className={styles.dogs_h1}>Bumble</h1>
            </div>
            
        <div className="onepic">
                {/* <Image alt="test" src={dog2}   /> */}
                <img alt="test" src="/images/dog222.png"  />
            <h1 className={styles.dogs_h1} >John</h1>
        </div>   
        
        
        <div className="onepic">
                {/* <Image alt="test" src={dog3}   /> */}
                <img alt="test" src="/images/dog33.png"  />
            <h1 className={styles.dogs_h1}>Silver Jack</h1>
        </div>   
</div>   
    



</div>
</section>


<section>
<div className={styles.home_bottom_box}>
   
<div className={styles.left_bottom_box}>

    <img alt="test" src="/images/dog_transp.png"  />
</div>
<div className={styles.right_bottom_box}>
<div className={styles.right_bottom_box_child}>
    <h1>Our Services</h1>
    <h2>1. Finding a great place for your dog </h2>
    <h2>2. Potential new friends for your dog </h2>
    <h2>3. Cool new places to disover </h2>
</div>
</div>


</div>
</section>






</div>
    )
}
export default homee