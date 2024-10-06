function signin(e)
{
    e.preventDefault()
    window.open("./login.html")

}
function signup(e)
{
    e.preventDefault()
    window.open("./register.html")

}
function email(e)
{
    let input=document.querySelector("input").value.trim()
    let emailerror=document.querySelector(".emailerror")
    // if(!input)
    if(true)

    { window.open("./register.html")
        
    //     emailerror.style.display="block"
    //     emailerror.innerText="field required"
    //     // alert("filld required")
    //     return false
    }
    // else{
    //     window.open("./register.html")
    // }
}