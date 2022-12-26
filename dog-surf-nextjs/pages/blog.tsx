import styles from '../styles/Blog.module.css'
import cv2 from '../public/images/cv2.png'
import Image from 'next/image';
const Blog = () => {
    return (
        <div className={styles.blog_main}>
        <h1 > Blog Part of Dogs </h1>
    <div className={styles.blog}>
            <div className={styles.blog_1}>
                    <div className={styles.part1}>
                    <img alt="test" src="/images/pet_blog.png"  />
                    </div>
                    <div className={styles.part2}>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi debitis autem suscipit odit maiores placeat minima consequatur aliquam, quae cum veniam architecto eos animi quaerat labore ut, totam ratione! Eaque?</p>
                    </div>
            </div>
     </div>
        <h1>Jackie the Dog</h1>
     <div className={styles.blog_paragraph}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, eius officiis maxime corrupti neque voluptatem corporis iure, beatae obcaecati sint consequatur nulla eos alias harum. Asperiores amet fugiat cumque consequatur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, assumenda corrupti. Rerum cupiditate perferendis, ullam voluptatibus quaerat ipsa. Dicta inventore perspiciatis officia beatae, architecto magnam repellat consectetur illum sapiente doloremque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, assumenda corrupti. Rerum cupiditate perferendis, ullam voluptatibus quaerat ipsa. Dicta inventore perspiciatis officia beatae, architecto magnam repellat consectetur illum sapiente doloremque.
          
        </p>
     </div>
    <div className={styles.blog}>
            <div className={styles.blog_1}>
                    <div className={styles.part1}>
                    <img alt="test" src="/images/pet_blog2.png"  />
                    </div>
                    <div className={styles.part2}>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi debitis autem suscipit odit maiores placeat minima consequatur aliquam, quae cum veniam architecto eos animi quaerat labore ut, totam ratione! Eaque?</p>
                    </div>
            </div>
     </div>
        <h1>Jackie the Dog</h1>
     <div className={styles.blog_paragraph}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, eius officiis maxime corrupti neque voluptatem corporis iure, beatae obcaecati sint consequatur nulla eos alias harum. Asperiores amet fugiat cumque consequatur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, assumenda corrupti. Rerum cupiditate perferendis, ullam voluptatibus quaerat ipsa. Dicta inventore perspiciatis officia beatae, architecto magnam repellat consectetur illum sapiente doloremque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, assumenda corrupti. Rerum cupiditate perferendis, ullam voluptatibus quaerat ipsa. Dicta inventore perspiciatis officia beatae, architecto magnam repellat consectetur illum sapiente doloremque.
            
        </p>
     <img alt="test" src="/images/blog_post3.png"  />
     </div>

     {/* <div className={styles.two_pics}>
     <Image alt="test" src={cv2} className={styles.part2img}  />
     <Image alt="test" src={cv2} className={styles.part2img}  />

     </div> */}

</div>
    )
}
export default Blog