function validateform(){

    let e=document.getElementById('email').value;
    let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(e)){
        alert("Please enter a valid email address!")
        return false;
    }

    let p=document.getElementById('pass').value;
    if(p===""){
        alert("Password should not be empty!");
        return false;
    }else if(p.length<8){
        alert("Password should be greate than 8 character!");
        return false;
    }

    let cp=document.getElementById('cpass').value;
    if(cp===""){
        alert("Confirm Password should not be empty!");
        return false;
    }else if(p!==cp){
        alert("Confirm Password does not match Password!");
        return false;
    }
    
    alert("Form submitted successfully!");
    return true;
}
