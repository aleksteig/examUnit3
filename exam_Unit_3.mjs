import fetch from "node-fetch";

async function interactionWithAPI(endpoint, method, body = null, expectHtml = false) {
    const response = await fetch(`https://alchemy-kd0l.onrender.com${endpoint}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: method !== 'GET' && body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    if(expectHtml){
        return await response.text();
    }

    return await response.json();
}

const PLAYER_NAME = "aleksandte@uia.no";
const USER_ANSWER1 = ["Gold", "Quicksilver", "Silver", "Iron", "Gold"];
const USER_ANSWER2 = "SILVER";
const USER_ANSWER3 = "☿♀🜍🜂🜔🜄☉🜁";
const USER_ANSWER4 = "Argon";

const alphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
]

const symbols = {
    "0": {
        symbol: "☉",
        planarBody: "sun",
        periodicElement: "Gold",
    },
    "1": {
        symbol: "☿",
        planarBody: "mercury",
        periodicElement: "Quicksilver",
    },
    "2": {
        symbol: "☽",
        planarBody: "moon",
        periodicElement: "Silver",
    },
    "3": {
        symbol: "♂",
        planarBody: "mars",
        periodicElement: "Iron",
    },
    "4": {
        symbol: "🜁",
        planarBody: "",
        periodicElement: "Air",
    },
    "5": {
        symbol: "🜃",
        planarBody: "",
        periodicElement: "Earth",
    },
    "6": {
        symbol: "🜂",
        planarBody: "",
        periodicElement: "Fire",
    },
    "7": {
        symbol: "🜄",
        planarBody: "",
        periodicElement: "Water",
    },
    "8": {
        symbol: "♀",
        planarBody: "venus",
        periodicElement: "Copper",
    },
    "9": {
        symbol: "♃",
        planarBody: "jupiter",
        periodicElement: "Tin",
    },
    "10": {
        symbol: "♄",
        planarBody: "saturn",
        periodicElement: "Lead",
    },
}

// console.table(symbols)

async function sendAnswer(answer){
    return interactionWithAPI(`/answer`, 'POST', {
        "player": PLAYER_NAME,
        "answer": answer,
    });
}

// Starting the challenge
async function startChallenge(){
    console.log(await interactionWithAPI(`/start?player=${PLAYER_NAME}`, 'GET'));
}

//startChallenge();

async function challenge1(){
    const challenge1 = {
        challenge: `Friend, we are close, I can taste success on the wind, we finally located Paracelsus lab, we will become rich beyond belief, we will rule. All that is needed is 
        cracking the access code, I have been looking at this for days and beyond the inkling that it is an alchemical formula I have no idea. 
        Can you give it a shoot and get us one step closer to the future that we deserve? This is the code “☉☿☽♂☉”, but what it encodes into is a mysteri. Pleace crack it.`
    }

    const data = challenge1.challenge;
    let isInAlphabet = 0;
    let filteredData = "";

    for(let i = 0; i < data.length; i++){
        let currentChar = data[i];
        for(let index = 0; index < alphabet.length; index++){
            if(currentChar.toLowerCase() == alphabet[index]){
                isInAlphabet += 1;
            }
        }
        if(isInAlphabet == 0 && currentChar != " " && currentChar != "," && currentChar != "." && currentChar != "?" && currentChar != "“" && currentChar != "”" && currentChar != "\n"){
            filteredData += currentChar;
        }
        isInAlphabet = 0;
    }

    let listOfMetals = [];
    let listOfSymbolsLength = Object.values(symbols).length;
    let filteredDataLength = filteredData.length

    for(let i = 0; i < filteredDataLength; i++){
        let currentChar = filteredData[i];
        for(let index = 0; index < listOfSymbolsLength; index++){
            let currentSymbol = Object.values(symbols[index].symbol).toString()
            if(currentChar == currentSymbol){
                listOfMetals.push(Object.values(symbols[index].periodicElement).toString().replaceAll(",", ""))
            }
        }
    }

    sendAnswer(listOfMetals);

}

// challenge1();

async function challenge2(){
    const challenge2 = {
        challenge: `Your work was examplary, unfortunatlyt it turnes out we where not as close as first belived. The code only gave us access to a note with a poem, the evil 
        bastard had dusted it with Berulium powder so several of our alcylots are nolonger among us. We must be more carefull in the future. 
        Anyways the poem read “Still flows the Icy Lethe, Veiling all ’neath Eldritch Rime.”, can you make anything of it?`
    }

    const data = challenge2.challenge;
    //console.log(data);

    let insidePoem = false;
    let charInAlphabetAndCapital = false;
    let secretMessage = "";

    for(let i = 0; i < data.length; i++){
        let currentChar = data[i];
        if(currentChar == "“"){
            insidePoem = true;
        } else if (currentChar == "”"){
            insidePoem = false;
        }
        if(insidePoem){
            for(let i = 0; i < alphabet.length; i++){
                if(currentChar == alphabet[i].toLocaleUpperCase()){
                    charInAlphabetAndCapital = true;
                } else {
                    charInAlphabetAndCapital = false;
                }
                if(charInAlphabetAndCapital){
                    secretMessage += currentChar;
                }
            }
        }
    }

    sendAnswer(secretMessage);
}

//challenge2();

async function challenge3(){
    
}