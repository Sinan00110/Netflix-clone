function register(e)
{
    e.preventDefault()
   let firstname= document.getElementById("firstname").value.trim()
   let lastname= document.getElementById("lastname").value.trim()
   let phonenumber= document.getElementById("phonenumber").value.trim()
   let email= document.getElementById("email").value.trim()
   let password=document.getElementById("password").value.trim()
   let confirmpassword=document.getElementById("confirmpassword").value.trim()
   let inner=document.querySelector(".inner");

   let alpha=/^[A-Za-z]+$/g;
   let isfn=alpha.test(firstname);

   let alphaln=/^[A-Za-z]+$/g;
   let isln=alphaln.test(lastname);

   let mobile=/^[6-9][0-9]{9}$/g;
   let ismb=mobile.test(phonenumber);

   let emreg=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
   let isem=emreg.test(email)

   let pasreg= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
   let ispass=pasreg.test(password)


    if(!firstname)
    {
        // firstname.style.border="2px solid red"
        // firstname.style.boxShadow="3px 3px red"
        inner.style.display="block"
        inner.innerText="field required"
        return false
    }
    else if(!isfn){
        inner.style.display="block"
        inner.innerText="first name should be an alphabet"
        return false
    }
  
    if(!lastname)
        {
            // lastname.style.border="2px solid red"
            // lastname.style.boxShadow="3px 3px red"
            inner.style.display="block"
            inner.innerText="field required"
            return false
        }
        else if(!isln){
        inner.style.display="block"
        inner.innerText="last name should be an alphabet"
        return false
        }
      
        if(!phonenumber)
            {
                // phonenumber.style.border="2px solid red"
                // phonenumber.style.boxShadow="3px 3px red"
                inner.style.display="block"
                inner.innerText="field required"
                return false
            }
            else if(!ismb){
                inner.style.display="block"
                inner.innerText="invalid mobile number"
                return false
            }
           
            if(!email)
                {
                    // email.style.border="2px solid red"
                    // email.style.boxShadow="3px 3px red"
                    inner.style.display="block"
                    inner.innerText="field required"
                    return false
                }
                else if(!isem){
                    inner.style.display="block"
                    inner.innerText="invalid Email"
                    return false
                }
                if(!password)
                    {
                        // password.style.border="2px solid red"
                        // password.style.boxShadow="3px 3px red"
                        inner.style.display="block"
                        inner.innerText="field required"
                        return false
                    }
                    else if(!ispass){
                        inner.style.display="block"
                        inner.innerText="invalid password"
                        return false
                    }
                    if(!confirmpassword)
                        {
                            // confirmpassword.style.border="2px solid red"
                            // confirmpassword.style.boxShadow="3px 3px red"
                            inner.style.display="block"
                            inner.innerText="field required"
                            return false
                        }

   if(password===confirmpassword){
  
    let user=
   {
    fullname:firstname+ " " +lastname,
    Mobile:phonenumber,
    Email:email,
    Password:confirmpassword

   }
  

   let localstorageusers=JSON.parse(localStorage.getItem("users"))||[]

   let useravailabe=localstorageusers.find(({Email:em,Mobile:mb})=>
{
    return em === email || mb === phonenumber 
})
    if(!useravailabe){
        localstorageusers.push(user)
        localStorage.setItem('users',JSON.stringify(localstorageusers))
        alert("registration success")
        window.open("./login.html")
    }
    else{
        alert("user already exsist")
        return false
    }
}else{
    // alert("password is not matching")    
    inner.style.display="block"
    inner.innerText="password not matching"
    return false
}  
  



    
}