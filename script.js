let element=undefined;
let count=0;
let list=undefined;
function addelement()
{
  ++count
  let thingstodo=count.toString()+"."+document.getElementById("entry").value
  element=document.createElement("p")
  document.getElementById("list").appendChild(element)
  element.innerHTML=thingstodo
  
}
function removeitem()
{
  list=document.getElementById("list")
  list.removeChild(list.childNodes[count])
  count--
}