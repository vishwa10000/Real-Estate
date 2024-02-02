
let x = document.getElementById("topnav");
function handleClick(){
    if (x.style.display === "none") {
        x.style.display = "block";
        // console.log('hiiii');
      } 
      else {
        x.style.display = "none";
      }
}

let y = document.getElementById("topnav1");
function handleClick1(){
    if (y.style.display === "none") {
        y.style.display = "block";
        // console.log('Hwllo am user');
      } 
      else {
        y.style.display = "none";
      }
}
// let z = document.getElementById("contat");
// function charles(){
//   z.style.display="block";
// }

let slideposition=0;
let sliders=document.querySelectorAll('.home2');
let toalsliders=sliders.length;
let btnprev=document.querySelector('#btn-prev');
let btnnext=document.querySelector('#btn-next');

btnprev.addEventListener('click',function(){
  prevslid();
});

btnnext.addEventListener('click',function(){
  nextslid();
})

function updateposition(){
  sliders.forEach( slide => {
    slide.classList.remove('home1');
    slide.classList.add('hidden');
  });

  sliders[slideposition].classList.add('home1');

  dots.forEach( dot => {
    dot.classList.remove('dot-home1');
  });
  dots[slideposition].classList.add('dot-home1');
}

function prevslid(){
  if(slideposition==0){
    slideposition=toalsliders-1;
  }
  else{
    slideposition--;
  }
  updateposition();
}

function nextslid(){
  if(slideposition==toalsliders-1){
    slideposition=0;
  }
  else{
    slideposition++;
  }
  updateposition();
}


var dotcontainer=document.querySelector('.dots');
sliders.forEach( slide => {
  var dot=document.createElement('div');
  dot.classList.add('dot');
  dotcontainer.appendChild(dot);
});

var dots=document.querySelectorAll('.dot');
dots[slideposition].classList.add('dot-home1');

dots.forEach( (dot,index) => {
  dot.addEventListener('click',function(){
    slideposition=index;
    updateposition();
  });
});

setInterval(()=>{
  if(slideposition==toalsliders-1){
    slideposition=0;
  }
  else{
    slideposition++;
  }
  updateposition();
},10000)


const property = document.getElementById('property')
function slider1(){
  let pro1=document.getElementById("pro1");
  pro1.style.display="block";
  pro2.style.display="none";
  pro3.style.display="none";
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}
function slider2(){
  let pro2=document.getElementById("pro2");
  pro1.style.display="none";
  pro2.style.display="block";
  pro3.style.display="none";
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}
function slider3(){
  let pro3=document.getElementById("pro3");
  pro1.style.display="none";
  pro2.style.display="none";
  pro3.style.display="block";
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}




// const card =[
//   {
//     id:1,
//     content :"Smart Investments: How to Make Your Money Work with a Flat Purchase in Pune!",
//     img:"/img/blog/kasturi______-400x260.webp",
//   },
//   {
//     id:2,
//     content :"Smart Investments: How to Make Your Money Work with a Flat Purchase in Pune!",
//     img:"/img/blog/kasturi______-400x260.webp",
//   },
//   {
//     id:3,
//     content :"Smart Investments: How to Make Your Money Work with a Flat Purchase in Pune!",
//     img:"/img/blog/kasturi______-400x260.webp",
//   }
// ]

// const mycontent = document.querySelector(".mycontent");

// const showInHtml = card.map((project,index) =>{
//   return`
//   <div class="blog-contant" id="blog" key=${project.id}>
//     // <img src=${project.img} alt=${project.content}>
//     <h1>${project.content}</h1>
//     <p>${project.content}</p>
//   </div>
//   `
// })

// mycontent.innerHTML = showInHtml