const d = document,
  $show = d.querySelector(".show");




//  
function promiseMaker(url) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.responseType = "json";
    req.open("get", url);

    req.onload = function () {
      try {
        if (this.status === 200) resolve(this.response);
        else reject("the response wasn't correct")
      } catch {
        console.error("dont work")
      }
    }
    req.onerror = () => {
      reject(new Error("somenthing went wrong when reciving response"))
    }
    req.send()
  })
}

// const myData=promiseMaker("http://www.json-generator.com/api/json/get/coXCVpXYrS?indent=2")
// console.log(myData)


// async function getValues(){
//   const myData=await promiseMaker("http://www.json-generator.com/api/json/get/coXCVpXYrS?indent=2");
//   myData.then(ele=>console.log(ele))
// }

// const req= new XMLHttpRequest();
//     req.responseType="json";
//     req.open("get","http://www.json-generator.com/api/json/get/coXCVpXYrS?indent=2");

//     req.onload=function(){
//       if (this.status===200) console.log(this.response);
//       else console.error("the response wasn't correct")
//     }
//     req.onerror=()=>{
//       console.error(new Error("somenthing went wrong when reciving response"))
//     }
//     req.send()