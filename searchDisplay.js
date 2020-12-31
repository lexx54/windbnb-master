const d=document;

export function display(input,container,values){

  values.then(ele => {
    const countries=[];
    
    for (let data of ele){//create a list of contries and their respective cities availables
      if (countries.length===0)countries.push({[data.country] : [data.city]});
      else{
          if (countries.some(el => el.hasOwnProperty(data.country))) {
            countries.forEach(e=>{
              if(!e[data.country].includes(data.city)) e[data.country].push(data.city);
            });
          } else countries.push({[data.country] : [data.city]})
      }
    }

    if (input.type==="button") createList(countries[0],container.children[2]);
    else if(input.type==="text") createCounter(container.children[2]);
  });
  container.classList.add("move")
  
  
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