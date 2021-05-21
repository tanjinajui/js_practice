//getElementById Method
var myheading = document.getElementById("heading1");
myheading.innerHTML = "Hello world!";
document.getElementById("heading2").innerHTML = "Hello Bangladesh";
document.getElementsByTagName("h1")[2].innerHTML="Hello";
document.getElementsByClassName("pera1")[0].innerHTML="Hello Narayanganj";
document.querySelector(".pera2").innerHTML = "This is changed";
document.querySelector("a").innerHTML ="My news";
document.querySelector("li a span").innerHTML ="Home";
document.querySelectorAll("li a")[1].innerHTML="Courses";

//onclick event function
function myMessage1(){
	alert("Hello button 1");
}
//button a click korle text a show
var myMessageshow = document.querySelector("#show_message");
function myMessage2(){
	myMessageshow.innerHTML = "Registration successfully!";
}

//button a click korle image a show
var myImageShow = document.querySelector("#image_show");
function my_image_show(){
	myImageShow.src = "images/course.jpg";
}

function peragraph(){
	alert("Hello ");
}
//link change 
var link = document.getElementsByTagName("a")[7];
undefined
link.innerHTML = "Visit your site";

link.style.textDecoration="none";

link.style.color ="green";

link.style.fontSize ="20px";

link.href= "https://www.facebook.com/";

//creating html element
var home_text1 = document.createElement("h2");
var text = document.createTextNode("This is new text");
home_text1.appendChild(text);
var myDiv = document.getElementById("home");
myDiv.appendChild(home_text1);
//text remove
var home_text2 = document.getElementsByTagName("h2")[1];
myDiv.removeChild(home_text2);
//text first a add
var home_text0 = document.createElement("h2");
var text0 = document.createTextNode("This is new text first");
home_text0.appendChild(text0);
var home_text3 = document.getElementsByTagName("h2")[0];
myDiv.insertBefore(home_text0, home_text3);

// image slider
var photos = ["images/rose-flower_30.jpg", "images/rose-bouquet-3c.jpg","images/Rose-Flowers-Images.jpg","images/rose.jpg"];
var imgTag = document.querySelector("img");
var count = 0;
function next(){
	count++;
	if(count >= photos.length){
		count = 0;
		imgTag.src = photos[count];
	}else{
		imgTag.src = photos[count];
	}
}
function previous(){
	count--;
	if(count < 0){
		count = photos.length - 1;
		imgTag.src = photos[count];
	}else{
		imgTag.src = photos[count];
	}
}
// text style add js
// function addStyle(){
// 	var myVar = document.querySelector("#paraId");
// 	myVar. style.color = "#C70039";
// 	myVar. style.fontSize = "3rem";
// 	myVar. style.fontWeight = "bold";
// 	myVar. style.fontStyle = "italic";
// }
//style.css er maddhome text style
function addStyle(){
	var myVar = document.querySelector("#paraId");
	myVar.classList.add("para-style");
}
function removeStyle(){
	var myVar = document.querySelector("#paraId");
	myVar.classList.remove("para-style");
}
//addEventListener add
// document.querySelector("button").addEventListener("click",myFunction);
// function myFunction(){
// 	alert("Hello");
// }
//anonimus function
document.querySelector("button").addEventListener("mouseover",function(){
	alert("Hi");
});
//text addEventListener
var myHeading = document.querySelector("h3");
myHeading.addEventListener("mouseover", function(){
	myHeading.classList.add("heading-style");
});
myHeading.addEventListener("mouseout", function(){
	myHeading.classList.remove("heading-style");
});
//Multiple addEventListener add
// document.querySelectorAll(".myButton")[0].addEventListener("click",function(){
// 	var text1 = this.innerHTML;
// 	document.querySelector("h4").innerHTML =  "Elegance isn't solely defined by what you wear. It's how you carry yourself."
// });
// document.querySelectorAll(".myButton")[1].addEventListener("click",function(){
// 	var text1 = this.innerHTML;
// 	document.querySelector("h4").innerHTML =  "Our most wanted products."
// });
// document.querySelectorAll(".myButton")[2].addEventListener("click",function(){
// 	var text1 = this.innerHTML;
// 	document.querySelector("h4").innerHTML =  "The languages only differ in their grammar, their pronunciation and their most common words."
// });

//Multiple addEventListener add 1 addEventListener er maddhome
var len = document.querySelectorAll(".myButton").length;
for (var i = 0; i < len; i++){
document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
	var text1 = this.innerHTML;
	document.querySelector("h4").innerHTML = text1 + "Elegance isn't solely defined by what you wear. It's how you carry yourself."
});
}
// audio play add
for(var i = 0; i < 3; i++){
	document.querySelectorAll(".myButton1")[i].addEventListener("click", function(){
		var text2 = this.innerHTML;
		console.log(text2);
		audioPlay(text2);
	});
}
function audioPlay(text2){
	switch (text2){
			case "audio1":
			var audio = new Audio("sounds/1.mp3");
			audio.play();
			break;
			case "audio2":
			var audio = new Audio("sounds/2.mp4");
			audio.play();
			break;
			case "audio3":
			var audio = new Audio("sounds/3.mp4");
			audio.play();
			break;
		}
}