import fetch from "node-fetch";

async function interactionWithAPI(endpoint, method, body = null) {
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

    return await response.json();
}

const PLAYER_NAME = "aleksandte@uia.no";
const USER_ANSWER1 = 71257;

const start = await interactionWithAPI(`/start?player=${PLAYER_NAME}`, 'GET');

//console.log(start);

const answer1 = await interactionWithAPI(`/answer`, 'POST', {
    'player': PLAYER_NAME,
    'answer': USER_ANSWER1,
});

console.log(answer1);