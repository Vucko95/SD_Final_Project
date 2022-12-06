import React from "react"
import './blogcontent.scss';
import cv2 from '../images/cv2.png'
export default function Blogcontent() {


return (
    <div className="blog_main">
            <h1> Blog Part of Dogs </h1>
        <div className="blog">
                <div className="blog_1">
                        <div className="part1">
                        <img alt="" src={cv2} className="part1img"   />
                        </div>
                        <div className="part2">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi debitis autem suscipit odit maiores placeat minima consequatur aliquam, quae cum veniam architecto eos animi quaerat labore ut, totam ratione! Eaque?</p>
                        </div>
                </div>
         </div>
         <div className="blog_paragraph">
            <h1>Jackie the Dog</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, eius officiis maxime corrupti neque voluptatem corporis iure, beatae obcaecati sint consequatur nulla eos alias harum. Asperiores amet fugiat cumque consequatur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, assumenda corrupti. Rerum cupiditate perferendis, ullam voluptatibus quaerat ipsa. Dicta inventore perspiciatis officia beatae, architecto magnam repellat consectetur illum sapiente doloremque.
            </p>
         </div>

    </div>
    )
}