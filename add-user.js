document.getElementById('form').addEventListener('submit', async function(event){
event.preventDefault()  ///to prevent info from  disapearing you can use either word event or e

let firstName = document.getElementById('firstName').value;
let lastName = document.getElementById('lastName').value; ///.value is to get the infoo written in the input form
let age = document.getElementById('age').value;


let data = {
    firstName: firstName,
    lastName: lastName,
    age:age
};
console.log(data);


let result =  await fetch('https://dummyjson.com/users/add',{  //fetch takes two arguments the link and the options(the option is an object{})
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body: JSON.stringify(data)
})
.then(response=> response.json())
.then(response => response)  ///if you dont write console it means you are returning
.catch(error => error.message);

let success = document.getElementById('successs')
result && result.id? success.innerHTML = 'User created succesfully':     //this is if it has the id and result
success.innerHTML = 'User not created'     //here its when 


console.log(result);

})



  