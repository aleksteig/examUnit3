# examUnit3

# first challenge
challenge: 'Friend, we are close, I can taste success on the wind, we finally located Paracelsus lab, we will become rich beyond belief, we will rule. All that is needed is cracking the access code, I have been looking at this for days and beyond the inkling that it is an alchemical formula I have no idea. Can you give it a shoot and get us one step closer to the future that we deserve? This is the code “☉☿☽♂☉”, but what it encodes into is a mysteri. Pleace crack it.'

Links used:
https://en.wikipedia.org/wiki/Alchemical_symbol

Order of symbols:
Gold, Quicksilver, Silver, Iron, Gold
G(Q/M)SIG

Sun, Mercury, Moon, Mars, Sun
SMMMS

Connected to the 7 deadly sins?
Pride, Lust, Gluttony, Wrath, Pride
7, 1, 2, 5, 7


Philosopher's Stone process?
I thought it could mean the Philosopher's stone due to a combination of the meanings behind the planetary symbols as well as gold appearing twice, and since one of its meanings is
completion, it made sense

Symbols shown as weekdays?
sunday, wednesday, monday, tuesday, sunday
7, 3, 1, 2, 7th day of the week

Order of the "planets" in our solar system?
1, 2, 4, 5, 1

alchemical numbers?
79, 80, 47, 26, 79

Periodic letter?
AuHgAgFeAu
AHAFA

Chrysopoeia?
as it was connected to transmutation and the Philosopher's stone, it didn't feel too unreasonable

5 letter word
12341
Anima (soul, related to anemos meaning wind, which is related to one of the four basic elements)

Number order based on placement on a list of metallic calces picture from the alchemic symbols wikipedia page:
4447465044

Alloys of metal combined with Mercury:
Amalgam

Mercury sulfide:
Cinnabar

went through all of these links afterwards:
https://en.wikipedia.org/wiki/Alchemy
https://en.wikipedia.org/wiki/Philosopher%27s_stone#Creation
https://en.wikipedia.org/wiki/Magnum_opus_(alchemy)
https://en.wikipedia.org/wiki/Nigredo
https://en.wikipedia.org/wiki/Albedo_(alchemy)
https://en.wikipedia.org/wiki/Citrinitas
https://en.wikipedia.org/wiki/Rubedo
https://en.wikipedia.org/wiki/Paracelsus#
https://en.wikipedia.org/wiki/Planetary_symbols
https://en.wikipedia.org/wiki/Chrysopoeia
https://en.wikipedia.org/wiki/Transmutation
https://en.wikipedia.org/wiki/Cleopatra_the_Alchemist
https://en.wikipedia.org/wiki/Universal_solvent#:~:text=Universal%20solvent%20may%20refer%20to,to%20dissolve%20every%20other%20substance
https://en.wikipedia.org/wiki/Paracelsus#
https://en.wikipedia.org/wiki/Anima_and_animus

decided to go through and try to instead make the answers I put in into lists instead to see, and it worked with the first thing I answered prior

# second challenge
challenge: 'Your work was examplary, unfortunatlyt it turnes out we where not as close as first belived. The code only gave us access to a note with a poem, the evil bastard had dusted it with Berulium powder so several of our alcylots are nolonger among us. We must be more carefull in the future. Anyways the poem read “Still flows the Icy Lethe, Veiling all ’neath Eldritch Rime.”, can you make anything of it?'

Tried water, as it talks about something running still below something icy as well as Rime

Looked at the capital letters and realized that it says SILVER

