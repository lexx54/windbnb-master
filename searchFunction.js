export function action(in1,in2,value){
  in1.children[1].children[0].children[1].textContent=value.textContent;
  in2.children[0].value=value.textContent;

  console.log("acrion")
}