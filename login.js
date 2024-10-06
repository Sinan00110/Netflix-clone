function login(e)
{
    e.preventDefault()
   let username= document.getElementById("username")
   let password= document.getElementById("password")
   let innerlogin=document.querySelector(".innerlogin")
   let us=username.value
   let ps=password.value
 
    // if(!us){
    //         innerlogin.style.display="block"
    //         innerlogin.innerText="field required"
    //         return false
    //        }
    //        if(!ps){
    //         innerlogin.style.display="block"
    //         innerlogin.innerText="field required"
    //         return false
    //        }
//    let localstorageusers=JSON.parse(localStorage.getItem("users"))||[]

//    let useravailabe=localstorageusers.find(({Email:em,Mobile:mb,Password:pw})=>
//    {
//     return em===username.value || mb===username.value && pw===password.value
//  })

 if(true)
    // useravailable
    {
        // alert("")
        let otp=Math.floor(100000+Math.random()*90000)
        localStorage.setItem('otp',otp)
        alert("your otp is :"+otp)
        window.open("./otp.html")
    }
    else
    {
        
        // alert("check your email/phone number and password, or register if you haven't")
        // return false
    }







}
