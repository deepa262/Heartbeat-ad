$(function(){
   WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.flashAdImpressionTrack('banner-ad')");
   WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.idleSlideTimeSeconds(20)");

  var pressTimer;

  $("#overall_mask").on("touchend", function(){
    clearTimeout(pressTimer);
    return false;
  }).on("touchstart", function(){
    pressTimer = window.setTimeout(function(){
      WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.idleSlideActivateLauncherPanel('100', '700')");
    },1000)
    return false;
  });

});

function wordsOffscreen(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
    .to(text1,3,{left:-1080, opacity:0}, '-=0.5')
}

function roomOffscreen(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
    .to(waitingroom, 3, {right:-1080, opacity:0}, '-=0.5')
}

 function roomShrink(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
   
    .to(lowerroom, 1, {width:1080,height:1654}, '-=0.5')
    .to(lowerroom, 1, {width:1160,height:1735,bottom:40,right:0}, '-=0.5')
}

function dotAppear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
    .from(dot, 3, {opacity:0}, '-=2')
}

function wrapAppear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
    .from(wrap, 3, {opacity:0}, '-=2')
}

function dottedlineAppear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
    .from(dot1, 3, {opacity:0}, '-=2')
}

function textAppear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
    .from(text2, 3, {right:-1080, opacity:0}, '-=2')
}

function heartAppear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
    .from(heart, 3, {left:-1080, opacity:0}, '-=2')
}

function heart1Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
    .from(heart1, 3, {left:-1080,opacity:0}, '-=2')
}
function heart2Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time, repeat:25});
  tl
    .from(heart2, 1, {opacity:0}, '-=0.5')
}

  function animate(){
      wordsOffscreen(5);
      roomOffscreen(5);
       roomShrink(7);
      dotAppear(10);
       wrapAppear(11);
       dottedlineAppear(12);
       textAppear(16);
       heartAppear(18);
      heart1Appear(18);
      heart2Appear(20);
    
} 
        
function onWallboardIdleSlideDisplay(){
  console.log("onWallboardIdleSlideDisplay");

}

function onWallboardIdleSlideTimerStart(){
  console.log("onWallboardIdleSlideTimerStart");
}

function onWallboardIdleSlideTimerStop(){
  clearInterval(ascroll);
}

animate();
