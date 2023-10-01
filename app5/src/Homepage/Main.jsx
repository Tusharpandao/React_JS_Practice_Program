import Nav from './Nav';

export const Main = () => {
  let user=document.getElementsByClassName('inp1')
  let pass=document.getElementsByClassName('inp1')

   if(user.value==="Rushi" && pass.value==="abc@gmail.com") {
    Nav();
  
}
else{
  alert('please enter valid login details')
}
}
