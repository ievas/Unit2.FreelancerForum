//set interval, each 10 sek add a randomly selected freelancer name, profession, starting price to the dom from the arrays of freelancers
// update the average starting price


//I have to create arrays with info to select from

// name array

let nameArray = ["Liam", "Ethan", "Miguel", "Jayden", "Noah", "Benjamin", "Aiden", "Elijah", "Jackson", "Mateo", "Olivia", "Emma", "Sophia", "Ava", "Isabella", "Mia", "Harper", "Zoe", "Aaliyah", "Lily",
    "Sherlock Holmes", "Elizabeth Bennet", "Jay Gatsby", "Hester Prynne", "Atticus Finch", 
    "Ishmael", "Hannibal Lecter", "Jo March", "Holden Caulfield", "Captain Ahab", 
    "Jane Eyre", "Dorian Gray", "Silas Marner", "Jean Valjean", "Don Quixote", 
    "Hobbiton Baggins", "Robinson Crusoe", "Hercule Poirot", "Howard Roark", "Clarissa Dalloway", 
    "Arthur Dent", "Emma Woodhouse", "Tom Sawyer", "Philip Marlowe", "Daisy Miller"
];

let professionArray = ["Graphic Designer", "Web Developer", "Photographer", "Writer", "Illustrator", "Video Editor", "Digital Marketer", "Social Media Manager", "Voice Over Artist", "Tutor", "Translator", "Content Creator", "SEO Specialist", "Musician", "Virtual Assistant", "UX/UI Designer", "Software Developer", "Consultant", "Brand Strategist", "Data Analyst", "Private Detective", "Gentlewoman", "Businessman", "Seamstress", "Lawyer", 
"Sailor", "Psychiatrist", "Writer", "Student", "Whaling Captain", 
"Governess", "Aristocrat", "Opera Singer", "Factory Owner", "Knight-Errant", 
"Burglar", "Mariner", "Queen Consort", "Socialite", 
"Radio Broadcaster", "Adventurer", "American Heiress", "Duke", "Schoolmistress", "Mathematician"
];

//functions

//average Price

function avgPrice(arrOfObj){
    let sum = 0;
    for(obj of arrOfObj){
        sum += obj.price
    }
    return sum/arrOfObj.length;
}

// random Number
function randPrice() {
    return Math.floor(Math.random()* 579);
}

// random index

function randIdx(arr) {
    return Math.floor(Math.random()*(arr.length - 1));
}


function createNewObj(arr1, arr2){
    let newObj = {};
    newObj.name = arr1[randIdx(arr1)];
    newObj.profession = arr2[randIdx(arr2)]
    newObj.price = randPrice();
    return newObj;
}


//initial Freelancer obj

let freelancers = [
    { name: "Winston Smith", profession: "Records Officer", price: 150 },
    { name: "Lisbeth Salander", profession: "Hacker", price: 450 },
    { name: "Gabriel Oak", profession: "Shepherd", price: 205 }
]


//initial array is rendered onto the page

let freelancerTable = document.querySelector("table");

//takes an array of objects
function render(arr){
    for (let i = 0; i < arr.length; i++){
        // let tr = `<tr><td>${freelancers[i].name}</td><td>${freelancers[i].profession}</td><td>${freelancers[i].price}</td></tr>`;
        // freelancerTable.innerHTML += tr;
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.innerText = arr[i].name;
        tr.appendChild(td);
        let td2 = document.createElement("td");
        td2.innerText = arr[i].profession;
        tr.appendChild(td2);
        let td3 = document.createElement("td");
        td3.innerText = arr[i].price;
        tr.appendChild(td3);
        freelancerTable.appendChild(tr);
    }

    document.querySelector("#avg").innerText = `$ ${Math.round(avgPrice(freelancers))}`;
}

render(freelancers);








//setInterval calls render function  every 5sec

//creating this variable to pass it to clearInterval 
let freelancerInterval;
//creating a new array for random freelancers; I'll fix it latter to add to the original freelancers array instead;
let randomFreelancers = [];


function producingFreelancersInterval(){
    if (freelancerTable.childElementCount < 18){
        randomFreelancers.push(createNewObj(nameArray, professionArray));
        freelancers = [...freelancers, ...randomFreelancers];
       
        render(randomFreelancers);
        
        randomFreelancers = [];
    } else {
        clearInterval(freelancerInterval);
    }
}

freelancerInterval = setInterval(producingFreelancersInterval, 1000);



