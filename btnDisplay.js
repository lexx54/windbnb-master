const d=document;
export function btnAppear(container){
  if (!container.contains(d.querySelector(".btnScroll"))){
    const $btn=d.createElement("div");
    $btn.classList.add("btnScroll");
    $btn.innerHTML="<i class='fas fa-angle-up'></i>";

    container.appendChild($btn);
  }
}
export function btnDisappear(container){
  if (container.contains(d.querySelector(".btnScroll")))container.removeChild(d.querySelector(".btnScroll"))
}