var photoArray = new Array(
    //slides
    '/kenya1.jpg',
    '/ethiopia1.jpg',
    '/southafrica1.jpg',
    '/namibia1.jpg',
    '/tanzania1.jpg'
);
var imgPath = "img";
function africaWild(imgID) { //expands image
    var thisImage = document.getElementById('largeImage');
    var newImg;
    newImg = photoArray[imgID];
    thisImage.src = imgPath + newImg;
    var element = document.getElementById("id20").innerHTML = "The Hidden Beauty of Africa";
}
var captionArray = [
    //captions
    'Elephants in Masai Mara National Reserve, Kenya.',
    'Male Gelada Monkey in Simien Mountain, Ethiopia.',
    'Young male Rhinos in Hluhluwe Game Reserve, South Africa.',
    'Majestic Lion in Etosha National Park, Namibia.',
    'Cheetah resting on grass in Serengeti National Park, Tanzania.'
];
function africaCaption(ID) { //creates caption
    var photoCaption = document.getElementById('caption');
    var newCaption;
    newCaption = captionArray[ID];
    photoCaption.innerHTML = newCaption;
}
var lastEl;
function mark(presentEl) {
    var id = presentEl.id;
      if(lastEl){
        lastEl.style.border = ""; // no border
        presentEl.style.border = "3px solid yellow"; // applies border to present element
        lastEl = document.getElementById(id); // assigns present element id to last element 
    } else {
        presentEl.style.border = "3px solid yellow"; // 
        lastEl = document.getElementById(id);
    }
}