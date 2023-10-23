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

let freelancers = [
    { name: "Winston Smith", profession: "Records Officer", price: 150 },
    { name: "Lisbeth Salander", profession: "Hacker", price: 450 },
    { name: "Gabriel Oak", profession: "Shepherd", price: 205 }
]

// document.querySelector

// function generateFreelancerObj(){

// }

//initial array is rendered onto the page

let freelancerTable = document.querySelector("table");
console.log(freelancerTable);

for (let i = 0; i < freelancers.length; i++){
    let tr = `<tr><td>${freelancers[i].name}</td><td>${freelancers[i].profession}</td><td>${freelancers[i].price}</td></tr>`;
    freelancerTable.innerHTML += tr;
}


// let 