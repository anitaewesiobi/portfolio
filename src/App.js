import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header"
import SingleProject from "./Components/SingleProject"
import Slider from "react-slick";
import NextArrow from "./Components/NextArrow"
import PrevArrow from "./Components/PrevArrow"
import './index.css';
function App() {

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
        <p className="preloader-text"></p>
      </div>

      <Slider
           speed={500}
            infinite={true}
            slidesToShow={1}
            slidesToScroll={1}
            nextArrow={<NextArrow/>}
            prevArrow={<PrevArrow/>}
          

        >
        <Header/>
          <SingleProject
              color="#BA595A"
              slide={<span style={{ fontSize: "2vw!important" }}>04 of 06 </span>}
              title="STRT - WEAR"
              subtitle="ecommerce website"
              mockup="https://uc7ad745cf8194ff1501f2acfc18.dl.dropboxusercontent.com/cd/0/inline/Ap54dM6WrIm4opmxc6ekyxFkPkLqKE5TuVC9iYNxJWqFsQMJyOtdo_N2g8afxA2pES-Hg5KfokNyH2_ZVXwWgnw8BWrf3BHqOWqHWkIMhad_-Zo6rBtYTjg7uzbkrTUJxrI/file#"
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
              color="#CEA95A"
                slide={<span style={{ fontSize: "2vw!important" }}>02 of 06 </span>}
                title="Duelle Music"
                subtitle="Branding Website"
              mockup="https://uc95e73133eeb931522b29ed2a0a.dl.dropboxusercontent.com/cd/0/inline/Ap6wMlFy3ZgZqrSq0nAOsKKVXKK6XNL5eB-M_hrcIwe2NLeKSEE2jzaniy3RN67DeA5W9Ek8AJjypXnRR1t4hX-b8DCRQN_yc3KMbL4XxfEonsjpz23kre4JG-mJIG5aFbM/file#"
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
              color=" #b22222"
              slide={<span style={{ fontSize: "2vw!important" }}>01 of 06 </span>}
              title="Venue - Find"
              subtitle="property listing website"
        mockup="https://uc8ada651f406a242aec7e7e8f59.dl.dropboxusercontent.com/cd/0/inline/Ap6eVD69VO5pdCr9BO1UPRkkcBgYZBxvaysYsPjHkM_cwgtxQIRQM-q-04WhQICPPjyFTU2OsOjjUA15UTxnq9qiUSB5c1orQrmQE2dY9wb4cYh3PbSwC9iURCz-iTt1qMc/file#"
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
                color="#32baa8"
                slide={<span style={{ fontSize: "2vw!important" }}>03 of 06 </span>}
                title="Palace Hotel"
                subtitle="hotel booking website"
              mockup="https://uc19495d80711d48a75bfca5b406.dl.dropboxusercontent.com/cd/0/inline/Ap5SeLDUA4xJfh_Zp9VDPMpKnRNuvU1RNEoCSZE_Lkxg_wNhbzXoTsX9Dj1MJF6qCSsQuqYimBt8872kMgOjc0DJkFYAmxToAHeOb13XvPtLOjRKnPNWcHADOKVndxdwWTQ/file#"
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
              color="#e55d4b"
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
              mockup="https://uc5931dc2e764f75c2056cf1642f.dl.dropboxusercontent.com/cd/0/inline/Ap6z_Z9kMR_1m9ZP8pRofYYDIU65ohWSVGv6L9Zi-u31dvrJ9V8EhjbW7hDcq0ott937QmtYYk_qDsOJO7S7mgYsQGrMQXXE82qk3nIWNucDHoQ-IQ6oEq_-sztO9a8u_uQ/file#"
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
              color="#1D64A5"
                slide={<span style={{fontSize: "1vw !important" }}>06 of 06 </span>}
                title="Mikuni"
                subtitle="restaurant website"
              mockup="https://uce252ec210a75e0944f70e7b6c9.dl.dropboxusercontent.com/cd/0/inline/Ap5Kzn7hc1FhTHsp7gmBMD952pJLq4w2zgR8gFYEI2jJQjLdLskLCMzSPhSp52Dy8vp_BcJtaQyKQCwi1MfNM7WcrfrqCHNFAfjsYT8mPXS47lsw-ciZvdklsqaoNbV8lKk/file#"
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

        </Slider>
        </React.Fragment>
  );
}

export default App;
