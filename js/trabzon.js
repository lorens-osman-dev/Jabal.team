const images = [
    "../assets/img/trabzon/nn/trabzon (1).jpeg",
     "../assets/img/trabzon/nn/trabzon (1).jpg",
     "../assets/img/trabzon/nn/trabzon (2).jpg",
     "../assets/img/trabzon/nn/trabzon (3).jpg",
     "../assets/img/trabzon/nn/trabzon (4).jpg",
     "../assets/img/trabzon/nn/trabzon (5).jpg",
     "../assets/img/trabzon/nn/trabzon (6).jpg",
     "../assets/img/trabzon/nn/trabzon (7).jpg",
     "../assets/img/trabzon/nn/trabzon (8).jpg",
     "../assets/img/trabzon/nn/trabzon (9).jpg",
     "../assets/img/trabzon/nn/trabzon (10).jpg",
     "../assets/img/trabzon/nn/trabzon (11).jpg",
     "../assets/img/trabzon/nn/trabzon (12).jpg",
     "../assets/img/trabzon/nn/trabzon (13).jpg",
     "../assets/img/trabzon/nn/trabzon (14).jpg",
     "../assets/img/trabzon/nn/trabzon (15).jpg",
     "../assets/img/trabzon/nn/trabzon (16).jpg",
     "../assets/img/trabzon/nn/trabzon (17).jpg",
    
   ];
   
   const texts = [
     ["Istanbul", "\"Take a greatest journey on your life\""],
     ["طرابزون", "\"شوف المناظر يا حباب\""],
     ["Paris", "\"Traveling – it leaves you speechless, then turns you into a storyteller\""],
     ["Sweden", "\"Once a year, go someplace you’ve never been before\""]
   ];
   
   rgbKineticSlider = new rgbKineticSlider({
     slideImages: images,
     itemsTitles: texts,
   
     backgroundDisplacementSprite: "https://i.ibb.co/N246LxD/map-9.jpg", 
     cursorDisplacementSprite: "https://i.ibb.co/KrVr51f/displace-circle.png",
     cursorImgEffect: false,
     cursorTextEffect: false,
     cursorScaleIntensity: 0.65,
     cursorMomentum: 0.14,
   
     swipe: true,
     swipeDistance: window.innerWidth * 0.4,
     swipeScaleIntensity: 2,
   
     slideTransitionDuration: 1, // transition duration
     transitionScaleIntensity: 30, // scale intensity during transition
     transitionScaleAmplitude: 160, // scale amplitude during transition
   
    
     nav: true, // enable navigation
     navElement: ".main-nav", // set nav class
   
   
     imagesRgbEffect: true,
     imagesRgbIntensity: 0.9,
     navImagesRgbIntensity: 80,
   
     textsDisplay: true, 
     textsSubTitleDisplay: true, 
     textsTiltEffect: true,
     googleFonts: ["Playfair Display:700", "Roboto:400"],
     buttonMode: false,
     textsRgbEffect: true,
     textsRgbIntensity: 0.03,
     navTextsRgbIntensity: 15,
   
     textTitleColor: "white",
     textTitleSize: 125,
     mobileTextTitleSize: 80,
     textSubTitleColor: "white",
     textSubTitleSize: 21,
     mobileTextSubTitleSize: 16,
     textSubTitleLetterspacing: 2,
     textSubTitleOffsetTop: 90, 
     mobileTextSubTitleOffsetTop: 90
   });

  