# third challenge
Challenge: 'Damn it! The poem was just another step. I refuse to believe Paracelsus would leave us with nothing. There’s something in these words, some ancient wisdom we are failing to grasp. When we pored silver in to the next lock, we found another note, it is referencing an old alchemical codex hidden deep in the Bibliotheca Philosophica Hermetica. The archive is online now, but because most of our aclolyotes are down for the count we need your help. We know the book in question is “Chirurgische Bücher und Schrifften” it is reported to be written in 1618, but we belive it is older considering that our latest note from the past is older. This is a transcript of 
the note.\n' +
    '\n' +
    '\n' +
    '17 20   20 9 17 24 4 34   24 127 127 1 8 8   17 20   17 10 1   34 1 46 17   48 24 45 12 17 ,   4 34 9 45 17   17 10 1   2 20 23 38 45 12 24   2 20 23   17 10 1   2 20 45 23 17 10   1 12 1 38 1 34 17 ;   127 20 38 29 4 34 1   38 1 23 127 45 23 108 ,   127 20 9 9 1 23   24 34 131   8 45 12 2 45 23   20 48 1 23   10 1 24 17 ,   24 131 131   8 24 12 17   24 34 131   270 24 17 1 23 ,   4 34 2 45 8 1   5 20 12 131   17 10 23 20 45 5 10   24 4 23 '
    removed a 17 10 1 as it seemed illogical to be twice in a row and seemed like a spelling mistake

    'TO OBTAIN ACCESS TO THE NEXT VAULT, INBUT THE FORMULA FOR THE FOURTH ELEMENT; COMBINE MERCURY, COBBER AND SULFUR OVER HEAT, ADD SALT AND WATER, INFUSE GOLD THROUGH AIR'

1: 16, likely E
17: 16, likely T
20: 11, likely O
23: 11 likely R
24: 11 likely A
45: 9 likely U
34: 8 likely N
10: 8 likely H
2: 5 likely F
4: 5 likely I
8: 5 likely S
131: 5 likely D
9: 4 likely B
12: 4 likely L
38: 4 likely M
127: 3 likely C
5: 2 likely G
48: 2 likely V
29: 1 likely B
46: 1 likely X
108: 1 likely Y
270: 1 likely W

Solved the message through brute forcing different two letter words at the start as well as three letter words until I got the word "Element", which let me finish decoding the rest slowly, but surely

Following the previous challenges, I assumed that I had to send the named elements in the encrypted message, so I first sent them in a list based on the first challenge, then I made it into a string due to it saying "combine" which worked

