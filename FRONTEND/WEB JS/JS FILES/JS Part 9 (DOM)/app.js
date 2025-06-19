let smallImages=document.getElementsByClassName("oldImg");
//for normally printing all 3 images
for(let i=0; i<smallImages.length; i++){
    console.dir(smallImages[i]);
}
//for printing their source
for(let i=0; i<smallImages.length; i++){
    // smallImages[i].src="assets/spiderman_img.png"; //we are adding the spiderman img value to small images
    console.log(`value of image no.${i} is changed.`);
}

//---------------------querySelector--------------------
console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#discription"));
console.dir(document.querySelector(".oldImg"));

console.dir(document.querySelector("div a"));

console.dir(document.querySelectorAll('p'));

//-------------------------------setting content in object -----------------------------
let para= document.querySelector('p');
//---------innerText------
console.log(para.innerText);
// console.log(para.innerText="Gurbani saroy");
//--------textContent-----
console.log(para.textContent);
//--------innerHtml--------
console.log(para.innerHTML);
// console.log(para.innerHTML="Gurbani <b>Saroy</b>");

//----------------------manipulating attributes---------------------
// let img=document.querySelector('img');
//getting value
// console.log(img.getAttribute("id"));
//setting value
// console.log(img.setAttribute("id","spidermanImg"));
// img.setAttribute('src', "assets/creation_3.jpeg"); //src is attribute of img so I am manipulating the attribute of img here 

//---------------------manipulating style------------------------
let heading= document.querySelector("h1");
heading.style.color="pink";
heading.style.backgroundColor="green";

let links= document.querySelectorAll('.box a');
// for(let i=0; i<links.length; i++){
//     links[i].style.color="red";
// }
//or
for(link of links){
    link.style.color="red";
}

//------------------------Navigation------------------------
let h4= document.querySelector('h4');
h4.parentElement;
