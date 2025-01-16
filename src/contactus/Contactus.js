import React from "react";
import NavigationBar from "../components/NavigationBar";
import Contactblock from "../components/Contactblock";
import Footer from "../components/Footer"; 
import '../contactus/contact.css'
const Contactus = () =>{
    return(
        <div>
            <NavigationBar />
            <div className="veeradisplay">
                <Contactblock text1={"Join Us"} text2={"Willing to join our team, find the link below to fill the form and our HR team will contact you on further procees" } text3={"Join now"} />
                <Contactblock  text1={"Donate Now"} text2={"We value every single donation, all documents ,bills and procedures will be done at the highest level of dignity and integrity."} text3={"Donate Now"}/>
                <Contactblock text1={"Write to us"} text2={"Finding any queries or willing to give your valuable feedback, don't hesitate click the below and share your thoughts"} text3={"Write now"} />
            </div>
            <Footer />
           
        </div>
    );
}
export default Contactus;