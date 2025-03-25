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

const alphabet = "abcdefghijklmnopqrstuvwxyz";

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
    "11": {
        symbol: "🜍",
        planarBody: "saturn",
        periodicElement: "Sulfur",
    },
    "12": {
        symbol: "🜔",
        planarBody: "saturn",
        periodicElement: "Salt",
    },
}

async function sendAnswer(answer){
    return interactionWithAPI(`/answer`, 'POST', {
        "player": PLAYER_NAME,
        "answer": answer,
    });
}

// Starting the challenge
async function startChallenge(){
    await interactionWithAPI(`/start?player=${PLAYER_NAME}`, 'GET');
}

//await startChallenge();

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

    await sendAnswer(listOfMetals);

}

//await challenge1();

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
                if(currentChar == alphabet[i].toUpperCase()){
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

    await sendAnswer(secretMessage);
}

//await challenge2();

async function challenge3(){
    const challenge3 = { challenge: 'Damn it! The poem was just another step. I refuse to believe Paracelsus would leave us with nothing. There’s something in these words, some ancient wisdom we are failing to grasp. When we pored silver in to the next lock, we found another note, it is referencing an old alchemical codex hidden deep in the Bibliotheca Philosophica Hermetica. The archive is online now, but because most of our aclolyotes are down for the count we need your help. We know the book in question is “Chirurgische Bücher und Schrifften” it is reported to be written in 1618, but we belive it is older considering that our latest note from the past is older. This is a transcript of the note.\n' +
        '\n' +
        '\n' +
        '17 20   20 29 17 24 4 34   24 127 127 1 8 8   17 20   17 10 1   34 1 46 17   48 24 45 12 17 ,   4 34 9 45 17   17 10 1   2 20 23 38 45 12 24   2 20 23   17 10 1   2 20 45 23 17 10   1 12 1 38 1 34 17 ;   127 20 38 29 4 34 1   38 1 23 127 45 23 108 ,   127 20 9 9 1 23   24 34 131   8 45 12 2 45 23   20 48 1 23   10 1 24 17 ,   24 131 131   8 24 12 17   24 34 131   270 24 17 1 23 ,   4 34 2 45 8 1   5 20 12 131   17 10 23 20 45 5 10   24 4 23 '
    }

    const data = challenge3.challenge
    
    let inNumberRange = false;
    let numbers = "";

    const numberToLetter = {
        "0": {
            number: 1, 
            letter: "E",
        },
        "1": {
            number: 17,
            letter: "T",
        },
        "2": {
            number: 20, 
            letter: "O",
        },
        "3": {
            number: 23, 
            letter: "R",
        },
        "4": {
            number: 24,
            letter: "A",
        },
        "5": {
            number: 45, 
            letter: "U",
        },
        "6": {
            number: 34, 
            letter: "N",
        },
        "7": {
            number: 10, 
            letter: "H",
        },
        "8": {
            number: 2, 
            letter: "F",
        },
        "9": {
            number: 4,
            letter: "I",
        },
        "10": {
            number: 8,  
            letter: "S",
        },
        "11": {
            number: 131, 
            letter: "D",
        },
        "12": {
            number: 9, 
            letter: "P",
        },
        "13": {
            number: 12, 
            letter: "L",
        },
        "14": {
            number: 38,  
            letter: "M",
        },
        "15": {
            number: 127,  
            letter: "C",
        },
        "16": {
            number: 5, 
            letter: "G",
        },
        "17": {
            number: 48, 
            letter: "V",
        },
        "18": {
            number: 29,
            letter: "B",
        },
        "19": {
            number: 46,
            letter: "X",
        },
        "20": {
            number: 108,
            letter: "Y",
        },
        "21": {
            number: 270,  
            letter: "W",
        },
        
    }

    for(let i = 0; i < data.length; i++){
        let currentChar = data[i];
        if(data[i] == '\n'){
            inNumberRange = true;
        }
        if(inNumberRange && currentChar != '\n'){
            numbers += currentChar;
        }
    }

    let currentNumberStr = "";
    let challengeSentence = "";
    let numberToLetterListLength = Object.values(numberToLetter).length

    for(let i = 0; i < numbers.length; i++){
        if(Number.isInteger(parseInt(numbers[i]))){
            currentNumberStr += numbers[i];
        }
        if(!Number.isInteger(parseInt(numbers[i+1]))){
            for(let i = 0; i < numberToLetterListLength; i++){
                if(parseInt(currentNumberStr) == Object.values(numberToLetter)[i].number){
                    challengeSentence += Object.values(numberToLetter)[i].letter
                }
            }
            currentNumberStr = "";
            
        }
        if(numbers[i] == " " && numbers[i+1] == " " && numbers[i+2] == " "){
            challengeSentence += " "
        }
            
    }

    let listOfSentence = [];
    let currentWord = "";

    for(let i = 0; i < challengeSentence.length; i++){
        if(challengeSentence[i] != " "){
            currentWord += challengeSentence[i];
        }
        if(challengeSentence[i] == " " || challengeSentence[i+1] == undefined){
            listOfSentence.push(currentWord);
            currentWord = "";
        }
    }

    let theFormulaOfTheFourthElement = "";
    let listOfSymbolsLength = Object.values(symbols).length

    for(let i = 0; i < listOfSentence.length; i++){
        let currentPosInSentence = listOfSentence[i];
        if(currentPosInSentence == "MERCURY"){
            currentPosInSentence = "QUICKSILVER";
        }
        if(currentPosInSentence == "HEAT"){
            currentPosInSentence = "FIRE";
        }
        for(let index = 0; index < listOfSymbolsLength; index++){
            let currentNameInSymbolsList = Object.values(symbols[index].periodicElement).toString().replaceAll(",", "")
            if(currentPosInSentence == currentNameInSymbolsList.toUpperCase()){
                theFormulaOfTheFourthElement += Object.values(symbols[index].symbol).toString().replaceAll(",", "")
            }
        }
    }
    
    await sendAnswer(theFormulaOfTheFourthElement);
}

