import styles from '../styles/Blog.module.css'
import { useEffect, useState, ReactElement } from 'react'
// import fetch from 'isomorphic-unfetch';

// import console from 'console';
const Blog = () => {
    const [updatePicture, setUpdatePicture] = useState('');
    const [updateJoke, setUpdateJoke] = useState('');
    const [updateJokeAnswer, setUpdateJokeAnswer] = useState('');
    const [show, setShow] = useState(true);


      async function getDogImage() {
        try {
          const response = await fetch('https://dog.ceo/api/breeds/image/random');
          const data = await response.json();
          setUpdatePicture(data.message)
        //   console.log(response)
          console.log(data.message)

          return data;
        } catch (error) {
          console.error(error);
        }
      }


      
      async function getJoke() {
        try {
          const response = await fetch('https://official-joke-api.appspot.com/random_joke');
          const data = await response.json();
          setUpdateJoke(data.setup)
          setUpdateJokeAnswer(data.punchline)
          console.log(data.setup)
          console.log(data.punchline)

          return data;
        } catch (error) {
          console.error(error);
        }
      }






    return (
        <div className={styles.blog_main}>



    <div className={styles.blog}>
            <div className={styles.blog_1}>
                    <div className={styles.part1}>
                    <img alt="test" src="/images/pet_blog.png"  />
                    </div>
                    <div className={styles.part2}>
                        <p>Dogs are curious creatures by nature, and they have a strong drive to explore their environment. This drive to explore is an important part of their survival instinct, as it helps them to find food, shelter, and mates. In addition to these basic needs, exploring new environments can also provide dogs with mental and physical stimulation, which is important for their overall well-being. </p>
                    </div>
            </div>
     </div>
        <h1>Dogs exploring different envirovments</h1>
     <div className={styles.blog_paragraph}>
        <p>
        There are several reasons why dogs might be particularly drawn to exploring new environments. For one, dogs have an excellent sense of smell, which they use to navigate and gather information about their surroundings. This can make exploring a new environment particularly exciting for them, as there are likely to be many new smells to discover and investigate.
        </p>
     </div>
    <div className={styles.blog}>
            <div className={styles.blog_1}>
                    <div className={styles.part1}>
                    <img alt="test" src="/images/pet_blog2.png"  />
                    </div>
                    <div className={styles.part2}>
                        <p>Another reason why dogs might enjoy exploring new environments is that it allows them to exercise their natural curiosity and problem-solving skills. Dogs are intelligent animals, and they are always looking for ways to engage their minds and bodies. Exploring a new environment gives them the opportunity to do just that, as they encounter new challenges and obstacles to overcome.</p>
                    </div>
            </div>
     </div>
        <h1>Jackie the Dog</h1>
     <div className={styles.blog_paragraph2}>
        <p>Meet Jack, a playful and energetic dog who loves nothing more than spending time in his small wooden house. Jack is a medium-sized mixed breed with a sleek coat of fur and a wagging tail that never seems to stop. He is a friendly and outgoing dog, always ready to greet new people and make new friends.
            
        </p>
     <img alt="test" src="/images/blog_post3.png"  />
     </div>

     {/* <div className={styles.two_pics}>
     <Image alt="test" src={cv2} className={styles.part2img}  />
     <Image alt="test" src={cv2} className={styles.part2img}  />

     </div> */}

<div className={styles.dogapi}>

{/* <h1>Different dogs in Ireland</h1> */}
 <button className={styles.api_btn} onClick={getDogImage}>Display Different Dog</button>
 <img id="dogImage" src={updatePicture}></img>
     </div>

<div className={styles.fun_corner_box}>
    <h1>Fun Corner</h1>
            <button className={styles.api_btn} onClick={getJoke}>Display Joke</button>
                <p>{updateJoke}</p>
                    <button onClick={() => setShow(!show)} >Display Answer</button>
                        { show && (
                            <p  >{updateJokeAnswer}</p>
                        )}
            </div>

</div>
    )
}
export default Blog