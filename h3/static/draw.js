const fileInput = document.querySelector("#upload");

drawOnImage();

fileInput.addEventListener("change", async (e) => {
  const [file] = fileInput.files;

  const image = document.createElement("img");
  image.src = await fileToDataUri(file);


  image.addEventListener("load", () => {
    drawOnImage(image);
  });
  return false;
});

function fileToDataUri(field) {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      resolve(reader.result);
    });

    reader.readAsDataURL(field);
  });
}

const sizeElement = document.querySelector("#sizeRange");

let size = sizeElement.value;

sizeElement.oninput = (e) => {
  size = e.target.value;
};

const colorElement = document.getElementsByName("colorRadio");

let color;

colorElement.forEach((c) => {
  if (c.checked) color = c.value;
});

colorElement.forEach((c) => {
  c.onclick = () => {
    color = c.value;
  };
});

function drawOnImage(image = null) {
  const canvasElement = document.getElementById("canvas");
  const context = canvasElement.getContext("2d");
  // if an image is present,
  // the image passed as a parameter is drawn in the canvas
  if (image) {
    const imageWidth = 1000;
    const imageHeight = 400;

    // rescaling the canvas element
    canvasElement.width = imageWidth;
    canvasElement.height = imageHeight;
    context.drawImage(image, 0, 0, imageWidth, imageHeight);
  }

  const clearElement = document.getElementById("clear");
  clearElement.onclick = () => {
    context.clearRect(0, 0, canvasElement.width, canvasElement.height);
  };

  let isDrawing;

  canvasElement.onmousedown = (e) => {
    isDrawing = true;
    context.beginPath();
    context.lineWidth = size;
    context.strokeStyle = color;
    context.lineJoin = "round";
    context.lineCap = "round";
    context.moveTo(e.clientX, e.clientY);
  };

  canvasElement.onmousemove = (e) => {
    if (isDrawing) {
      context.lineTo(e.clientX, e.clientY);
      context.stroke();
    }
  };

  canvasElement.onmouseup = function () {
    isDrawing = false;
    context.closePath();
  };
}

function save(){
  const canvas=document.getElementById('canvas');
  const  imageUri = canvas.toDataURL();
  console.log(imageUri);
  $.ajax({
    type: 'POST',
    url: '/save_pic/',
    data: {
      'p': imageUri
    },
    success: function(response){
      console.log(response)
    },
    error: function(response){
      console.log(response)
    }
  })
}