# fourth challenge
Challenge: 'through Hidden experiments, the Observing Philosophers \n' +
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
    '🜄 🜂 ♄ 🜂 🜁 🜂 🜄 ☿ 🜁 ☽ ♂ ☽ ♄ ♃ 🜄 ♄ ♀ ♂ ☉ 🜄 ♂ ☽ ♀ ♂ ♀ ♃ ♄ 🜄 ♃\n'           +
    '🜂 ☿ 🜄 ♂ ♀ ♃ ♃ 🜄 ☉ ♂ ♃ 🜂 ♀ 🜂 🜃 🜁 ☉ 🜂 ♀ ♃ ♄ ☽ 🜂 ♂ ♄ ♂ ☉ 🜄 ☉\n'           +
    '🜁 🜄 🜂 ☉ ♃ 🜂 🜂 ☿ 🜁 ☿ ♂ ♀ ♂ ♂ ♃ ☽ ☉ 🜂 ☉ ☽ ☿ ♀ 🜂 🜁 ♄ ♂ 🜃 ☉ ♂\n'           +
    '☉ 🜂 🜁 ♃ 🜂 ☽ 🜄 ♀ 🜄 🜁 ♃ 🜂 🜂 ♂ 🜂 ♃ ☽ ☽ 🜂 ☉ 🜄 ☉ 🜁 ♀ 🜄 ♃ 🜄 ♂ ☉\n'               +
    '☽ ♄ 🜃 ♀ 🜄 ♃ 🜁 ♃ 🜃 🜂 🜂 🜂 🜂 ♄ 🜂 🜄 🜃 ♀ 🜁 🜁 🜂 🜃 ☽ 🜁 ☿ 🜂 🜂 ♂ ☽\n'                   +
    '☉ ♄ 🜁 ♄ ☿ ♄ ☉ ☉ ☽ ♄ ♀ ☉ 🜄 ♄ 🜁 ♂ ☿ ☿ 🜄 ♃ ♀ ☿ 🜃 ♂ ☿ ♀ ☽ ♀ 🜃\n'       +
    '☉ ☿ 🜁 🜂 ♂ ♀ 🜁 🜂 🜁 ☽ 🜂 ♀ ☉ 🜃 ♄ ♃ ♀ ☽ ☽ 🜄 ☉ ♃ 🜂 🜂 🜃 🜄 ♀ ☽ 🜄\n'              +
    '🜃 🜂 ♀ ♀ ☽ 🜃 ☿ ♃ 🜄 🜃 🜃 ☉ ♃ 🜁 ♄ 🜁 🜂 🜁 🜄 🜁 ☽ ♃ 🜂 ♀ 🜃 ☿ ☿ 🜁 🜃\n'                 +
    '☿ ♀ ♀ ☉ ♄ 🜄 ♂ ☽ ☉ ♀ ☿ 🜃 ☿ ♄ ♄ 🜂 🜁 🜃 ☽ ♃ ☿ ♃ ♃ ♂ ♄ ☉ 🜂 ☉ 🜁\n'        +
    '🜄 🜃 ☽ 🜄 ☿ ♀ ☿ 🜃 ☿ ☿ ♀ ☿ 🜁 ♀ ♄ ♄ 🜂 ♄ 🜃 ☽ ♂ ♀ ☿ ☽ ♃ ♂ ♄ ♄ 🜄\n'         +
    '🜃 🜂 🜁 ♄ ♂ ☽ ♀ 🜃 🜁 🜂 ♄ ☿ ☽ ☽ 🜄 🜁 🜃 ☉ ☉ ♄ ♂ ☽ ♃ 🜄 ♃ 🜃 ☿ ♃ ☿\n'            +
    '🜄 ♂ ♀ ♂ ♀ ♂ 🜄 ♀ ♂ 🜂 🜁 🜂 ♄ ☿ ☿ ☽ ♄ ♀ 🜄 ☽ ♂ 🜁 ♃ ☉ 🜄 🜁 🜂 ☉ ♃\n'           +
    '♄ ♀ ♄ ♀ 🜃 ♂ ♄ 🜂 ♃ 🜄 ♄ ♀ ☽ ♀ ☽ 🜂 🜃 ♂ ♃ 🜂 ♄ 🜂 ♂ ♃ 🜃 ♂ ♄ ☽ ♀\n'         +
    '🜄 ♄ ☽ ☉ 🜃 ☽ ☽ 🜂 ☽ ♀ 🜄 ☉ ♃ ♂ ♄ ♄ ☽ ♄ ☽ ♀ ♀ ♀ 🜄 ♃ 🜃 ♃ ♀ ♀ ♃\n'       +
    '♂ ☽ 🜃 🜄 ☉ ♀ 🜄 🜄 🜄 ☽ ♂ 🜂 ♃ ☽ 🜃 ♂ ♂ ♀ ☉ ☿ ♂ ♂ ☉ ☽ ☿ ☉ 🜃 🜁 ♀\n'          +
    '🜃 ♄ ♂ 🜂 ☽ ☿ 🜂 🜃 ☉ 🜂 ♄ 🜂 ☿ ♄ 🜃 🜃 ☉ 🜂 ♃ ☽ ☽ ♄ 🜂 ♄ 🜄 ☽ 🜂 ♂ ☿\n'             +
    '♃ 🜃 ♀ 🜃 🜁 ☽ ☉ ♃ 🜁 ☽ ♄ 🜄 🜄 ☽ 🜃 ♃ ☽ ☉ 🜂 ♃ ☉ 🜁 ☿ 🜃 ☉ 🜃 ☉ 🜄 ☉\n'             +
    '🜁 ♃ 🜁 ☉ ☽ ♄ 🜂 ♀ 🜂 ♃ ☽ ☽ ♃ ☽ ☽ 🜄 🜄 ♀ ☉ ♂ 🜃 ♂ ☉ 🜁 ☿ 🜂 🜃 ♀ ☉\n'           +
    '♂ 🜁 ☽ 🜄 ☿ ♃ 🜁 ☉ 🜂 ☽ ♂ 🜄 ♂ ♃ ♄ ♄ ☉ ♀ 🜂 ♄ ☿ ♄ ♀ 🜄 ☿ ♄ ☉ 🜄 🜄\n'          +
    '🜂 🜃 ☽ ☉ ☿ 🜂 ♂ ♃ ☿ ☉ ☿ ♄ ☉ ☿ 🜂 🜃 ♀ ☿ ♂ ♃ ♃ ♂ ☉ ♂ ☽ 🜃 🜃 ♂ ♄\n'        +
    '☽ 🜁 ☽ 🜁 ☉ ☿ ♄ ♂ ☉ ♂ ☉ ♂ 🜄 ♂ 🜄 ☽ 🜂 ♀ ♂ ☉ ♂ 🜃 ♀ ♃ ☉ ♀ ♃ 🜁 ☿\n'        +
    '🜄 ☉ 🜁 ♃ 🜁 ☽ ☿ ☉ ♂ 🜃 🜁 ☽ ☉ 🜃 ♀ ♃ ☉ ♄ ♀ ☿ ♀ 🜁 ♂ ♀ ♄ 🜁 ☽ ☉ ♃\n'         +
    '♄ ☿ ☽ 🜄 ☿ ☿ ♄ ♃ ♀ ☿ ♄ 🜂 🜄 ☿ ☿ ♃ ♂ 🜁 ♀ ☽ ☉ ☽ 🜁 🜄 🜃 🜄 ☿ ♀ ☿\n'         +
    '☉ ♂ ☽ ♄ 🜄 ♂ ♂ ☉ 🜂 ♃ ☽ ☉ ♄ ♀ 🜁 🜃 ♄ ♃ ☽ ♀ 🜂 ♂ ♃ ♃ 🜃 ☿ ☽ 🜃 ☉\n'        +
    '🜄 ♃ ☿ 🜁 ♃ ☿ ☿ ☿ 🜃 ♄ ♃ 🜁 🜄 ♂ ♂ ♃ 🜃 ♄ 🜁 ♀ 🜄 ♃ ☽ ♄ ♂ ♂ 🜂 ☽ ☉\n'          +
    '🜁 ♂ 🜂 🜂 🜂 🜁 🜃 🜂 ☿ ♀ 🜃 ♀ 🜃 ♀ ☽ ♃ ♀ ☿ ♄ ☉ 🜄 🜂 🜂 ♀ ☽ 🜂 🜂 ♃ 🜂\n'                +
    '🜄 ♃ ☉ 🜁 ♀ 🜃 ☿ ☿ ♀ ♄ 🜃 ♂ 🜂 ☿ ♃ ☉ ♀ ☉ 🜄 ☽ 🜃 ♀ ♀ ♄ ♃ ♀ 🜂 ☉ ☉\n'         +
    '☉ ☉ 🜂 ♂ 🜁 🜁 ♄ ☿ ♂ ☿ ☿ ☉ ☽ 🜃 ♀ ♄ ♃ ♀ ♀ 🜃 ♀ ♂ 🜁 ♂ 🜂 ♄ ☿ ☿ ♀\n'        +
    '☿ 🜄 ♄ ♃ ♄ ☽ ♃ ♀ ♃ 🜃 🜂 🜄 🜂 ☽ ☿ ☉ ☿ 🜂 ☽ 🜂 ♃ ♂ 🜄 🜃 ☿ ♄ ♄ ☽ 🜂'

