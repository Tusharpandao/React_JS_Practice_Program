import Nav from "./Nav";

function getSumbit() {
     let user=document.getElementsByClassName('inp1')
     let pass=document.getElementsByClassName('inp1')
    if ((user.value==="Rushi"|| user.value==="rushi")  && pass.value==="rushi@gmail.com") {
        <Nav/>
    }
    else{
        alert("Invaild Input..!")
    }
}
export default getSumbit;