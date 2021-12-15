import React from "react";
import '../App.css';
import $ from 'jquery';
import { Button } from "@material-ui/core";

export default function Home(){
    // (function () {
        
    //     const second = 1000,
    //           minute = second * 60,
    //           hour = minute * 60,
    //           day = hour * 24;
      
    //     //I'm adding this section so I don't have to keep updating this pen every year :-)
    //     //remove this if you don't need it
    //     // let today = new Date(),
    //     //     dd = String(today.getDate()).padStart(2, "0"),
    //     //     mm = String(today.getMonth() + 1).padStart(2, "0"),
    //     //     yyyy = today.getFullYear(),
    //     //     nextYear = yyyy + 1,
    //     //     dayMonth = "09/30/",
    //     //     birthday = dayMonth + yyyy;
        
    //     // today = mm + "/" + dd + "/" + yyyy;
    //     // if (today > birthday) {
    //     //   birthday = dayMonth + nextYear;
    //     // }
    //     //end
        
    //     const countDown = new Date("Dec 21, 2021 19:00:00").getTime(),
    //         x = setInterval(function() {    
      
    //           const now = new Date().getTime(),
    //                 distance = countDown - now;
                   
    //           document.getElementById("days").innerText = Math.floor(distance / (day)),
    //             document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)) +
    //             " :",
    //             document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)) +
    //             "  :",
    //             document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
                    
    //           //do something later when date is reached
    //           if (distance < 0) {
    //             document.getElementById("countdown").style.display = "The countdown is over!";
    //             document.getElementById("content").style.display = "block";
    //             clearInterval(x);
    //           }
    //           //seconds
    //         }, 0)
    //     }());

    var countDownDate = new Date("Dec22, 2021 19:00:00").getTime();
    var myfunc = setInterval(function() {
      var now = new Date().getTime();
var timeleft = countDownDate - now;
    
var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

document.getElementById("days").innerHTML = days + "d "
document.getElementById("hours").innerHTML = hours + " : " 
document.getElementById("mins").innerHTML = minutes + " : " 
document.getElementById("secs").innerHTML = seconds 

if (timeleft < 0) {
  clearInterval(myfunc);
  document.getElementById("days").innerHTML = ""
  document.getElementById("hours").innerHTML = "" 
  document.getElementById("mins").innerHTML = ""
  document.getElementById("secs").innerHTML = ""
  // document.getElementById("end").innerHTML = "TIME UP!!";
}
      }, 1000)

return (
    <div className="main">
        <center>
    <div class="container">
    <h1 className="mainHeading">HOLA MOZILLA 2.0</h1>
    <div className="dateText"><span>21</span><span>st</span> <span>December @ 7.00pm</span></div>
   
   

  <div id="countdown" className="countdown glowing">
    <div className="mrgin"><ul>
    {/* class="font-effect-fire" */}
      <li><span id="days"></span><tx style={{color: "#f83600"}}>days</tx></li>
      <li><span id="hours"></span><tx style={{color: "#f83600"}}>Hours</tx></li>
      <li><span id="mins"></span><tx style={{color: "#f83600"}}>Minutes</tx></li>
      <li><span id="secs"></span><tx style={{color: "#f83600"}}>Seconds</tx></li>
      {/* <li><span id="end"></span><tx style={{color: "#f83600"}}>Seconds</tx></li> */}
    </ul>
  </div></div>

  <img className="watermark" src="https://res.cloudinary.com/fitness-glory/image/upload/v1639484985/logo_icon-01_s6oex8.png"/>

  <Button
          className="myBtn"
        >
          <a style={{ textDecoration: "none" }} >
            Register Now
          </a>
        </Button>

       
</div></center></div>
)
}