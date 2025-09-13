var currentImage=0;
var tiomeid;
//array name for images 
var imagearray=[];
imagearray[0]="12.jpg";
imagearray[1]="11.png";
imagearray[2]="1.png";
imagearray[3]="2.png";
imagearray[4]="3.png";
imagearray[5]="4.jpg";
function nextimage(){//function to change image 
   currentImage++;
   if(currentImage>5) 
		currentImage=0;
document.querySelector("#img").src=imagearray[currentImage];
}
function filp(){
  tiomeid= setInterval(nextimage,500);
 
}
