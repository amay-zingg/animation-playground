function hollowCircle() {
  let el = document.getElementById("turbulence");
  gsap.set("#theCircle", { opacity: 1, ease: Power1.easeIn });
  gsap.to(el, 3, { attr: { baseFrequency: "0 0" } });

}

hollowCircle();

function sectionOne() {
    gsap.from([".jack", ".jack2"], 4, {
      transformOrigin: "center",
      x: 0,
    });

    gsap.to(".jack2", 4, {
      x: 200,
    });
    gsap.to(".jack2", 2, {
      y: 200,
      ease: Bounce.easeOut,
      delay: 1,
    });

    gsap.to(".jack", 4, {
      transformOrigin: "center",
      rotation: 360,
      scale: 1000 / 600,
      x: 10,
      ease: Bounce.easeIn,
      delay: 1,
    });
  }

  sectionOne();

    function sectionTwo() {
    gsap.from([[jackie, jackieTwo, jackieThree, jackieFour]], 4, {
      transformOrigin: "center",
      x: 0,
    });

    gsap.to([jackie, jackieTwo, jackieThree, jackieFour], 4, {
      x: 200,
      y: 50,
      ease: Back.easeout
    });
   

    // * * * * DON'T NEED "" or # just the name of the ID
    gsap.to([jackie, jackieTwo, jackieThree, jackieFour], 4, {
      transformOrigin: "center",
      rotation: 360,
      scale: 1.05,
      x: 50,
      ease: Power2.easeIn,
      delay: 1,
    });
  }

  sectionTwo();
  


$(document).ready(function(){


  
function sectionThree() {
  // nice little tip - set the default ease to Expo.easeOut
    // this way, if you don't specify an ease, it will use this one by default. 
    TweenLite.defaultEase = Expo.easeOut;

    // vars
    // use jQuery to target the various bits of the SVG.
    $bg 			= $('svg #bg');
    $sock 			= $('svg #sock');
    $all_zaps 		= $('svg #dark-zaps, svg #light-zaps');
    $dark_zaps 		= $('svg #dark-zaps polygon');
    $light_zaps 	= $('svg #light-zaps polygon');
    $shadow 		= $('svg #shadow');
    $allElements	= $('svg #sock, svg #dark-zaps polygon, svg #light-zaps polygon, svg #shadow');

    // TweenMax.set allows you to set how the elements are arranged / setup when the JS loads.
    TweenMax.set($allElements, 		{opacity:0});
    TweenMax.set($sock, 			{scale:0.5, y:'+=100px', transformOrigin:"50% 50%"});
    TweenMax.set($shadow, 			{scale:0.5, transformOrigin:"50% 50%"});
    TweenMax.set($dark_zaps, 		{scale:0, transformOrigin:"50% 50%"});
    TweenMax.set($light_zaps, 		{scale:0, transformOrigin:"50% 50%"});

    // create a new timeline, and give it some (optional) attributes.
    var tl_scene = new TimelineMax({
      // add in an onComplete option. This fires a function when the timeline reaches it's end.
        onComplete:function() {
          // play the timeline again from the label 'hover-up'.
          // so in effect this oncomplete function creates a loop!
          tl_scene.play('hover-up');
      }
    });
    

    tl_scene
        // show sock
        .to($sock,  					1,   		{ opacity:1, scale:1, y:'-=100px', transformOrigin:"50% 50%" }, 		'showSock')
        .to($shadow,  					1,     		{ opacity:1, scale:1, transformOrigin:"50% 50%" }, 					'showSock')
        
        // hovering
      .to($sock, 						2,     		{ y:'-=40px', ease: Power2.easeInOut },								'hover-up')
      .to($all_zaps, 					2,     		{ y:'-=40px', ease: Power2.easeInOut },								'hover-up')
      .to($sock, 						2,     		{ y:'+=40px', ease: Power2.easeInOut },								'hover-down')
      .to($all_zaps, 					2,     		{ y:'+=40px', ease: Power2.easeInOut },								'hover-down')

        // show the zaps!
        .staggerTo($dark_zaps, 			0.4,     	{ opacity:1, scale:1, transformOrigin:"50% 50%" }, 	0.1,			'hover-up')
        .staggerTo($light_zaps,  		0.4,     	{ opacity:1, scale:1, transformOrigin:"50% 50%" }, 	0.1,			'hover-up+=0.5')

        // hide the zaps!
        .staggerTo($dark_zaps, 			0.6,     	{ opacity:0, scale:0, transformOrigin:"50% 50%" }, 	0.1,			'hover-down')
        .staggerTo($light_zaps,  		0.6,     	{ opacity:0, scale:0, transformOrigin:"50% 50%" }, 	0.1,			'hover-down+=0.5')

        // resize the shadow
        .to($shadow,  					2,     		{ scale:0.8, transformOrigin:"50% 50%", ease: 'linear' }, 			'hover-up')
        .to($shadow,  					2,     		{ scale:1, transformOrigin:"50% 50%", ease: 'linear' }, 			'hover-down')
    
    ;

    // clicking the SVG will fire a function to play the timeline from the start
    $('svg').click(function(){
      tl_scene.play(0);
    });
      
}

sectionThree();
			



});
// * * * * END OF DOCUMENT READY



// * * * * MOTION PATH

//register the plugin (just once)
// gsap.registerPlugin(MotionPathPlugin);

// gsap.set(".jackolantern", {scale: 0.5, autoAlpha: 1});

// gsap.to(".jackolantern", {
//   duration: 5, 
//   ease: "power1.inOut",
//   immediateRender: true,
//   motionPath: {
//     path: "#path",
//     align: "#path",
//     alignOrigin: [0.5, 0.5],
//     autoRotate: 90
//   }
// });

// MotionPathHelper.create(".jackolantern");

// * * * * MOTION PATH
