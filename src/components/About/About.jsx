import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import mern from '../../assets/mern.png'
import java from '../../assets/java.png'
import dsa from '../../assets/dsa.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const About = () => {

  useGSAP(() => {
    gsap.from(".circle", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".circle",
        scroll: "body",
        scrub: 2,
        // markers: true,
        start: "top 60%",
        end: "top 30%"
      }
    })

    gsap.from(".line", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".line",
        scroll: "body",
        scrub: 2,
        // markers: true,
        start: "top 60%",
        end: "top 30%"
      }
    })

    gsap.from(".aboutdetails h1", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".aboutdetails h1",
        scroll: "body",
        scrub: 2,
        // markers: true,
        start: "top 60%",
        end: "top 30%"
      }
    })

    gsap.from(".aboutdetails ul", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".aboutdetails ul",
        scroll: "body",
        scrub: 2,
        // markers: true,
        start: "top 60%",
        end: "top 40%"
      }
    })

    gsap.from(".rightabout", {
      x: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rightabout",
        scroll: "body",
        scrub: 2,
        // markers: true,
        start: "top 60%",
        end: "top 30%"
      }
    })

  })

  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li>
                <span>NAME</span>: SUBHAN ANSARI
              </li>
              <li>
                <span>AGE</span>: 20 YEARS
              </li>
              <li>
                <span>GENDER</span>: MALE
              </li>
              <li>
                <span>LANGUAGE KNOWN</span>: ENGLISH, HINDI, MARATHI
              </li>
            </ul>
          </div>
          <div className="education">
            <h1>Education</h1>
            <ul>
              <li>
                <span>DEGREE</span>: BACHELOR OF COMPUTER APPLICATION IN SCIENCE
              </li>
              <li>
                <span>BRANCH</span>: COMPUTER SCIENCE
              </li>
              <li>
                <span>CGPA</span>: 9.5
              </li>
            </ul>
          </div>
          <div className="skills">
            <h1>Skills</h1>
            <ul>
              <li>
                MERN STACK WEB DEVELOPER
              </li>
              <li>
                DSA
              </li>
              <li>
                JAVA
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rightabout">
        <Card title="MERN STACK WEB DEVELOPER" image={mern} />
        <Card title="JAVA" image={java} />
        <Card title="DSA" image={dsa} />
      </div>
    </div>
  )
}

export default About