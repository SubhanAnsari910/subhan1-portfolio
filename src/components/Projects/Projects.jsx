import React from 'react'
import Card from '../Card/Card'
import "./Projects.css"
import va from "../../assets/va.png"
import fw from "../../assets/fw.png"
import tti from "../../assets/tti.png"
import cb from "../../assets/cb.png"
import ise from "../../assets/ise.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)


const Projects = () => {

  useGSAP(() => {
    gsap.from("#para", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: "#para",
        scroll: "body",
        scrub: 2,
        // markers: true,
        start: "top 80%",
        end: "top 30%"
      }
    })
  })

  useGSAP(() => {
    gsap.from(".slider", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".slider",
        scroll: "body",
        scrub: 2,
        // markers: true,
        start: "top 80%",
        end: "top 30%"
      }
    })
  })


  return (
    <div id="projects">
        <h1 id='para'>1 + YEARS EXPERIENCE IN PROJECTS</h1>
        <div className="slider">
            <Card title="VIRTUAL ASSISTANCE" image={va} />
            <Card title="AI POWERED FITNESS WEBSITE" image={fw} />
            <Card title="AI CHATBOT" image={cb} />
            <Card title="AI TEXT TO IMAGE" image={tti} />
            <Card title="IMAGE SEARCH" image={ise} />
        </div>
    </div>
  )
}

export default Projects