I decided to write down all of the capital letters in the text and saw that it had the same amount of letters as the alphabet, which and all the letters were different, which made me think that the smaller text between the long verses and the symbols could be decrypted using this:

    'DNIS PNYYUR DNIS DNIS GLIXUR \n' +
    'UHRJT BURPQRF PNYYUR MLRU HLR \n' +
    'MLRU UHRJT IUHS UHRJT GLIXUR\n' +
    'LRNC DNIS GLIXUR VHJUR DNIS\n' +
    'PNYYUR MLRU DNIS LRNC IUHS\n' +
    'UHRJT PNYYUR PNYYUR JLC BURPQRF\n' +
    '\n' +

    HOPSUMDTLKWIBCNYERGJQXVZFA
    ABCDEFGHIJKLMNOPQRSTUVWXYZ

    'GOLD COPPER GOLD GOLD SILVER \n' +
    'EARTH MERCURY COPPER FIRE AIR \n' +
    'FIRE EARTH LEAD EARTH SILVER\n' +
    'IRON GOLD SILVER WATER GOLD\n' +
    'COPPER FIRE GOLD IRON LEAD\n' +
    'EARTH COPPER COPPER TIN MERCURY\n'

then I decided to write down all of the symbols and then make them into the same form as the text

Symbols: ☉, ♀, ☽, 🜃, ☿, 🜂, 🜁, ♄, ♂, 🜄, ♃

    '☉ ♀ ☉ ☉ ☽ \n' +
    '🜃 ☿ ♀ 🜂 🜁 \n' +
    '🜂 🜃 ♄ 🜃 ☽\n' +
    '♂ ☉ ☽ 🜄 ☉\n' +
    '♀ 🜂 ☉ ♂ ♄\n' +
    '🜃 ♀ ♀ ♃ ☿\n'

