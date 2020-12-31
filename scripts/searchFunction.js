export function action(in1,in2,value){
  //update the values of the citie display in the search section
  in1.children[1].children[0].children[1].value=value.textContent;
  in2.children[0].value=value.textContent;

}

export function sum(val1,val2){
  if(val1.value===""){
    val1.value=val2.value=1; //set the value to one so it's possible to increment it
  }else {
    val1.value++;
    val2.value++;
  }
}
export function minus(val1,val2){
  if(val1.value<=1){
    val1.value=val2.value=""; //set the value to an empty string, so that the placeholder can be seen and avoid having negative numbers
  }else {
    val1.value--;
    val2.value--;
  }
}