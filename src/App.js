import aie from "./aie.jpg";
import "./App.css";
import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/navbar";
import Register from "./components/Register";
import YourTicket from "./components/YourTicket";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  // const canvasRef = useRef(null);

  // useEffect(()=> {
  //     const canvas = canvasRef.current;
  //     const ctx = canvas.getContext('2d');
  //     let imgUrl = "https://res.cloudinary.com/fitness-glory/image/upload/v1639215281/aie_li5drw.jpg"
  //     const nameInput = document.getElementById('name')
  //     const downloadBtn = document.getElementById('download-btn')
  //     const image = new Image();
  //     image.crossOrigin = "Anonymous";
  //     image.src = imgUrl;
  //     image.onload = function () {
  //       drawImage()
  //     }
  //     function drawImage() {
  //       ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
  //       ctx.font = '40px monotype corsiva'
  //       ctx.fillStyle = '#29e'
  //       ctx.fillText(nameInput.value, 70, 290)
  //     }
  //     nameInput.addEventListener('input', function () {
  //       drawImage()
  //     });

  //     downloadBtn.addEventListener('click', function () {
  //       downloadBtn.href = canvas.toDataURL('image/jpg')
  //       downloadBtn.download = 'Certificate - ' + nameInput.value
  //     });
  //     image.onerror = function(err) {
  //         console.log("err", err);
  //     };

  // });

  return (
    <div className="App">
      <>
        {/* <h2>
            Enter your Name:
            <input id="name" type='text' required/>
        </h2>
        
            <canvas ref={canvasRef} height={500} width={350} style={{border: '1px solid black', position: 'center'}}/>
            <a href="#" id="download-btn">Generate Tag</a> */}
      </>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Register" exact component={Register} />
          <Route path="/Ticket" exact component={YourTicket} />
          <Route path="/About" exact component={About} />
          <Route path="/Contact" exact component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
