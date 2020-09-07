var effectButton;
var canvas;
var context;
var image;


document.getElementById('SourceImage').addEventListener( 'change',function init(event) {
  effectButton = document.getElementById('EffectButton');

 canvas = document.getElementById('Canvas');
 context = canvas.getContext('2d');
 image = new Image();
image.onload = function(){
    canvas.width=image.width;
    canvas.height=image.height;
    context.drawImage(image, 0, 0);

    console.log(canvas.toDataURL('image/jpeg'));
};

image.src = URL.createObjectURL(event.target.files[0]);

  effectButton.addEventListener('click', onClick);
});

function drawImage(image) {
  context.drawImage(image, 0, 0);
}

function onClick() {
    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    invertColors(imageData.data);
    context.putImageData(imageData, 0, 0);
}

function invertColors(data) {
  for (var i = 0; i < data.length; i+= 4) {
    var avg=(data[i]+data[i+1]+data[i+2])/3;
    data[i] = avg;
    data[i+1] = avg;
   data[i+2] = avg;
  }
}
