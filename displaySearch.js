const d=document;

export function display(inputType,container,values){
  const cities=[];

  console.log(cities)
  container.classList.add("move")
  
  if (inputType.type==="button") {
    const temp=d.querySelector(".search-values-show");
    
  } else if(inputType.type==="text") {

  }
  console.log(inputType);
}
export function hide(container){
  container.classList.remove("move")
}

function create(times){
  for (let i=0; i<times;i++){
    const para=d.createElement("p");
  }
}