I then checked through to see if maybe I needed to look for a symbol that was different or unique compared to the little text
Then I thought that maybe I needed to count the amount of times the sequence appeared in the text to find the element from the periodic table I needed, but it had 34 lines down and didn't seem to repeat a lot of times

1st row has the order of it, 17th column includes almost all of the symbols as well, missing Iron on the fourth verse, with Lead blocking in between the 5th and 6th line then the Copper placed in the verse, followed by two consecutive Tin, Earth and then having the last three symbols being the last three in the verse.

Decided to try combining the number of the row and the column, as I couldn't find another row that was also equal to the verse, or a column that was closer, and then correspond it to the element on the periodic table to see if that can get me somewhere

The code seemed to crash and not give me the next question when I tried Argon, which makes me assume that it might be the right answer? but I don't think I found the answer in the way it was meant, so I'll try other methods

There is something messy with the question, as last time I got 34 lines of code, and this time I got 29 lines (talking only about the symbols);

'☉ ♀ ☉ ☉ ☽ 🜃 ☿ ♀ 🜂 🜁 🜂 🜃 ♄ 🜃 ☽ ♂ ☉ ☽ 🜄 ☉ ♀ 🜂 ☉ ♂ ♄ 🜃 ♀ ♀ ♃ ☿\n'          +
    '🜄 🜂 ♄ 🜂 🜁 🜂 🜄 ☿ 🜁 ☽ ♂ ☽ ♄ ♃ 🜄 ♄ ♀ ♂ ☉ 🜄 ♂ ☽ ♀ ♂ ♀ ♃ ♄ 🜄 ♃\n'           +
    '🜂 ☿ 🜄 ♂ ♀ ♃ ♃ 🜄 ☉ ♂ ♃ 🜂 ♀ 🜂 🜃 🜁 ☉ 🜂 ♀ ♃ ♄ ☽ 🜂 ♂ ♄ ♂ ☉ 🜄 ☉\n'           +
    '🜁 🜄 🜂 ☉ ♃ 🜂 🜂 ☿ 🜁 ☿ ♂ ♀ ♂ ♂ ♃ ☽ ☉ 🜂 ☉ ☽ ☿ ♀ 🜂 🜁 ♄ ♂ 🜃 ☉ ♂\n'           +
    '☉ 🜂 🜁 ♃ 🜂 ☽ 🜄 ♀ 🜄 🜁 ♃ 🜂 🜂 ♂ 🜂 ♃ ☽ ☽ 🜂 ☉ 🜄 ☉ 🜁 ♀ 🜄 ♃ 🜄 ♂ ☉\n'               +
    '☽ ♄ 🜃 ♀ 🜄 ♃ 🜁 ♃ 🜃 🜂 🜂 🜂 🜂 ♄ 🜂 🜄 🜃 ♀ 🜁 🜁 🜂 🜃 ☽ 🜁 ☿ 🜂 🜂 ♂ ☽\n'                   +
    '☉ ♄ 🜁 ♄ ☿ ♄ ☉ ☉ ☽ ♄ ♀ ☉ 🜄 ♄ 🜁 ♂ ☿ ☿ 🜄 ♃ ♀ ☿ 🜃 ♂ ☿ ♀ ☽ ♀ 🜃\n'       +
    '☉ ☿ 🜁 🜂 ♂ ♀ 🜁 🜂 🜁 ☽ 🜂 ♀ ☉ 🜃 ♄ ♃ ♀ ☽ ☽ 🜄 ☉ ♃ 🜂 🜂 🜃 🜄 ♀ ☽ 🜄\n'              +
    '🜃 🜂 ♀ ♀ ☽ 🜃 ☿ ♃ 🜄 🜃 🜃 ☉ ♃ 🜁 ♄ 🜁 🜂 🜁 🜄 🜁 ☽ ♃ 🜂 ♀ 🜃 ☿ ☿ 🜁 🜃\n'                 +
    '☿ ♀ ♀ ☉ ♄ 🜄 ♂ ☽ ☉ ♀ ☿ 🜃 ☿ ♄ ♄ 🜂 🜁 🜃 ☽ ♃ ☿ ♃ ♃ ♂ ♄ ☉ 🜂 ☉ 🜁\n'        +
    '🜄 🜃 ☽ 🜄 ☿ ♀ ☿ 🜃 ☿ ☿ ♀ ☿ 🜁 ♀ ♄ ♄ 🜂 ♄ 🜃 ☽ ♂ ♀ ☿ ☽ ♃ ♂ ♄ ♄ 🜄\n'         +
    '🜃 🜂 🜁 ♄ ♂ ☽ ♀ 🜃 🜁 🜂 ♄ ☿ ☽ ☽ 🜄 🜁 🜃 ☉ ☉ ♄ ♂ ☽ ♃ 🜄 ♃ 🜃 ☿ ♃ ☿\n'            +
    '🜄 ♂ ♀ ♂ ♀ ♂ 🜄 ♀ ♂ 🜂 🜁 🜂 ♄ ☿ ☿ ☽ ♄ ♀ 🜄 ☽ ♂ 🜁 ♃ ☉ 🜄 🜁 🜂 ☉ ♃\n'           +
    '♄ ♀ ♄ ♀ 🜃 ♂ ♄ 🜂 ♃ 🜄 ♄ ♀ ☽ ♀ ☽ 🜂 🜃 ♂ ♃ 🜂 ♄ 🜂 ♂ ♃ 🜃 ♂ ♄ ☽ ♀\n'         +
    '🜄 ♄ ☽ ☉ 🜃 ☽ ☽ 🜂 ☽ ♀ 🜄 ☉ ♃ ♂ ♄ ♄ ☽ ♄ ☽ ♀ ♀ ♀ 🜄 ♃ 🜃 ♃ ♀ ♀ ♃\n'       +
    '🜃 ♄ ♂ 🜂 ☽ ☿ 🜂 🜃 ☉ 🜂 ♄ 🜂 ☿ ♄ 🜃 🜃 ☉ 🜂 ♃ ☽ ☽ ♄ 🜂 ♄ 🜄 ☽ 🜂 ♂ ☿\n'             +
    '♃ 🜃 ♀ 🜃 🜁 ☽ ☉ ♃ 🜁 ☽ ♄ 🜄 🜄 ☽ 🜃 ♃ ☽ ☉ 🜂 ♃ ☉ 🜁 ☿ 🜃 ☉ 🜃 ☉ 🜄 ☉\n'             +
    '🜁 ♃ 🜁 ☉ ☽ ♄ 🜂 ♀ 🜂 ♃ ☽ ☽ ♃ ☽ ☽ 🜄 🜄 ♀ ☉ ♂ 🜃 ♂ ☉ 🜁 ☿ 🜂 🜃 ♀ ☉\n'           +
    '♂ 🜁 ☽ 🜄 ☿ ♃ 🜁 ☉ 🜂 ☽ ♂ 🜄 ♂ ♃ ♄ ♄ ☉ ♀ 🜂 ♄ ☿ ♄ ♀ 🜄 ☿ ♄ ☉ 🜄 🜄\n'          +
    '🜂 🜃 ☽ ☉ ☿ 🜂 ♂ ♃ ☿ ☉ ☿ ♄ ☉ ☿ 🜂 🜃 ♀ ☿ ♂ ♃ ♃ ♂ ☉ ♂ ☽ 🜃 🜃 ♂ ♄\n'        +
    '☽ 🜁 ☽ 🜁 ☉ ☿ ♄ ♂ ☉ ♂ ☉ ♂ 🜄 ♂ 🜄 ☽ 🜂 ♀ ♂ ☉ ♂ 🜃 ♀ ♃ ☉ ♀ ♃ 🜁 ☿\n'        +
    '🜄 ☉ 🜁 ♃ 🜁 ☽ ☿ ☉ ♂ 🜃 🜁 ☽ ☉ 🜃 ♀ ♃ ☉ ♄ ♀ ☿ ♀ 🜁 ♂ ♀ ♄ 🜁 ☽ ☉ ♃\n'         +
    '♄ ☿ ☽ 🜄 ☿ ☿ ♄ ♃ ♀ ☿ ♄ 🜂 🜄 ☿ ☿ ♃ ♂ 🜁 ♀ ☽ ☉ ☽ 🜁 🜄 🜃 🜄 ☿ ♀ ☿\n'         +
    '☉ ♂ ☽ ♄ 🜄 ♂ ♂ ☉ 🜂 ♃ ☽ ☉ ♄ ♀ 🜁 🜃 ♄ ♃ ☽ ♀ 🜂 ♂ ♃ ♃ 🜃 ☿ ☽ 🜃 ☉\n'        +
    '☉ ♂ ☽ ♄ 🜄 ♂ ♂ ☉ 🜂 ♃ ☽ ☉ ♄ ♀ 🜁 🜃 ♄ ♃ ☽ ♀ 🜂 ♂ ♃ ♃ 🜃 ☿ ☽ 🜃 ☉\n'        +
    '🜄 ♃ ☿ 🜁 ♃ ☿ ☿ ☿ 🜃 ♄ ♃ 🜁 🜄 ♂ ♂ ♃ 🜃 ♄ 🜁 ♀ 🜄 ♃ ☽ ♄ ♂ ♂ 🜂 ☽ ☉\n'          +
    '🜁 ♂ 🜂 🜂 🜂 🜁 🜃 🜂 ☿ ♀ 🜃 ♀ 🜃 ♀ ☽ ♃ ♀ ☿ ♄ ☉ 🜄 🜂 🜂 ♀ ☽ 🜂 🜂 ♃ 🜂\n'                +
    '☉ ♂ ☽ ♄ 🜄 ♂ ♂ ☉ 🜂 ♃ ☽ ☉ ♄ ♀ 🜁 🜃 ♄ ♃ ☽ ♀ 🜂 ♂ ♃ ♃ 🜃 ☿ ☽ 🜃 ☉\n'        +
    '🜄 ♃ ☿ 🜁 ♃ ☿ ☿ ☿ 🜃 ♄ ♃ 🜁 🜄 ♂ ♂ ♃ 🜃 ♄ 🜁 ♀ 🜄 ♃ ☽ ♄ ♂ ♂ 🜂 ☽ ☉\n'          +
    '☉ ♂ ☽ ♄ 🜄 ♂ ♂ ☉ 🜂 ♃ ☽ ☉ ♄ ♀ 🜁 🜃 ♄ ♃ ☽ ♀ 🜂 ♂ ♃ ♃ 🜃 ☿ ☽ 🜃 ☉\n'        +
    '🜄 ♃ ☿ 🜁 ♃ ☿ ☿ ☿ 🜃 ♄ ♃ 🜁 🜄 ♂ ♂ ♃ 🜃 ♄ 🜁 ♀ 🜄 ♃ ☽ ♄ ♂ ♂ 🜂 ☽ ☉\n'          +
    '🜁 ♂ 🜂 🜂 🜂 🜁 🜃 🜂 ☿ ♀ 🜃 ♀ 🜃 ♀ ☽ ♃ ♀ ☿ ♄ ☉ 🜄 🜂 🜂 ♀ ☽ 🜂 🜂 ♃ 🜂\n'                +
    '☉ ☉ 🜂 ♂ 🜁 🜁 ♄ ☿ ♂ ☿ ☿ ☉ ☽ 🜃 ♀ ♄ ♃ ♀ ♀ 🜃 ♀ ♂ 🜁 ♂ 🜂 ♄ ☿ ☿ ♀\n'        +
    '☿ 🜄 ♄ ♃ ♄ ☽ ♃ ♀ ♃ 🜃 🜂 🜄 🜂 ☽ ☿ ☉ ☿ 🜂 ☽ 🜂 ♃ ♂ 🜄 🜃 ☿ ♄ ♄ ☽ 🜂'

