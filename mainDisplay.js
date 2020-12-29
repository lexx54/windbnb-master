export function displayInfo(container,template,info,input){
  const 
    $in1=input.children[0].value.split(","),
    $in2=input.children[1].value;
    const data=info.filter(ele=>{
      if ( ele.city===$in1[0] && ele.maxGuests>$in2){
        return ele;
      }
    })
    container.innerHTML= `<section class="principal-text">
        <p>Stays in Finland</p>
        <p>12+ stays</p>
      </section>`;

    for(let card of data){
      const t=template.content.cloneNode(true);
      t.children[0].children[0].src=`${card.photo}`;
      t.children[0].children[1].children[1].innerHTML=`<p>${card.type}</p>`;
      t.children[0].children[1].children[2].innerHTML=`<p><i class="fas fa-star"></i> ${card.rating}</p>`;
      t.children[0].children[2].children[0].innerHTML=`<p>${card.title}</p>`;

      if (card.superHost) t.children[0].children[1].children[0].innerHTML=`<p>SUPER HOST</p>`;

      container.appendChild(t);
    }



  // if($in1==='Helsinki, Finland' && $in2){
  //   console.log(`hello ${$in2} person, from ${$in1} `)
  // } else if($in1==='Turku, Finland' && $in2){
  //   console.log(`hello ${$in2} person, from ${$in1} `)
  // } else if($in1==='Vaasa, Finland' && $in2){
  //   console.log(`hello ${$in2} person, from ${$in1} `)
  // } else if($in1==='Oulu, Finland' && $in2){
  //   console.log(`hello ${$in2} person, from ${$in1} `)
  // }
  
}

function createCard(){

}