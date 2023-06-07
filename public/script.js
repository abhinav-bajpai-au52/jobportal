const firstname = document.querySelector("#first-name")
const lastname = document.querySelector("#last-name")
const email = document.querySelector("#email")
const phone = document.querySelector("#phone")
const dob = document.querySelector("#dob")
const jobrole= document.querySelector("#job-role")
const address = document.querySelector("#address")
const city = document.querySelector("#city")
const pincode = document.querySelector("#pincode")
const cv = document.querySelector("#cv")
const button = document.querySelector("button")

button.addEventListener("click",()=>{
    var obj={
        firstname:firstname.value,
        lastname:lastname.value,
        email:email.value,
        phone:phone.value,
        dob:dob.value,
        jobrole:jobrole.value,
        address:address.value,
        city:city.value,
        pincode:pincode.value,
        cv:cv.value,
        
    };
    fetch("/jobapplicationforms",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(obj)
    })
})