
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import SingleProject from "./Components/SingleProject"
import Header from "./Components/Header"
import './index.css';

const anchors = ["firstPage", "SecondPage", "thirdPage"];

export const FullpageWrapper = () => (
    <ReactFullpage
        loopBottom={true}
        keyboardScrolling={true}
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        onLeave={(origin, destination, direction) => {
            console.log("onLeave event", { origin, destination, direction });
        }}
        render={({ state, fullpageApi }) => {


            return (
                <React.Fragment>
                    <div className="preloader">
                        <svg width="200" height="200" viewBox="0 0 100 100">
                            <polyline className="line-cornered stroke-still" points="0,0 100,0 100,100" stroke-width="10" fill="none"></polyline>
                            <polyline className="line-cornered stroke-still" points="0,0 0,100 100,100" stroke-width="10" fill="none"></polyline>
                            <polyline className="line-cornered stroke-animation" points="0,0 100,0 100,100" stroke-width="10" fill="none">
                            </polyline>
                            <polyline className="line-cornered stroke-animation" points="0,0 0,100 100,100" stroke-width="10" fill="none">
                            </polyline>
                        </svg>
                        <p className="preloader-text">Loading Anita's Portfolio</p>
                    </div>
                    <Header/>
          <SingleProject
          color="#b2a8ff"
              slide={<span style={{ fontSize: "2vw!important" }}>01 of 06 </span>}
              title="STRT - WEAR"
              subtitle="ecommerce website"
             mockup="https://www.dropbox.com/s/nyf9koo4cq842sl/mockupduration.mp4?raw=1"
              icon1="fab fa-react"
              icondesc1="React"
              icon2="fab fa-sass"
              icondesc2="SASS"
              icon3="fab fa-bootstrap"
              icondesc3="Bootstrap 4"
              icon4="fab fa-html5"
              icondesc4="HTML 5"
              challenge="Creating a fully functional ecommerce website"
              solution={
                  <ul className="ml-2">
                      <li><strong>fully-functional cart, allowing for addition and removal of items, updating cart icon, accurately totaling price, quantity, and clearing items</strong></li>
                      <li>React Router for dynamic product details page</li>
                      <li>Context API for state management with minimal boilerplate code</li>
                      <li>minimalistic use interface design equipped with purposeful animations for easy shopping</li>
                  </ul>
              }
          projectLink="https://streetwear.netlify.com"
          github="https://github.com/anitaewesiobi/react-ecommerce-streetwear"

          ></SingleProject>
        
            <SingleProject
          color="#fff1ba"
                slide={<span style={{ fontSize: "2vw!important" }}>02 of 06 </span>}
                title="Duelle Music"
                subtitle="Branding Website"
                mockup="https://www.dropbox.com/s/5k2ee68p92v3sc9/duellefinal.mp4?raw=1"
                icon1="fab fa-js"
                icondesc1="Javscript"
                icon3="fab fa-bootstrap"
                icondesc3="Bootstrap 4"
                icon4="fab fa-html5"
                icondesc4="HTML 5"
                icon2="fab fa-css3-alt"
                icondesc2="CSS3"
                challenge="GVO Digital client needed a website to showcase their music, visuals, and funnel traffic to and from their social media websites"
                solution={
                    <ul className="ml-2">
                            <li><strong>Greenstock Animations for a sleek, exciting and purposeful interface </strong></li>
                            <li>Links to social media, artists songtracks, and albums</li>
                            <li>Gallery of branding images funneling traffic to instagram</li>
                        </ul>
                }
          projectLink="http://www.duellemusic.com/"
          github="https://github.com/"

            ></SingleProject>
          <SingleProject
          color=" #ffab99"
              slide={<span style={{ fontSize: "2vw!important" }}>03 of 06 </span>}
              title="Venue - Find"
              subtitle="property listing website"
          mockup="https://www.dropbox.com/s/s4923h49ktwovra/finalvenuefindmockup.mp4?raw=1"
              challenge="A website which allows users to view and rent performance venues on an hourly basis."
              solution={
                  <ul className="ml-2">
                      <li><strong>Google Maps API Integrated with TicketMaster API showing real life existing venue data</strong></li>
                      <li>Context API for state management</li>
                      <li>React Router with dynamic details page for each venue</li>
                      <li>Google Maps visual map and markers with an info box for intutitve UX</li>
                  </ul>
              }
              icon1="fab fa-react"
              icondesc1="React"
              icon2="fab fa-npm"
              icondesc2="Node JS"
              icon3="fab fa-bootstrap"
              icondesc3="Bootstrap 4"
              icon4="fab fa-html5"
              icondesc4="HTML 5"
          projectLink="https://venue-find.netlify.com/"
          github="https://github.com/anitaewesiobi/venue-find"
          ></SingleProject>
            <SingleProject
          color="#b3dffc"
                slide={<span style={{ fontSize: "2vw!important" }}>04 of 06 </span>}
                title="Palace Hotel"
                subtitle="hotel booking website"
                 mockup="https://www.dropbox.com/s/8299a5tjk8cmtb9/hotelfinalmockup.mp4?raw=1"
                icon1="fab fa-react"
                icondesc1="React"
                icon2="fab fa-css3-alt"
                icondesc2="Styled Components"
                icon3="fab fa-bootstrap"
                icondesc3="Bootstrap 4"
                icon4="fab fa-html5"
                icondesc4="HTML 5"
                challenge="Creating a clean and modern interface showcasing hotel rooms and allowing users to make bookings"
                solution={
                    <ul className="ml-2">
                            <li><strong>Room filters easily find rooms based on criteria </strong></li>
                            <li>React Router for dynamic hero component and details page with Carosuel Gallery </li>
                            <li> Context API for state management with minimal boilerplate code</li>
                            <li>Styled Components for modular CSS component styling</li>
                        </ul>
                }
          projectLink="https://palace-heights.netlify.com/"
          github="https://github.com/anitaewesiobi/react-hotel"
            ></SingleProject>
            <SingleProject
          color="#f4a1cc"
                slide={<span style={{ fontSize: "2vw!important" }}>05 of 06 </span>}
                title="Fridge 
                - Hack"
                subtitle=" Functional React Application"
                icon1="fab fa-react"
                icondesc1="React"
                icon2="fab fa-npm"
                icondesc2="Node JS"
                icon3="fab fa-bootstrap"
                icondesc3="Bootstrap 4"
                icon4="fab fa-html5"
                icondesc4="HTML 5"
          mockup="https://www.dropbox.com/s/wee6b1sh9zm9ty5/recipemockup.mp4?raw=1"
                challenge="Creating a useful web application where individuals can enter the ingredients in their fridge and be introduced with new recipes to cook and enjoy. "
                solution={
                    <ul className="ml-2">
                            <li><strong>Edamam API supplying each recipe aand accompanying information such as ingredients and calories </strong></li>
                            <li>Context API for state management</li>
                            <li>React Router for dynamic page viewing</li>
                            <li>Minimalist user interface making it easy to decide which recipes to indulge in</li>
                        </ul>
                }
          projectLink="https://fridgehack.netlify.com"
          github="https://github.com/anitaewesiobi/FridgeHack"
            ></SingleProject>
            <SingleProject
          color="#dca5ff"
                slide={<span style={{fontSize: "1vw !important" }}>06 of 06 </span>}
                title="Mikuni"
                subtitle="restaurant website"
          mockup="https://www.dropbox.com/s/ks00637nggoi0zr/restaraunt.mp4?raw=1"
                icon1="fab fa-js"
                icondesc1="Javscript"
                icon3="fab fa-bootstrap"
                icondesc3="Bootstrap 4"
                icon4="fab fa-html5"
                icondesc4="HTML 5"
                icon2="fab fa-css3-alt"
                icondesc2="CSS3"
                challenge="Creating a modern day restaurant website where foodies can view menu items, make reservations, and contact the business"
                solution={
                    
                    <ul className="ml-2">
                            <li><strong>Testimonials showcasing the value of the business</strong></li>
                            <li>Reservation booking segment with intutive UX design</li>
                            <li>Menu with minimal design showcasing dishes visually, detailing price and ingredients</li>
                        </ul>
                }
          projectLink="https://mikuni.netlify.com/"
          github="https://github.com/anitaewesiobi/restaurant"
            ></SingleProject>
                </React.Fragment>
            );
        }}
    />
);

