const Home = () => {
    return (
        <div id="home">
            <div id="homelogo">
                <img src="https://cdn.discordapp.com/attachments/1045042395634466916/1051524416426737714/nts_logo.png" alt="logo" />
                <p>Night's Truckstyling</p>
            </div>
            <div className="infobox" id="box1">
                <h2 className="infoheader">What is NTS?</h2>
                <p className="infotext">
                    Night's TruckStyling is a Discord focused server for Euro Truck Simulator 2, Americian Truck Simulator, Local Mods and Save Edits.
                    Night's TruckStyling was founded on the 9th of November 2021 by JCBBuilds and MxSON26
                </p>
            </div>
            <div className="infobox" id="box2">
                <h2 className="infoheader">How can you join NTS?</h2>
                <p className="infotext">
                    This is pretty easy! As you can tell, we are <a href="https://discord.gg/night-s-truckstyling-907405033841238026">Discord</a> based and all you have to do is join our Discord Server to gain access to loads
                    of amazing Local Mods and Save Edits
                </p>
            </div>
                
            {/* <div id="slideshow-container">

                <div class="mySlides fade">
                    <a href="https://discord.gg/XVHQTDAqkk"><img src="https://cdn.discordapp.com/attachments/879004504232710186/1008360410317062154/Untitled.jpg" /></a>
                    <div class="text"></div>
                </div>

                <div class="mySlides fade">
                    <a href="https://discord.com/invite/Cw6EyWj"><img src="https://truckersfm-dev.s3.fr-par.scw.cloud/site-banners/0R3EwP7UBWJYU4D0trpNpFel6PlAfxUWWiTr0SAI.png" /></a>
                    <div class="text"></div>
                </div>
            
                <div class="mySlides fade">
                <a href="https://discord.com/invite/jd7vKBRZtH"><img src="https://cdn.discordapp.com/attachments/805030564276207647/934147233723580486/ad-banner2.png" /></a>
                <div class="text"></div>
                </div>

            </div> */}
        </div>
    )
}

// var slideIndex = -1;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
  
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.height = "0";
//     slides[i].style.transition = "opacity 1s ease-out";
//     slides[i].style.opacity = "0";
//   }

//   slideIndex++;
  
//   if (slideIndex > 2) {slideIndex = 0}

//   if (slideIndex == 0){slides[0].style.height = "0"} 
//   else{slides[slideIndex - 1].style.height = "0"}

//   slides[slideIndex].style.height = "auto";
//   slides[slideIndex].style.opacity = "1";
  
//   setTimeout(showSlides, 10000);
// }

export default Home