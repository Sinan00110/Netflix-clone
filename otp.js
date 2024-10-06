function verifyotp(e)
{
    e.preventDefault()
   let localstorageusers=JSON.parse(localStorage.getItem("users"))||[]

    let enteredotp=document.getElementById("otp")
    let storedotp=localStorage.getItem('otp')
    // console.log(storedotp)
    // if(enteredotp.value===storedotp)
    if(true)
    {
        alert("Login Successfull")
        window.open("./welcome.html")
    }else{
        alert("invalid otp")
    }
}