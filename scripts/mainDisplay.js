export function displayInfo(container,template,info,input){
  const 
    $location=input.children[0].value.split(","), //get the countries and cities
    $guests=input.children[1].value; // get the number of guest



    info.then(ele=>
      ele.filter(el=>{
        if ( el.city===$location[0] && el.maxGuests>$guests){
          return el;
        }
    })).then(ele=> {
      container.innerHTML= `<section class="principal-text">
      <p>Stays in Finland</p>
      <p>${ele.length}+ stays</p>
    </section>`;
      for(let card of ele){
        createCard(card,container,template)
      }
    });
}

function createCard(data,cont,temp){
  const t=temp.content.cloneNode(true);
  t.children[0].children[0].src=`${data.photo}`;
  t.children[0].children[1].children[1].innerHTML=`<p>${data.type}</p>`;
  t.children[0].children[1].children[2].innerHTML=`<p><i class="fas fa-star"></i> ${data.rating}</p>`;
  t.children[0].children[2].children[0].innerHTML=`<p>${data.title}</p>`;

  if (data.superHost) t.children[0].children[1].children[0].innerHTML=`<p>SUPER HOST</p>`;

  cont.appendChild(t);
}