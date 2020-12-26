export function action(in1,in2,value){
  in1.children[1].children[0].children[1].textContent=value.textContent;
  in2.children[0].value=value.textContent;

  console.log("acrion")
}
export function sum(val1,val2){
  // console.log(val1.value)
  // console.log(val2.textContent)
  if(val1.value===""){
    val1.value=1;
    val2.value=1;
  }else {
    val1.value++;
    val2.value++;
  }
  console.log("sum")
}
export function minus(val1,val2){
  if(val1.value<=1){
    val1.value="";
    val2.value="";
  }else {
    val1.value--;
    val2.value--;
  }
}