import {getValues} from "./getData.js";
import {display,hide} from "./displaySearch.js"

const d = document,
  $show = d.querySelector(".show"),
  $loader=d.querySelector(".waiter-container"),
  $display=d.querySelector(".display-search");
  let data;

  // setTimeout(()=>{
  //   $loader.parentElement.removeChild($loader);
  // },2000)

// const myData=promiseMaker("http://www.json-generator.com/api/json/get/coXCVpXYrS?indent=2")
// console.log(myData)

d.addEventListener("DOMContentLoaded",e=>{
  getValues().then(ele=>{
    data=ele;
    $loader.parentElement.removeChild($loader);
  })
})

d.addEventListener("click",e=>{
  if (e.target.matches(".inputs-in")) {
    display(e.target,$display,data)
  }
  if (e.target.matches(".exit")) hide($display)
})

