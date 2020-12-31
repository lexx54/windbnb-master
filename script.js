import {getValues} from "./getData.js";
import { displayInfo } from "./mainDisplay.js";
import {display,hide} from "./searchDisplay.js"
import { action, minus, sum } from "./searchFunction.js";
import {btnAppear,btnDisappear} from './btnDisplay.js'

const d = document,
  $show = d.querySelector(".show"),
  $loader=d.querySelector(".waiter-container"),
  $display=d.querySelector(".display-search"),
  $inputs=d.querySelector(".inputs"),
  $displayGuest=d.querySelector(".display-search-guest"),
  $main=d.querySelector("main"),
  $cardTemplate=d.querySelector(".card"),
  data=getValues().then(ele=>{
    $loader.parentElement.removeChild($loader); //remove the loader 
    return ele; //return the json object to be use in the entire page, as a promise
  });

d.addEventListener("DOMContentLoaded", e=>{
  //once the DOM is ready, display the default info
  displayInfo($main,$cardTemplate,data,$inputs); 
})

d.addEventListener("click",e=>{
  if (e.target.matches(".inputs-in")) display(e.target,$display,data);
  if (e.target.matches(".inputs-in-dis")) display(e.target,$display,data);
  if (e.target.matches(".exit")) hide($display);
  if(e.target.matches(".city-location")) action($display,$inputs,e.target);
  if(e.target.matches(`.minus`)) minus($inputs.children[1],$displayGuest);
  if(e.target.matches(`.sum`)) sum($inputs.children[1],$displayGuest);
  if(e.target.matches(`.inputs-ic`)) displayInfo($main,$cardTemplate,data,$inputs);
  if(e.target.matches(`.src-btn`)||e.target.matches(`.src-btn *`)) {
    displayInfo($main,$cardTemplate,data,$inputs);
    hide($display)
  };
  if(e.target.matches(`.btnScroll`)||e.target.matches(`.btnScroll *`)) window.scroll(0,0);
})

d.addEventListener("scroll",e=>{
  if (window.pageYOffset>300) btnAppear($main);
  else if(window.pageYOffset<300)btnDisappear($main);

})


