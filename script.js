const userData = [
    {id: 1, name:"john", age:"18", profession:"developer"},
    {id: 2, name:"jack", age:"20", profession:"developer"},
    {id: 3, name:"Karen", age:"19", profession:"admin"},
];

userData.map( function iterator(item){
    item.age = Number(item.age);
});

let dropdown = document.getElementById("profession");
let filterList = document.getElementById("filter-list");
let filterButton = document.getElementById("filter");

function filterByProfession(){
    filterList.innerHTML="";
    let dropdownValue = dropdown.value;
    console.log(dropdownValue);
    userData.forEach((item) =>{
        if(dropdownValue === "profession"){
            alert("Please select a profession");
            return;
        }
        if(item.profession === dropdownValue){
        let div = document.createElement("div");
        div.innerText = item.id + "  Name:" + item.name + "  Profession:" + item.profession + "  Age:" + item.age;
        result.append(div);
        }
    })

}
filterButton.addEventListener('click', filterByProfession)
