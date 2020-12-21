import {getValues} from "./getData.js";
const d = document,
  $show = d.querySelector(".show"),
  $loader=d.querySelector(".waiter-container"),
  data=[];

  // setTimeout(()=>{
  //   $loader.parentElement.removeChild($loader);
  // },2000)

// const myData=promiseMaker("http://www.json-generator.com/api/json/get/coXCVpXYrS?indent=2")
// console.log(myData)

d.addEventListener("DOMContentLoaded",e=>{
  getValues().then(ele=>{
    console.log(ele)
    $loader.parentElement.removeChild($loader);
  })
})

