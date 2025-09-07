{/* <img id="swapImage" src="image1.jpg" alt="First Image" width="300"> */}
const image = document.getElementById("swapImage");

image.addEventListener("mouseover", () => {
  image.src = "image2.jpg";
});

image.addEventListener("mouseout", () => {
  image.src = "image1.jpg";
});

image.addEventListener("click", () => {
  image.src = "image3.jpg";
});

image.addEventListener("dblclick",() =>{
  image.src="image4.jpg";
})