# started programming for the solutions

# Challenge 1 (programmed order)
Put all the symbols that I'll need in a universal const
Made an alphabet const
Added a const of the challenge text and used that to solve the task, as the get function didn't want to get the challenge itself after one try, and didn't want to send me any other challenge except for the first challenge
Added a loop to check if part of the text was in the alphabet, and not anything but the symbols
Made a list to push the translated name for each of these symbols then sent that in as the answer

# Challenge 2 (programmed order)
Also made a challenge const for this one
Made a checker for whether inside poem or not for a for loop
Used the for loop to specifically check if the position of the current index was a capital letter once inside the poem, then appended that to the secretMessage variable and sent that as the answer

# Challenge 3 (programmed order)
Same thing with challenge const
Had to use my own numberToLetter decoder, as the book we were given to try to decode it with, didn't fully work or translate it correctly
Made a small for loop to get the numbers separately
Made a for loop that adds numbers that are strings and parses them to check which number they are (only parses and after it has gotten the full number due to the i+1 condition having to not be a number)
after getting the number, it correctly adds the according letter to a new variable which becomes the sentence. Spaces get added according to triple spaces in the original text.
Then I make a list where each word is an item
Then we have another for loop that checks the current item in said list and appends the corresponding symbol to a new variable, which becomes the final answer that I submit.

