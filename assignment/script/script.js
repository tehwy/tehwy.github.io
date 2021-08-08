const slides=document.querySelector(".slider").children;
const captions=document.querySelector(".captionbox").children;
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");

let index=0;
let index2=0;


  prev.addEventListener("click",function(){
      prevSlide();
      prevCaption();
      resetTimer();
      resetTimer2();
  })

  next.addEventListener("click",function(){
     nextSlide(); 
     nextCaption();
     resetTimer();
     resetTimer2();
  })  

  function prevSlide(){
    if(index==0){
        index=slides.length-1;
    }
    else{
        index--;
    }
    changeSlide();
}

function nextSlide(){
  if(index==slides.length-1){
      index=0;
  }
  else{
      index++;
  }
  changeSlide();
}

function changeSlide(){
          for(let i=0; i<slides.length; i++){
               slides[i].classList.remove("active");
          }

   slides[index].classList.add("active");
}


function prevCaption(){
    if(index2==0){
        index2=captions.length-1;
    }
    else{
        index2--;
    }
    changeCaption();
}

function nextCaption(){
  if(index2==captions.length-1){
      index2=0;
  }
  else{
      index2++;
  }
  changeCaption();
}

function changeCaption(){
          for(let j=0; j<captions.length; j++){
            captions[j].classList.remove("active");
          }

          captions[index2].classList.add("active");
}


function resetTimer(){
    // when click to indicator or controls button 
    // stop timer 
    clearInterval(timer);
    // then started again timer
    timer=setInterval(autoPlay,4000);
}


function autoPlay(){
 nextSlide();
}


let timer=setInterval(autoPlay,4000);

function resetTimer2(){
    // when click to indicator or controls button 
    // stop timer 
    clearInterval(timer2);
    // then started again timer
    timer2=setInterval(autoPlayCaption,4000);
}


function autoPlayCaption(){
 nextCaption();
}


let timer2=setInterval(autoPlayCaption,4000);