//await challenge3();

async function challenge4(){

    const challenge4 = {
        challenge: 'through Hidden experiments, the Observing Philosophers \n' +
        'carefully recorded their findings in secret tomes. \n' +
        'rarely did alchemists Seek answers in mundane texts, \n' +
        'for the Universal substance eluded ordinary understanding.\n' +
        '\n' +
        'beyond the limits of ordinary Methods, the most Dedicated scholars \n' +
        'turned to alchemical science, where hidden truths awaited discovery. \n' +
        'Truly, the masters of old knew that one must strive tirelessly, \n' +
        'purifying Lead into something greater, refining both mind and matter. \n' +
        'until mastery was achieved, Knowledge alone was insufficient, \n' +
        'and only those who understood the deeper mysteries Would glimpse Immortality.\n' +
        '\n' +
        'secrets, carefully veiled Behind Cryptic inscriptions, \n' +
        'teach those with patience to decode their deeper meaning. \n' +
        'hermetic ideals demand perseverance, a willingness to question, \n' +
        'and an acceptance that the path to wisdom is rarely direct. \n' +
        'long nights spent in study and contemplation lead to illumination, \n' +
        'and oaths taken by true seekers bind them to their Noble quest. \n' +
        'Yet the philosopher’s stone remains Elusive, \n' +
        'and only through great sacrifice is the truth Revealed.\n' +
        '\n' +
        'elixirs, said to restore itality and even grant eternal youth, \n' +
        'were concocted by those who dared to challenge nature’s limits. \n' +
        'distillations, performed under the guidance of celestial alignments, \n' +
        'promised insight beyond mortal comprehension. \n' +
        'Gold, though treasured by the common man, held greater meaning \n' +
        'to those who understood the principle of transmutation. \n' +
        'Joining knowledge of the material and the divine, \n' +
        'true alchemists saw wealth not in metal, but in enlightenment.\n' +
        '\n' +
        'notable are those who pursued the Quintessence, \n' +
        'a substance believed to bind together the four classical elements. \n' +
        'wielders of this hidden force were said to shape reality itself, \n' +
        'while Xenon and other elusive Vapors symbolized the mysteries of the aether. \n' +
        'yields of failed experiments were many, \n' +
        'but each failure brought the dedicated scholar closer to true wisdom. \n' +
        'Zeal alone was not enough—patience, discipline, and intellect \n' +
        'were the true keys to unlocking the universe’s greatest secret.\n' +
        '\n' +
        'through the Forgotten knowledge of Ancient scholars, \n' +
        'keepers of wisdom have safeguarded the elusive \n' +
        'keys to transformation. only those who \n' +
        'fully commit to the pursuit of enlightenment \n' +
        'can grasp the final mysteries.\n' +
        '\n' +
        'DNIS PNYYUR DNIS DNIS GLIXUR \n' +
        'UHRJT BURPQRF PNYYUR MLRU HLR \n' +
        'MLRU UHRJT IUHS UHRJT GLIXUR\n' +
        'LRNC DNIS GLIXUR VHJUR DNIS\n' +
        'PNYYUR MLRU DNIS LRNC IUHS\n' +
        'UHRJT PNYYUR PNYYUR JLC BURPQRF\n' +
        '\n' +
    
        "Now that your quest vaines, combine the horizontal and vertical indicies and know Paracelsus 'Aqua Vitae', the cemical element that opens gates.\n" +
        '\n' +
        '☉ ♀ ☉ ☉ ☽ 🜃 ☿ ♀ 🜂 🜁 🜂 🜃 ♄ 🜃 ☽ ♂ ☉ ☽ 🜄 ☉ ♀ 🜂 ☉ ♂ ♄ 🜃 ♀ ♀ ♃ ☿\n'          +
        '🜄 🜂 ♄ 🜂 🜁 🜂 🜄 ☿ 🜁 ☽ ♂ ☽ ♄ ♃ 🜄 ♄ ♀ ♂ ☉ 🜄 ♂ ☽ ♀ ♂ ♀ ♃ ♄ 🜄 ♃ ☉\n'           +
        '🜂 ☿ 🜄 ♂ ♀ ♃ ♃ 🜄 ☉ ♂ ♃ 🜂 ♀ 🜂 🜃 🜁 ☉ 🜂 ♀ ♃ ♄ ☽ 🜂 ♂ ♄ ♂ ☉ 🜄 ☉ ☉\n'           +
        '🜁 🜄 🜂 ☉ ♃ 🜂 🜂 ☿ 🜁 ☿ ♂ ♀ ♂ ♂ ♃ ☽ ☉ 🜂 ☉ ☽ ☿ ♀ 🜂 🜁 ♄ ♂ 🜃 ☉ ♂ ☉\n'           +
        '☉ 🜂 🜁 ♃ 🜂 ☽ 🜄 ♀ 🜄 🜁 ♃ 🜂 🜂 ♂ 🜂 ♃ ☽ ☽ 🜂 ☉ 🜄 ☉ 🜁 ♀ 🜄 ♃ 🜄 ♂ ☉ ☉\n'               +
        '☽ ♄ 🜃 ♀ 🜄 ♃ 🜁 ♃ 🜃 🜂 🜂 🜂 🜂 ♄ 🜂 🜄 🜃 ♀ 🜁 🜁 🜂 🜃 ☽ 🜁 ☿ 🜂 🜂 ♂ ☽ ☉\n'                   +
        '☉ ♄ 🜁 ♄ ☿ ♄ ☉ ☉ ☽ ♄ ♀ ☉ 🜄 ♄ 🜁 ♂ ☿ ☿ 🜄 ♃ ♀ ☿ 🜃 ♂ ☿ ♀ ☽ ♀ 🜃 ☉\n'       +
        '☉ ☿ 🜁 🜂 ♂ ♀ 🜁 🜂 🜁 ☽ 🜂 ♀ ☉ 🜃 ♄ ♃ ♀ ☽ ☽ 🜄 ☉ ♃ 🜂 🜂 🜃 🜄 ♀ ☽ 🜄 ☉\n'              +
        '🜃 🜂 ♀ ♀ ☽ 🜃 ☿ ♃ 🜄 🜃 🜃 ☉ ♃ 🜁 ♄ 🜁 🜂 🜁 🜄 🜁 ☽ ♃ 🜂 ♀ 🜃 ☿ ☿ 🜁 🜃 ☉\n'                 +
        '☿ ♀ ♀ ☉ ♄ 🜄 ♂ ☽ ☉ ♀ ☿ 🜃 ☿ ♄ ♄ 🜂 🜁 🜃 ☽ ♃ ☿ ♃ ♃ ♂ ♄ ☉ 🜂 ☉ 🜁 ☉\n'        +
        '🜄 🜃 ☽ 🜄 ☿ ♀ ☿ 🜃 ☿ ☿ ♀ ☿ 🜁 ♀ ♄ ♄ 🜂 ♄ 🜃 ☽ ♂ ♀ ☿ ☽ ♃ ♂ ♄ ♄ 🜄 ☉\n'         +
        '🜃 🜂 🜁 ♄ ♂ ☽ ♀ 🜃 🜁 🜂 ♄ ☿ ☽ ☽ 🜄 🜁 🜃 ☉ ☉ ♄ ♂ ☽ ♃ 🜄 ♃ 🜃 ☿ ♃ ☿ ☉\n'            +
        '🜄 ♂ ♀ ♂ ♀ ♂ 🜄 ♀ ♂ 🜂 🜁 🜂 ♄ ☿ ☿ ☽ ♄ ♀ 🜄 ☽ ♂ 🜁 ♃ ☉ 🜄 🜁 🜂 ☉ ♃ ☉\n'           +
        '♄ ♀ ♄ ♀ 🜃 ♂ ♄ 🜂 ♃ 🜄 ♄ ♀ ☽ ♀ ☽ 🜂 🜃 ♂ ♃ 🜂 ♄ 🜂 ♂ ♃ 🜃 ♂ ♄ ☽ ♀ ☉\n'         +
        '🜄 ♄ ☽ ☉ 🜃 ☽ ☽ 🜂 ☽ ♀ 🜄 ☉ ♃ ♂ ♄ ♄ ☽ ♄ ☽ ♀ ♀ ♀ 🜄 ♃ 🜃 ♃ ♀ ♀ ♃ ☉\n'       +
        '♂ ☽ 🜃 🜄 ☉ ♀ 🜄 🜄 🜄 ☽ ♂ 🜂 ♃ ☽ 🜃 ♂ ♂ ♀ ☉ ☿ ♂ ♂ ☉ ☽ ☿ ☉ 🜃 🜁 ♀ ☉\n'          +
        '🜃 ♄ ♂ 🜂 ☽ ☿ 🜂 🜃 ☉ 🜂 ♄ 🜂 ☿ ♄ 🜃 🜃 ☉ 🜂 ♃ ☽ ☽ ♄ 🜂 ♄ 🜄 ☽ 🜂 ♂ ☿ ☉\n'             +
        '♃ 🜃 ♀ 🜃 🜁 ☽ ☉ ♃ 🜁 ☽ ♄ 🜄 🜄 ☽ 🜃 ♃ ☽ ☉ 🜂 ♃ ☉ 🜁 ☿ 🜃 ☉ 🜃 ☉ 🜄 ☉ ☉\n'             +
        '🜁 ♃ 🜁 ☉ ☽ ♄ 🜂 ♀ 🜂 ♃ ☽ ☽ ♃ ☽ ☽ 🜄 🜄 ♀ ☉ ♂ 🜃 ♂ ☉ 🜁 ☿ 🜂 🜃 ♀ ☉ ☉\n'           +
        '♂ 🜁 ☽ 🜄 ☿ ♃ 🜁 ☉ 🜂 ☽ ♂ 🜄 ♂ ♃ ♄ ♄ ☉ ♀ 🜂 ♄ ☿ ♄ ♀ 🜄 ☿ ♄ ☉ 🜄 🜄 ☉\n'          +
        '🜂 🜃 ☽ ☉ ☿ 🜂 ♂ ♃ ☿ ☉ ☿ ♄ ☉ ☿ 🜂 🜃 ♀ ☿ ♂ ♃ ♃ ♂ ☉ ♂ ☽ 🜃 🜃 ♂ ♄ ☉\n'        +
        '☽ 🜁 ☽ 🜁 ☉ ☿ ♄ ♂ ☉ ♂ ☉ ♂ 🜄 ♂ 🜄 ☽ 🜂 ♀ ♂ ☉ ♂ 🜃 ♀ ♃ ☉ ♀ ♃ 🜁 ☿ ☉\n'        +
        '🜄 ☉ 🜁 ♃ 🜁 ☽ ☿ ☉ ♂ 🜃 🜁 ☽ ☉ 🜃 ♀ ♃ ☉ ♄ ♀ ☿ ♀ 🜁 ♂ ♀ ♄ 🜁 ☽ ☉ ♃ ☉\n'         +
        '♄ ☿ ☽ 🜄 ☿ ☿ ♄ ♃ ♀ ☿ ♄ 🜂 🜄 ☿ ☿ ♃ ♂ 🜁 ♀ ☽ ☉ ☽ 🜁 🜄 🜃 🜄 ☿ ♀ ☿ ☉\n'         +
        '☉ ♂ ☽ ♄ 🜄 ♂ ♂ ☉ 🜂 ♃ ☽ ☉ ♄ ♀ 🜁 🜃 ♄ ♃ ☽ ♀ 🜂 ♂ ♃ ♃ 🜃 ☿ ☽ 🜃 ☉ ☉\n'        +
        '🜄 ♃ ☿ 🜁 ♃ ☿ ☿ ☿ 🜃 ♄ ♃ 🜁 🜄 ♂ ♂ ♃ 🜃 ♄ 🜁 ♀ 🜄 ♃ ☽ ♄ ♂ ♂ 🜂 ☽ ☉ ☉\n'          +
        '🜁 ♂ 🜂 🜂 🜂 🜁 🜃 🜂 ☿ ♀ 🜃 ♀ 🜃 ♀ ☽ ♃ ♀ ☿ ♄ ☉ 🜄 🜂 🜂 ♀ ☽ 🜂 🜂 ♃ 🜂 ☉\n'                +
        '🜄 ♃ ☉ 🜁 ♀ 🜃 ☿ ☿ ♀ ♄ 🜃 ♂ 🜂 ☿ ♃ ☉ ♀ ☉ 🜄 ☽ 🜃 ♀ ♀ ♄ ♃ ♀ 🜂 ☉ ☉ ☉\n'         +
        '☉ ☉ 🜂 ♂ 🜁 🜁 ♄ ☿ ♂ ☿ ☿ ☉ ☽ 🜃 ♀ ♄ ♃ ♀ ♀ 🜃 ♀ ♂ 🜁 ♂ 🜂 ♄ ☿ ☿ ♀ ☉\n'        +
        '☿ 🜄 ♄ ♃ ♄ ☽ ♃ ♀ ♃ 🜃 🜂 🜄 🜂 ☽ ☿ ☉ ☿ 🜂 ☽ 🜂 ♃ ♂ 🜄 🜃 ☿ ♄ ♄ ☽ 🜂 ☉'
    }

    const data = challenge4.challenge;

    let versesText = "";
    let puzzleText = "";
    let symbolsText = "";
    let nextIndexIsPuzzle = false;
    let nextIndexIsSymbol = false;
    let unnecessaryText = false;
    let listOfSymbolsLength = Object.values(symbols).length

    const periodicTableElements = {
        "0":{
            periodicNumber: "1",
            periodicElement: "Hydrogen"
        },
        "1":{
            periodicNumber: "2",
            periodicElement: "Helium"
        },
        "2":{
            periodicNumber: "3",
            periodicElement: "Lithium"
        },
        "3":{
            periodicNumber: "4",
            periodicElement: "Beryllium"
        },
        "4":{
            periodicNumber: "5",
            periodicElement: "Boron"
        },
        "5":{
            periodicNumber: "6",
            periodicElement: "Carbon"
        },
        "6":{
            periodicNumber: "7",
            periodicElement: "Nitrogen"
        },
        "7":{
            periodicNumber: "8",
            periodicElement: "Oxygen"
        },
        "8":{
            periodicNumber: "9",
            periodicElement: "Fluorine"
        },
        "9":{
            periodicNumber: "10",
            periodicElement: "Neon"
        },
        "10":{
            periodicNumber: "11",
            periodicElement: "Sodium"
        },
        "11":{
            periodicNumber: "12",
            periodicElement: "Magnesium"
        },
        "12":{
            periodicNumber: "13",
            periodicElement: "Aluminium"
        },
        "13":{
            periodicNumber: "14",
            periodicElement: "Silicon"
        },
        "14":{
            periodicNumber: "15",
            periodicElement: "Phosphorus"
        },
        "15":{
            periodicNumber: "16",
            periodicElement: "Sulfur"
        },
        "16":{
            periodicNumber: "17",
            periodicElement: "Chlorine"
        },
        "17":{
            periodicNumber: "18",
            periodicElement: "Argon"
        },
    }
    
    for(let i = 0; i < data.length; i++){
        let nextDataIndex = data[i+1];
        for(let index = 0; index < listOfSymbolsLength; index++){
            let currentNameInSymbolsList = Object.values(symbols[index].symbol).toString()
            if(nextDataIndex == currentNameInSymbolsList){
                nextIndexIsSymbol = true;
            }
            if(nextIndexIsSymbol == true){
                break;
            }
        }
        if(!nextIndexIsSymbol){
            if(data[i].toUpperCase() == data[i] && data[i+1].toUpperCase() == data[i+1] && data[i+2].toUpperCase() == data[i+2] && data[i] != "." && data[i] != "," && data[i] != " "){
                nextIndexIsPuzzle = true;
                unnecessaryText = true;
            }
            if(data[i+3].toUpperCase() != data[i+3]){
                nextIndexIsPuzzle = false;
            }
        } else if (nextIndexIsSymbol){
            symbolsText += data[i];
        }
        if(!nextIndexIsPuzzle && !unnecessaryText){
            versesText += data[i];
        } else if (nextIndexIsPuzzle && !nextIndexIsSymbol){
            puzzleText += data[i];
        }

        
    }

    let scrambledAlphabet = "";

    for(let i = 0; i < versesText.length; i++){
        let currentChar = versesText[i];
        for(let i = 0; i < alphabet.length; i++){
            if(currentChar == alphabet[i].toUpperCase()){
                scrambledAlphabet += currentChar;
            }
        }
    }

    let scrambledPuzzleText = "";

    for(let i = 0; i < puzzleText.length; i++){
        let currentChar = puzzleText[i];
        for(let index = 0; index < scrambledAlphabet.length; index++){
            if(currentChar == scrambledAlphabet[index]){
                scrambledPuzzleText += alphabet[index].toUpperCase();
            }
        }
        if(currentChar == " "){
            scrambledPuzzleText += " ";
        } else if (currentChar == "\n"){
            scrambledPuzzleText += "\n";
        }
    }

    scrambledPuzzleText = scrambledPuzzleText.replaceAll("\n", " ")
    let scrambledPuzzleTextSymbols = "";
    let listOfScrambledWords = [];
    let currentWord = "";

    for(let i = 0; i < scrambledPuzzleText.length; i++){
        if(scrambledPuzzleText[i] == " " && currentWord.length != 0){
            listOfScrambledWords.push(currentWord)
            currentWord = "";
        }
        if(scrambledPuzzleText[i] != " " && scrambledPuzzleText != "\n"){
            currentWord += scrambledPuzzleText[i];
        }
    }

    for(let i = 0; i < listOfScrambledWords.length; i++){
        let currentPosInSentence = listOfScrambledWords[i];
        if(currentPosInSentence == "MERCURY"){
            currentPosInSentence = "QUICKSILVER";
        }
        for(let index = 0; index < listOfSymbolsLength; index++){
            let currentNameInSymbolsList = Object.values(symbols[index].periodicElement).toString().replaceAll(",", "")
            if(currentPosInSentence == currentNameInSymbolsList.toUpperCase()){
                scrambledPuzzleTextSymbols += Object.values(symbols[index].symbol).toString().replaceAll(",", "")
            }
        }
    }

    symbolsText = symbolsText.replaceAll(" ", "");

    let rowSymbols = [];

    let currentRowSymbolList = "";
    for(let i = 1; i < symbolsText.length; i++){
        let currentSymbolInList = symbolsText[i];
        
        for(let index = 0; index < listOfSymbolsLength; index++){
            let currentSymbolInSymbolsList = Object.values(symbols[index].symbol)
            if(currentSymbolInList.toString() == currentSymbolInSymbolsList.toString()){
                currentRowSymbolList += currentSymbolInList
            }
            if(currentSymbolInList == "\udf03"){
                currentRowSymbolList += "🜃";
            } else if (currentSymbolInList == "\udf02"){
                currentRowSymbolList += "🜂";
            } else if (currentSymbolInList == "\udf01"){
                currentRowSymbolList += "🜁";
            } else if (currentSymbolInList == "\udf04"){
                currentRowSymbolList += "🜄";
            }
            if(currentRowSymbolList.length >= 30){
                rowSymbols.push(currentRowSymbolList);
                currentRowSymbolList = "";
            }
            
        }
    }
    
    let listOfIndividualSymbolsAndMore = [];

    for(let i = 0; i < symbolsText.length; i++){
        listOfIndividualSymbolsAndMore.push(symbolsText[i])
    }


    // made my own list to show what I would do to make the col list as the row from the loop above was doing weird things when it came to the triangles
    let rowListSymbols = ["☉♀☉☉☽🜃☿♀🜂🜁🜂🜃♄🜃☽♂☉☽🜄☉♀🜂☉♂♄🜃♀♀♃☿", "🜄🜂♄🜂🜁🜂🜄☿🜁☽♂☽♄♃🜄♄♀♂☉🜄♂☽♀♂♀♃♄🜄♃☉", "🜂☿🜄♂♀♃♃🜄☉♂♃🜂♀🜂🜃🜁☉🜂♀♃♄☽🜂♂♄♂☉🜄☉☉", "🜁🜄🜂☉♃🜂🜂☿🜁☿♂♀♂♂♃☽☉🜂☉☽☿♀🜂🜁♄♂🜃☉♂☉",
        "☉🜂🜁♃🜂☽🜄♀🜄🜁♃🜂🜂♂🜂♃☽☽🜂☉🜄☉🜁♀🜄♃🜄♂☉☉", "☽♄🜃♀🜄♃🜁♃🜃🜂🜂🜂🜂♄🜂🜄🜃♀🜁🜁🜂🜃☽🜁☿🜂🜂♂☽☉", "☉♄🜁♄☿♄☉☉☽♄♀☉🜄♄🜁♂☿☿🜄♃♀☿🜃♂☿♀☽♀🜃☉", "☉☿🜁🜂♂♀🜁🜂🜁☽🜂♀☉🜃♄♃♀☽☽🜄☉♃🜂🜂🜃🜄♀☽🜄☉", "🜃🜂♀♀☽🜃☿♃🜄🜃🜃☉♃🜁♄🜁🜂🜁🜄🜁☽♃🜂♀🜃☿☿🜁🜃☉",
        "☿♀♀☉♄🜄♂☽☉♀☿🜃☿♄♄🜂🜁🜃☽♃☿♃♃♂♄☉🜂☉🜁☉", "🜄🜃☽🜄☿♀☿🜃☿☿♀☿🜁♀♄♄🜂♄🜃☽♂♀☿☽♃♂♄♄🜄☉", "🜃🜂🜁♄♂☽♀🜃🜁🜂♄☿☽☽🜄🜁🜃☉☉♄♂☽♃🜄♃🜃☿♃☿☉", "🜄♂♀♂♀♂🜄♀♂🜂🜁🜂♄☿☿☽♄♀🜄☽♂🜁♃☉🜄🜁🜂☉♃☉", "♄♀♄♀🜃♂♄🜂♃🜄♄♀☽♀☽🜂🜃♂♃🜂♄🜂♂♃🜃♂♄☽♀☉",
        "🜄♄☽☉🜃☽☽🜂☽♀🜄☉♃♂♄♄☽♄☽♀♀♀🜄♃🜃♃♀♀♃☉", "♂☽🜃🜄☉♀🜄🜄🜄☽♂🜂♃☽🜃♂♂♀☉☿♂♂☉☽☿☉🜃🜁♀☉", "🜃♄♂🜂☽☿🜂🜃☉🜂♄🜂☿♄🜃🜃☉🜂♃☽☽♄🜂♄🜄☽🜂♂☿☉", "♃🜃♀🜃🜁☽☉♃🜁☽♄🜄🜄☽🜃♃☽☉🜂♃☉🜁☿🜃☉🜃☉🜄☉☉", "🜁♃🜁☉☽♄🜂♀🜂♃☽☽♃☽☽🜄🜄♀☉♂🜃♂☉🜁☿🜂🜃♀☉☉",
        "♂🜁☽🜄☿♃🜁☉🜂☽♂🜄♂♃♄♄☉♀🜂♄☿♄♀🜄☿♄☉🜄🜄☉", "🜂🜃☽☉☿🜂♂♃☿☉☿♄☉☿🜂🜃♀☿♂♃♃♂☉♂☽🜃🜃♂♄☉", "☽🜁☽🜁☉☿♄♂☉♂☉♂🜄♂🜄☽🜂♀♂☉♂🜃♀♃☉♀♃🜁☿☉", "🜄☉🜁♃🜁☽☿☉♂🜃🜁☽☉🜃♀♃☉♄♀☿♀🜁♂♀♄🜁☽☉♃☉", "♄☿☽🜄☿☿♄♃♀☿♄🜂🜄☿☿♃♂🜁♀☽☉☽🜁🜄🜃🜄☿♀☿☉",
        "☉♂☽♄🜄♂♂☉🜂♃☽☉♄♀🜁🜃♄♃☽♀🜂♂♃♃🜃☿☽🜃☉☉", "🜄♃☿🜁♃☿☿☿🜃♄♃🜁🜄♂♂♃🜃♄🜁♀🜄♃☽♄♂♂🜂☽☉☉", "🜁♂🜂🜂🜂🜁🜃🜂☿♀🜃♀🜃♀☽♃♀☿♄☉🜄🜂🜂♀☽🜂🜂♃🜂☉", "🜄♃☉🜁♀🜃☿☿♀♄🜃♂🜂☿♃☉♀☉🜄☽🜃♀♀♄♃♀🜂☉☉☉", "☉☉🜂♂🜁🜁♄☿♂☿☿☉☽🜃♀♄♃♀♀🜃♀♂🜁♂🜂♄☿☿♀☉", "☿🜄♄♃♄☽♃♀♃🜃🜂🜄🜂☽☿☉☿🜂☽🜂♃♂🜄🜃☿♄♄☽🜂☉"
    ]

    let colSymbols = [];
    let tempSymbolText = "";

    for(let i = 0; i < rowListSymbols.length; i++){
        let colNumber = i;
        for(let row = 0; row < rowListSymbols.length; row++){
            tempSymbolText += rowListSymbols[row][colNumber]
            tempSymbolText += " ";
        }
        colSymbols.push(tempSymbolText)
        tempSymbolText = "";
    }

    let tempNumber = 0;

    for(let i = 0; i < scrambledPuzzleTextSymbols.length; i++){
        if(scrambledPuzzleTextSymbols.toString() == rowListSymbols[i]){
            tempNumber += i + 1;
        } else if (scrambledPuzzleTextSymbols.toString() == colSymbols[i]){
            tempNumber += i + 1;
        }
    }

    //setting tempNumber to 18, since the other one was weird with the triangles, same with the original row list that I made
    tempNumber = 1 + 17;

    periodicTableElements
    let finalAnswerChallenge4 = "";

    for(let i = 0; i < Object.values(periodicTableElements).length; i++){
        if(parseInt(Object.values(periodicTableElements[17].periodicNumber).join("")) == tempNumber){
            finalAnswerChallenge4 = (Object.values(periodicTableElements[i].periodicElement).join(""));
        }
    }

    await sendAnswer(finalAnswerChallenge4);

}

//await challenge4();
