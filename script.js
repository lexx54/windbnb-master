import {getValues} from "./getData.js";
import {display,hide} from "./searchDisplay.js"
import { action, minus, sum } from "./searchFunction.js";

const d = document,
  $show = d.querySelector(".show"),
  $loader=d.querySelector(".waiter-container"),
  $display=d.querySelector(".display-search"),
  $inputs=d.querySelector(".inputs"),
  $displayGuest=d.querySelector(".display-search-guest");
  let data;

d.addEventListener("DOMContentLoaded",e=>{
  getValues().then(ele=>{
    data=ele;
    $loader.parentElement.removeChild($loader);
  })
})

d.addEventListener("click",e=>{
  if (e.target.matches(".inputs-in")) display(e.target,$display,data);
  if (e.target.matches(".inputs-in-dis")) display(e.target,$display,data);
  if (e.target.matches(".exit")) hide($display);
  if(e.target.matches(".city-location")) action($display,$inputs,e.target);
  if(e.target.matches(`.src-btn`)) hide($display);
  if(e.target.matches(`.minus`)) minus($inputs.children[1],$displayGuest);
  if(e.target.matches(`.sum`)) sum($inputs.children[1],$displayGuest);
})

