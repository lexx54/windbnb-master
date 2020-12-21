export async function getValues(){
  const myData=await promiseMaker("http://www.json-generator.com/api/json/get/coXCVpXYrS?indent=2");
  return myData;
}
  
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