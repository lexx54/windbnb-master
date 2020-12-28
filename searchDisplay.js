const d=document;

export function display(inputType,container,values){
  const countries=[];

  values.forEach(ele => {
    if (countries.length===0)countries.push({[ele.country] : [ele.city]});
    else{
        if (countries.some(el => el.hasOwnProperty(ele.country))) {
          countries.forEach(e=>{
            if(!e[ele.country].includes(ele.city)) e[ele.country].push(ele.city);
          });
        } else countries.push({[ele.country] : [ele.city]})
    }
  });

  container.classList.add("move")
  
  if (inputType.type==="button") createList(countries[0],container.children[2]);
  else if(inputType.type==="text") createCounter(container.children[2]);
}

export function hide(container){
  container.classList.remove("move");
  container.children[2].innerHTML='';
}

function createList(values,container){
  container.innerHTML="";
  for (let prop in values){
    for (let i=0; i<values[prop].length;i++){
      const para=d.createElement("p");
      para.classList.add("city-location");
      para.innerHTML=`<i class="fas fa-map-marker-alt"></i>${values[prop][i]}, ${prop}`;
      container.appendChild(para);
    }
  }
}

function createCounter(container){
  container.innerHTML="";
  const $template=d.querySelector(".counter");
  const $content=$template.content.cloneNode(true);
  container.appendChild($content);
}