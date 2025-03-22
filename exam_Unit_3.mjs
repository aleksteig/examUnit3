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
const USER_ANSWER4 = "";

const symbols = {
    "symbol ☉": {
        "planar body": "sun",
        "periodic name": "Au",
        "periodic number": 79,
        "periodic element": "gold",
    },
    "symbol ☿": {
        "planar body": "mercury",
        "periodic name": "Hg",
        "periodic number": 80,
        "periodic element": "quicksilver/mercury",
    },
    "symbol ☽": {
        "planar body": "moon",
        "periodic name": "Ag",
        "periodic number": 47,
        "periodic element": "silver",
    },
    "symbol ♂": {
        "planar body": "mars",
        "periodic name": "Fe",
        "periodic number": 26,
        "periodic element": "iron",
    },
    
}

// console.table(symbols)

const start = await interactionWithAPI(`/start?player=${PLAYER_NAME}`, 'GET');

//console.log(start);

const clue1 = await interactionWithAPI(`/clue?player=${PLAYER_NAME}`, 'GET', null, true);

//console.log(clue1);

const answer1 = await interactionWithAPI(`/answer`, 'POST', {
    "player": PLAYER_NAME,
    "answer": USER_ANSWER1,
});

//console.log(answer1);

const answer2 = await interactionWithAPI(`/answer`, 'POST', {
    "player": PLAYER_NAME,
    "answer": USER_ANSWER2,
});

//console.log(answer2);

const answer3 = await interactionWithAPI(`/answer`, 'POST', {
    "player": PLAYER_NAME,
    "answer": USER_ANSWER3,
});

//console.log(answer3);

const answer4 = await interactionWithAPI(`/answer`, 'POST', {
    "player": PLAYER_NAME,
    "answer": USER_ANSWER4,
});

//console.log(answer4);