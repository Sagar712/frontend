function fetchall() {
    
    const xhr = new XMLHttpRequest();

    fetch('https://secret-script.herokuapp.com/script', {method:'get'})
    .then(res => {
        return res.json();
    })
    .then(response => {
        let tbl = document.getElementById("tablee");
        let str="<tr><th>Name</th><th>Username</th><th>password</th></tr>";
        /*response.forEach(i => {
            str += `<tr><td>${response[i].username}</td> <td>${response[i].email}</td> <td>${response[i].password}</td></tr>`
        });
        */

        for(let i=0; i<2; i++){
            str += `<tr><td>${response[i].username}</td> <td>${response[i].email}</td> <td>${response[i].password}</td></tr>`
        }

        tbl.innerHTML = str;
        
    });


}