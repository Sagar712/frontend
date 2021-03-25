
let whoup = 0;
let allres = [];
const AppUrl = 'http://localhost:3000/script/';


function fetchall() {
    
    let form = document.querySelector(".formss");
    form.classList.remove("active");
    let table = document.querySelector(".tablss");
    table.classList.add("active");
    let form2 = document.querySelector(".formss2");
    form2.classList.remove("active");
    const xhr = new XMLHttpRequest();

    fetch(AppUrl, {method:'get'})
    .then(res => {
        return res.json();
    })
    .then(response => {
        allres = response;
        let tbl = document.getElementById("tablee");
        let str="<tr><th>Name</th><th>Username</th><th>password</th></tr>";
        for(let i=0; i<response.length; i++){
            str += `<tr><td>${response[i].username}</td> <td>${response[i].email}</td> <td>${response[i].password}</td></tr>`
        }
        tbl.innerHTML = str;

    });

}




function switchwer() {
    let form = document.querySelector(".formss");
    form.classList.add("active");
    let table = document.querySelector(".tablss");
    table.classList.remove("active");
    let form2 = document.querySelector(".formss2");
    form2.classList.remove("active");
}
function switchwer2() {
    let form = document.querySelector(".formss2");
    form.classList.add("active");
    let table = document.querySelector(".tablss");
    table.classList.remove("active");
    let form2 = document.querySelector(".formss");
    form2.classList.remove("active");
}
function submited() {
    let name = document.getElementById("name").value;
    let email1 = document.getElementById("uname").value;
    let pass = document.getElementById("pass").value;

    const data = {
        username: name,
        email: email1,
        password: pass
    };


    fetch(AppUrl,{method:'post', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data)})
    .then(res => {
        return res.json();
    })
    .then(response => {
        console.log(response);
    });
}

function deleted() {
    let name = document.getElementById("name2").value;
    fetch(AppUrl+name,{method:'delete', onprogress:function(){
        console.log("processing...");
    }})
    .then(res => {
        return res.json();
    })
    .then(response => {
        console.log(response);
    })
}



