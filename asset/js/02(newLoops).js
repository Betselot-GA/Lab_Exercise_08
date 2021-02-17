//DOM Load 
document.addEventListener('DOMContentLoaded', () => {

    forINLoop();

    forOFLoop();
})


function forINLoop() {

    // A Student Object 
    const student = { name: "Abebe", age: 21, year: "2dn year" }
    const forInLoop = document.getElementById("forInLoop");
    // 1. Create a for in loop that iterate over the student object
    for(element in student){
        forInLoop.innerHTML +=
        `<li class="list-group-item" >${element} : ${student[element]}</li> `;
    }
    // 2. Inside the loop paint the UI [Use the Format Given Below]


    //Use this Format 

   

}


function forOFLoop() {

    // A Students Array
    const students = [{ name: "Abebe", age: 21, year: "2dn year" }, { name: "Kebede", age: 22, year: "2dn year" }, { name: "Abebech", age: 23, year: "2dn year" }]
    const forOfLoop = document.getElementById("forOfLoop");
    // 1. Create a for of loop that iterate over the students Array and displays the names of students 
    for (student of students){
            forOfLoop.innerHTML +=
            `<li class="list-group-item" >Name : ${student.name}</li>`;
        
    }

    // 2. Inside the loop paint the UI [Use the Format Given Below]


    //Use this Format 

   

}