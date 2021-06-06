$(document).ready(function(){

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
			

    function otherPage() {
      // TweenMax.to('.circle', 2, {x: 150, y: 150, borderRadius: '40%' });

      // TweenMax.to('.square', 2, {x: -150, y: -150, scale: 2, delay: 1, ease: Back.easeOut });

      // TweenMax.from('#rectangle', 2, {y:200, rotation: 180, scale: 1.5 });

      // * * * * ADDED JQUERY

      TweenMax.to($('.circle'), 2, {x: 150, y: 150, borderRadius: '40%' });

      TweenMax.to($('.square'), 2, {x: -150, y: 150, scale: 2, delay: 1, ease: Back.easeOut });

      TweenMax.from($('#rectangle'), 2, {y:200, rotation: 180, scale: 1.5 });

      TweenMax.to($('li:first-child'), 3, {x: 130});
      TweenMax.to($('li:nth-child(3)'), 3, {x: 80});
      TweenMax.from($('li:nth-child(odd)'), 3, {scale: 1.5});

      // * * * * SECOND PAGE

      // TweenMax.to('.circle2', 0.75, {x: 100});
      // TweenMax.to('.square2', 0.75, {x: 100, delay: 1});
      // TweenMax.to('.rectangle2', 0.75, {x: 100, delay: 2});


      // * * * * USING A TIMELINE
      // var tlanimation = new TimelineMax({repeat: 3, repeatDelay: 1});

      // tlanimation.to('.circle2', 1, {x: 100, ease: Elastic.easeIn})
      // .to('.square2', 1, {x: 100, ease: Back.easeIn})
      // .to('.rectangle2', 1, {x: 100, ease: Bounce.easeOut});


      // * * * * USING .staggerFrom/.staggerTo
      // TweenMax.staggerFrom('.triangle', 1, {x: 100, y: 100, opacity: 0, ease: Back.easeOut}, 0.2);
      // TweenMax.staggerTo('.triangle', 1, {x: 200, y: 200, opacity: 0}, 0.2);


      // * * * * USING .set and yoyo
      TweenMax.set('.oval', {x: -100});

      var tlanimation2 = new TimelineMax({repeat: 3, yoyo: true});

      tlanimation2.to('.oval', 1, {x: 100});
      // .to('.oval', 1, {x: -100});


      // * * * * UNDERSTANDING LABELS
      // Used labels to make animations execute at the same time
      var tlanimation3 = new TimelineMax();

      tlanimation3.to('.circle2', 1, {x: 100, ease: Elastic.easeOut}, 'circleRectangle')
      .to('.square2', 1, {x: 100, ease: Back.easeIn})
      .to('.rectangle2', 1, {x: 100, ease: Elastic.easeOut}, 'circleRectangle');



      // * * * * PLAYBACK CONTROLS
      var tlshapes = new TimelineMax();

      tlshapes.staggerFrom('.shape', 0.5, {x: 50, y: 50, opacity: 0}, 0.2);

      $('.playButton').click(function(){
          tlshapes.play();
      });

      $('.pauseButton').click(function() {
          tlshapes.pause();
      });

      $('.resumeButton').click(function() {
          tlshapes.resume();
      });

      $('.reverseButton').click(function() {
          tlshapes.reverse();
      });

      $('.slowButton').click(function() {
          tlshapes.timeScale(0.5);
      });

      $('.fastButton').click(function() {
          tlshapes.timeScale(1.5);
      });

      $('.seekButton').click(function() {
          tlshapes.seek(2);
      });

      $('.progressButton').click(function() {
          tlshapes.progress(0.6);
      });

      // * * * * .staggerFromTo
      // Used to set the initial position and ending position in same line
      // TweenMax.fromTo('.triangle', 1, {x: 100, scale: 0}, {x: 50, scale: 1.5});

      // TweenMax.staggerFromTo('.triangle', 1, {x: 100, y: 100}, {x: 50, y: 50}, 0.2);
            }
          
  otherPage();

    // * * * * SOCK
		



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
