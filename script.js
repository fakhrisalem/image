var currentImage=0;
var tiomeid;
//array name for images 
var imagearray=[];
imagearray[0]="./photo/12.jpg";
imagearray[1]="./photo/11.png";
imagearray[2]="./photo/1.png";
imagearray[3]="./photo/2.png";
imagearray[4]="./photo/3.png";
imagearray[5]="./photo/4.jpg";
function nextimage(){//function to change image 
   currentImage++;
   if(currentImage>5) 
		currentImage=0;
document.querySelector("#img").src=imagearray[currentImage];
}
function filp(){
  tiomeid= setInterval(nextimage,500);
 
}