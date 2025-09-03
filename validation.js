function validateform(){
    let f=document.getElementById('fname').value;
    if(f===""){
        alert("First Name should not be empty!");
        return false;//prevent form submission
    }

    let l=document.getElementById('lname').value;
    if(l===""){
        alert("Last Name should not be empty!");
        return false;
    }

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
function backgroundColor(color){
    document.getElementById('fname').style.backgroundColor=color;
    document.getElementById('lname').style.backgroundColor=color;
    document.getElementById('email').style.backgroundColor=color;
    document.getElementById('pass').style.backgroundColor=color;
    document.getElementById('cpass').style.backgroundColor=color;
}