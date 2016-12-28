window.onload = function() {

  setInterval(startTimer,1000);

}

function startTimer() {
  var endTime= new Date("January 1,2017 00:00:00");
  var totalTime=endTime - new Date();
  if(totalTime<1){
    var timer ={
      Days:     0,
      Hours:    0,
      Minutes:  0,
      Seconds:  0
    };
  }
  else{
    var timer ={
      Days:     Math.floor(totalTime /(1000*60*60*24)),
      Hours:    Math.floor((totalTime /(1000*60*60))%24),
      Minutes:  Math.floor((totalTime/(1000*60))%60),
      Seconds:  Math.floor((totalTime/(1000))%60)
  };
}
  //console.log(timer.Days+' '+timer.Hours+' '+timer.Minutes+' '+timer.Seconds);
  showCountDown(timer);
}

function showCountDown(timeLeft) {
  var container= document.getElementById('time');


  container.innerHTML="<span>"+timeLeft.Days+"</span>"+
                      "<span>"+timeLeft.Hours+"</span>"+
                      "<span>"+timeLeft.Minutes+"</span>"+
                      "<span>"+timeLeft.Seconds+"</span>";

 var spanTags=container.getElementsByTagName('span');

 addAnimationClass(spanTags[3]);
 if(timeLeft.Seconds==59)
 {
   addAnimationClass(spanTags[2]);
 }
 if(timeLeft.Seconds==59 && timeLeft.Minutes==59)
 {
   addAnimationClass(spanTags[1]);
 }
 if(timeLeft.Seconds==59 && timeLeft.Minutes==59 && timeLeft.Hours==23)
 {
   addAnimationClass(spanTags[0]);
 }
}

function addAnimationClass(span) {
  span.className="flicker";
  setTimeout(function() {
    span.className="";
  },700);

}
