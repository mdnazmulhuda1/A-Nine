/**
 * Json Stringify
 */

const devs = [
    {
        id : 4,
        Name : "Nazmul",
        Age : 24,
        Skill : "MERN"
    },
    {
        id : 4,
        Name : "Asraf",
        Age : 35,
        Skill : "IOS Devs"
    },
    {
        id : 4,
        Name : "AB. Rajjak",
        Age : 24,
        Skill : "MERN"
    },
    {
        id : 4,
        Name : "Asha",
        Age : 18,
        Skill : "AI"
    },
    {
        id : 4,
        Name : "Sobuj",
        Age : 24,
        Skill : "MERN"
    },
    {
        id : 4,
        Name : "Comola",
        Age : 19,
        Skill : "AI"
    },
    {
        id : 4,
        Name : "Akbor",
        Age : 24,
        Skill : "JS"
    },
    {
        id : 4,
        Name : "Sojib",
        Age : 20,
        Skill : "My SQL"
    },
    {
        id : 4,
        Name : "Ali Akbar",
        Age : 24,
        Skill : "IOS"
    },
    {
        id : 4,
        Name : "Nobita",
        Age : 24,
        Skill : "Animation"
    },
];


let data = `[{"id":4,"Name":"Nazmul","Age":24,"Skill":"MERN"},{"id":4,"Name":"Asraf","Age":35,"Skill":"IOS Devs"},{"id":4,"Name":"AB. Rajjak","Age":24,"Skill":"MERN"},{"id":4,"Name":"Asha","Age":18,"Skill":"AI"},{"id":4,"Name":"Sobuj","Age":24,"Skill":"MERN"},{"id":4,"Name":"Comola","Age":19,"Skill":"AI"},{"id":4,"Name":"Akbor","Age":24,"Skill":"JS"},{"id":4,"Name":"Sojib","Age":20,"Skill":"My SQL"},{"id":4,"Name":"Ali Akbar","Age":24,"Skill":"IOS"},{"id":4,"Name":"Nobita","Age":24,"Skill":"Animation"}]`;


console.log(JSON.stringify(devs));





/**
 * Json Parse
 */


 const devs2 = [
    {
        id : 4,
        Name : "Nazmul",
        Age : 24,
        Skill : "MERN"
    },
    {
        id : 4,
        Name : "Asraf",
        Age : 35,
        Skill : "IOS Devs"
    },
    {
        id : 4,
        Name : "AB. Rajjak",
        Age : 24,
        Skill : "MERN"
    },
    {
        id : 4,
        Name : "Asha",
        Age : 18,
        Skill : "AI"
    },
    {
        id : 4,
        Name : "Sobuj",
        Age : 24,
        Skill : "MERN"
    },
    {
        id : 4,
        Name : "Comola",
        Age : 19,
        Skill : "AI"
    },
    {
        id : 4,
        Name : "Akbor",
        Age : 24,
        Skill : "JS"
    },
    {
        id : 4,
        Name : "Sojib",
        Age : 20,
        Skill : "My SQL"
    },
    {
        id : 4,
        Name : "Ali Akbar",
        Age : 24,
        Skill : "IOS"
    },
    {
        id : 4,
        Name : "Nobita",
        Age : 24,
        Skill : "Animation"
    },
];


let data2 = `[{"id":4,"Name":"Nazmul","Age":24,"Skill":"MERN"},{"id":4,"Name":"Asraf","Age":35,"Skill":"IOS Devs"},{"id":4,"Name":"AB. Rajjak","Age":24,"Skill":"MERN"},{"id":4,"Name":"Asha","Age":18,"Skill":"AI"},{"id":4,"Name":"Sobuj","Age":24,"Skill":"MERN"},{"id":4,"Name":"Comola","Age":19,"Skill":"AI"},{"id":4,"Name":"Akbor","Age":24,"Skill":"JS"},{"id":4,"Name":"Sojib","Age":20,"Skill":"My SQL"},{"id":4,"Name":"Ali Akbar","Age":24,"Skill":"IOS"},{"id":4,"Name":"Nobita","Age":24,"Skill":"Animation"}]`;

console.log(JSON.parse(data2));