var modal1 = document.getElementById("imgmodal1");
var modalimg1 = document.getElementById("mimg1");
var span1 = document.getElementsByClassName("close")[0];

span1.onclick = function() {
 modal1.style.display = "none";
};

window.onclick = function(event) {
 if (event.target == modal1) {
   modal1.style.display = "none";
 }
}

var img1 = document.getElementById("gimg1");
var img2 = document.getElementById("gimg2");
var img3 = document.getElementById("gimg3");
var img4 = document.getElementById("gimg4");

var imgfile1 = "media/muffin.png";
var imgfile2 = "media/knit.png";
var imgfile3 = "media/latte.png";
var imgfile4 = "media/muffin.png";

var images = [img1,img2,img3,img4]

images.forEach(function(item, i){
 images[i].addEventListener("click", function () {
 modal1.style.display = "block";
 modalimg1.src = this.src;
})
})