# Challenge 4 (programmed order)

This challenge was also added as a const, due to being unable to fully fetch it and use it as data.

I started by making a for loop that separates the three parts into three different variables to make it easier to work with
Then I made a for loop that checks for capital letters in the first text and appends it to a new variable to get the "Alphabet" that I needed for the next part
Then I made a for loop that goes through the "GOLD COPPER GOLD GOLD" etc verse and translated it to said "GOLD COPPER" etc
Then I made a for loop that separates the words and adds them to a list
Then I individually translated them to their corresponding symbol through the use of a for loop
Then I started making one list each for the column symbols and the row symbols, so that I could use a for loop to check the rows/columns and in which index position they were similar for
Then I made a periodic table dictionary that I then took out the numbers from to compare to the sum of the row and column number that added up
And finally I set a variable to the periodic element that corresponded with the number I mentioned earlier

Unfortunately as there was something wrong with the triangle symbols, as you can see from my attempt at making the first column 
(the following text is what was supposed to be the first column):

'♀☉☉☽🜃🜃🜃🜃🜃🜃🜃🜃🜃🜃🜃🜃🜃'             ,  '☿♀🜂🜂🜂🜂🜂🜂🜂🜂🜂🜂🜂🜂🜂🜁'              ,    '🜁🜁🜁🜁🜁🜁🜁🜁🜁🜁🜁🜁🜂🜂🜂'               ,
  '🜂🜂🜂🜂🜂🜂🜂🜂🜂🜂🜃🜃🜃🜃🜃'               ,    '🜃🜃🜃🜃🜃🜃🜃🜃♄🜃🜃🜃🜃🜃🜃🜃'               ,    '🜃🜃🜃🜃🜃🜃☽♂☉☽🜄🜄🜄🜄🜄🜄🜄'             ,
  '🜄🜄🜄🜄🜄🜄☉♀🜂🜂🜂🜂🜂🜂🜂🜂'              ,   '🜂🜂🜂🜂🜂☉♂♄🜃🜃🜃🜃🜃🜃🜃🜃🜃'              ,   '🜃🜃🜃🜃♀♀♃☿

and as the triangles didn't want to cooperate with me and were being read as '\ud83d\udf03', '\ud83d\udf04' etc, It was being counted as more than one character under some circumstances, and as I'm sick I don't have time to try to find another solution so my final solution will unfortunately not have the solution fully programmed.

# the end