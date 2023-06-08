"use client"
import { useEffect } from "react"
export default function scrolling(){
    useEffect(() =>{
        window.addEventListener("scroll", () =>{
          const scrollDwon = document.querySelector(".scrollDown")
          const scrollUp = document.querySelector(".scrollUp")
          const y = window.scrollY
          const Heigth = document.body.scrollHeight - window.innerHeight + 40
    
          scrollDwon?.classList.add("-ml-28")
          setTimeout(() =>{
          scrollDwon?.classList.remove("-ml-28")
          },400)
    console.log(y)
    console.log(Heigth)
          if (Heigth == y){
            scrollDwon?.classList.add("opacity-0")
            scrollUp?.classList.remove("opacity-0")
          } else {
            scrollDwon?.classList.remove("opacity-0")
            scrollUp?.classList.add("opacity-0")
          }
        })
      })
    return(
        <>
        <div 
        className="scrollDown1"
        data-aos="fade-right"
        data-aos-delay="1000"
        data-aos-anchor-placement="bottom-bottom"
        >
        <div 
        className="scrollDown"> Scroll  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-down-circle" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/></svg> </div>
        </div>
        <div className="scrollUp opacity-0"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-up-circle" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/> </svg> Scroll</div>
        </>
    )
}