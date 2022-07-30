import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

import "./styles.css";

const ImageSlider=()=>{
     
  const images = [
    { url: "https://www.wallpapertip.com/wmimgs/8-84993_tom-and-jerry-hd-wallpapers-tom-and-jerry.jpg"},
    { url: "https://www.wallpapers13.com/wp-content/uploads/2016/11/Tom-And-Jerry-Summer-holidays-HD-Wallpaper-2560x1600-840x525.jpg" },
    { url: "https://a-static.besthdwallpaper.com/tom-and-jerry-fur-flying-wallpaper-1280x768-83125_13.jpg"},
    { url: "https://wallpaper.dog/large/20338337.jpg" },
    { url: "https://images5.alphacoders.com/120/thumb-1920-1209673.jpg" },
    { url: "https://c4.wallpaperflare.com/wallpaper/539/635/691/tom-and-jerry-shiver-me-whiskers-desktop-wallpaper-hd-2560%C3%971600-wallpaper-preview.jpg" },
    
  ];
  return(
    <div>
     <div className="slider">  Tom and Jerry </div>
<SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  )
}
export default ImageSlider;