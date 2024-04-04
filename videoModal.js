const dialog = document.querySelector("dialog");
const showButton0 = document.querySelector("#video-modal-open0");
const showButton1 = document.querySelector("#video-modal-open1");
const showButton2 = document.querySelector("#video-modal-open2");
const closeButton = document.querySelector("dialog button");
const iframe = document.querySelector(".modal-video");

showButton0.addEventListener("click", handleShowButton);
showButton1.addEventListener("click", handleShowButton);
showButton2.addEventListener("click", handleShowButton);

function handleShowButton() {
  dialog.showModal();
  document.body.style.overflow = "hidden";
  iframe.pause()
}

closeButton.addEventListener("click", () => {
  dialog.close();
  document.body.style.overflow = "auto";
  let src = iframe.src;
	iframe.src = src;
});