
export async function getValues(){
  //fetch the json file and returned as a json object
  const myData=await fetch("./stays.json").then(ele=>ele.json());
  return myData;
}
