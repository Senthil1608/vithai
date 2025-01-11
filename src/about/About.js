import react from "react";
import './about.css'
import Footer from "../components/Footer";
import senthil from "./phot 1.png"
import group from './group.png'
import Profile from "../components/Profile";
import NavigationBar from "../components/NavigationBar";
import vishalImage from "../boardmemebers/vishal.png";
import tharushi from "../boardmemebers/tharushi.png"
import kathir from "../boardmemebers/kathir.png";
import bala from "../boardmemebers/adithya.png";
import akash from "../boardmemebers/akash.png";
const About =() =>{
    return(
        <div>
            <NavigationBar />
            <div className="story">
                <h1>From Seed to Skyline: The Journey of a Seed</h1>
                <h2>Igniting the Spark for Sustainability</h2>
                <div className="split">
                    <div>
                        <p>With no prior experience but united by a single dream, we came together as a team with one common goal: to light the way for a sustainable future. Driven by a shared belief that education is the key to success, we combined our efforts to create something meaningful. What started as a simple idea quickly grew into a dedicated mission—our initiative marked the seed of change, and with each step forward, that seed has continued to flourish. Today, we work relentlessly to empower individuals and communities through education, fostering a future that thrives on sustainability and growth.</p>
                    </div>
                    <div>
                        <img src={group}></img>
                    </div>
                </div>
         
            </div>
            <div className="line">
            </div>    
            <div className="story">
                
                <div className="split">
                    <div>
                         <img src={senthil}></img>
                                 
                    </div>
                    <div>
                    <h1>P S Senthil srinivas, Founder</h1>    
                    <p>Senthil is a dedicated Electronics and Communication Engineering undergraduate with a strong passion for societal impact. Currently interning at HCL Tech, he brings both technical expertise and a deep commitment to education. Teaching has always been his calling, and while he chose to pursue engineering, his love for teaching never wavered. This drive led him to establish Vithai-17 Foundation, a platform through which he channels his enthusiasm for empowering others through knowledge and guidance. Senthil’s journey reflects a unique blend of technical skill and an unwavering spirit to make a difference in society, inspiring others to reach their fullest potential.</p>
                    <a href="https://senthilsrinivas.vercel.app/"><button>Know More</button></a>
                    </div>
                </div>
            </div>     
            <div className="line">
            </div>  
                <h1>Meet Our Team</h1>
                <div className="disp">
                    
                    <Profile image={vishalImage}
                    name={"Vishal M"}
                    position={"Co-founder"}
                    link={"hi"} />
                            <Profile image={tharushi}
                    name={"Tharushi S S"}
                    position={"Strategist"}
                    link={"hi"} />
                            <Profile image={kathir}
                    name={"Kathiravan S"}
                    position={"Secretary"}
                    link={"hi"} />
                          
                </div>
                <div className="disp">
                    
                    <Profile image={akash}
                    name={"Akash N"}
                    position={"Joint Director"}
                    link={"hi"} />
                            <Profile image={bala}
                    name={"Shree Bala Aadithya B"}
                    position={"Treasurer"}
                    link={"hi"} />
                            <Profile image={bala}
                    name={"Saravanan S"}
                    position={"Director"}
                    link={"hi"} />
                          
                </div>
           
       
  
            <Footer />
        </div>
    );
}
export default About;