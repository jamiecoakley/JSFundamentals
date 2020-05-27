//OBJECTS

let netflix = {
    id: 9,
    name: 'Super Store',
    season1: {
        seasonInfo: {
            episodeInfo: [ //each of these episodes will be an array
                {episode: 1, episodeName: 'Pilot'},
                {episode: 2, episodeName: 'MagazineProfile'},
                {episode: 3, episodeName: 'Shots and Salsa'},
                {episode: 4, episodeName: 'Mannequin'},
                {episode: 5, episodeName: 'Shoplifter'},
                {episode: 6, episodeName: 'Secret Shopper'},
                {episode: 7, episodeName: 'Color Wars'},
                {episode: 8, episodeName: 'Wedding Day Sale'},
                {episode: 9, episodeName: 'All Nighter'},
                {episode: 10, episodeName: 'Demotion'},
                {episode: 11, episodeName: 'Labor'}
                ]
            }
        },
        season2: {},
        season3: {}
    }

    console.log(netflix);
    /* {    id: 9,
            name: 'Super Store',
            season1: {seasonInfo: { episodeInfo: [Array] } },
            season2: {},
            season3: {} }   */
    console.log(netflix.season1);
    /*  { seasonInfo:
            { episodeInfo:
            [ [Object], [Object],
              [Object], [Object],
              [Object], [Object],
              [Object], [Object],
              [Object], [Object],
              [Object] 
            ] 
        } 
    }    */
    console.log(netflix.season1.seasonInfo); //everything from season1
    console.log(netflix.season1.seasonInfo.episodeInfo[3]); // { episode: 4, episodeName: 'Mannequin' }
    console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName); //Mannequin - use . and [] to narrow down information

//Pick an episode to log in the terminal
//Using dot notation, walk through the Netflix object and print off both the episode number and the episode name
console.log(netflix.season1.seasonInfo.episodeInfo[6].episode, netflix.season1.seasonInfo.episodeInfo[6].episodeName);


//JSON = JavaScript Object Notation - everything but booleans and numbers in quotes
json object:
varjson= {
"workbench.colorTheme":"One Dark+ (Sublime)",
"window.zoomLevel":3,
"files.exclude": {
"**/.git":true,
"**/.DS_Store":true,
"**/*.js": {
"when":"$(basename).ts"
},
"**/*.js.map": {
"when":"$(basename)"
}
},
"editor.fontFamily":"Monaco, 'Courier New', monospace",
"editor.detectIndentation":false,
"editor.letterSpacing":0,
"editor.tabSize":2,
"files.autoSave":"off",
"editor.wordWrap":"on",
"extensions.ignoreRecommendations":true,
"[html]": {},
"files.associations": {
"*.html":"html",
"*.js":"javascriptreact"
},
"html.format.indentInnerHtml":true,
"editor.fontSize":11,
"liveServer.settings.donotShowInfoMsg":true,
"liveServer.settings.port":3500,
"[javascriptreact]": {}
}

//spacejam object:
let spaceJam = {
    toonSquad: {
        human:'Michael Jordan',
        rabbit1:'Bugs Bunny',
        rabbit2:'Lola Bunny',
        duck:'Daffy Duck',
        tDevil:'Tasmanian Devil',
        bird:'Tweety',
        cat:'Sylvester',
        pig:'Porky Pig'
    },
    monstars: {
        0:'Bupkus',
        1:'Bang',
        2:'Nawt',
        3:'Pound',
        4:'Blanko'
    },
    nbaPlayers: {
        phoenixSuns:'Charles Barkley',
        newJerseyNets:'Shawn Bradley',
        newYorkNicks:'Patrick Ewing',
        charlotteHornets1:'Larry Johnson',
        charlotteHornets2:'Muggsy Bogues'
    }
}

console.log(Object.keys(spaceJam)); [ 'toonSquad', 'monstars', 'nbaPlayers' ] //Object.keys returns an array consisting of the keys in our object
console.log(object.keys(spaceJam.toonSquad)); //(the animals in an array)
console.log(object.keys(spaceJam.toonSquad).toString()); //(the animals in a list separated by commas as opposed to listed in an array)

console.log(object.values(spaceJam)); //all of the items in array format
console.log(object.values(spaceJam.toonSquad)); //all of the character names

let garden = {
    vegetable: 'zucchini',
    flower: 'sunflower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}

console.log(garden.vegetable); //zucchini

let inc;
console.log(garden.inc); // let inc --> zucchini undefined
                         //let inc = vegetable --> zucchini zucchini
                         //let inc = fruit --> zucchini grape

let baking = {}
baking['zucchini'] = 'better make some bread!';
baking.bestKeyEver = 'corn bread!';

console.log(baking.zucchini); //beter make some bread!
console.log(baking.bestKeytEver); //corn bread!
console.log(baking[baking.bestKeyEver]); //better make some bread!

//show all of the values in the object:

let g = 'water';
Object.keys(garden).forEach(key => { //CAPITALIZE THE O IN OBJECT!! IT MATTERS!!!
    if (key == g) {
        console.log(garden[key]); //true
    }
})

/*How to play with this to make sense of it:
1. Convince yourself that that's an array
2. Convince yourself that forEach is using that array
3. Convince yourself that key is the keys and the garden object
4. Convince yourself that the code here is only going to run if the key that we're looking at matches water
5. Make sense of that console.log