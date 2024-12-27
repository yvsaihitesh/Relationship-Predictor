const Name1 = document.getElementById("name1");
const Name2 = document.getElementById("name2");
const submitButton = document.getElementsByClassName("submit")[0];

//Slidetext 
const slidetext = document.getElementsByClassName("text")[0];
slidetext.style.visibility="hidden";

//Container to display relation
const relationDisplay = document.getElementsByClassName("display")[0];
relationDisplay.style.display="none";

//Creating button to tryagain
const playagainButton = document.createElement("button");
playagainButton.textContent="Try Again";
playagainButton.className="tryagain";


//Initializing variables that we use later
let num=0;
let relation;
let result;
let emoji;
let itemFalling=false;

//To Start all the functions on click on submit button
submitButton.addEventListener("click", () => {
    if(!itemFalling){
    removeCommonLetters();
    findRelation();
    showerTheScreen();
    dispalyRelation();
    blurAndDisableElements();
    }
});

//Function to remove common letters in the two names
const removeCommonLetters = () => {
    let array1 = Name1.value.toLowerCase().split('');
    let array2 = Name2.value.toLowerCase().split('');
    for(let i=0;i<array1.length;i++)
    {
        for(let j=0;j<array2.length;j++)
        {
            if(array2[j]==array1[i])
            {
                array1[i]="1";
                array2[j]="1";
            }
        }
    }
    for(let i=0;i<array1.length;i++)
    {
        if(array1[i]!=="1" && /^[a-z]$/.test(array1[i])){num++;}
    }
    for(let i=0;i<array2.length;i++)
    {
        if(array2[i]!=="1" && /^[a-z]$/.test(array2[i])){num++;}
    }
};

//Function that uses the flames logic to find the relation between them
const findRelation = () => {
    let flames = ["F","L","A","M","E","S"];
    let index = 0;
    while(flames.length > 1)
    {
        index = (index + num - 1) % flames.length;
        flames.splice(index,1);
    }
    relation = flames[0];
};

//Map to allote the correct emoji, matter, background-image and background color based on the relation
const relationMap = new Map([
    ["F",{emoji: "❤️", matter:`❤️ Relation between name1 and name2 may end up as best friends, creating countless memories and sharing an everlasting camaraderie!`, image:"friends.jpeg", color:"purple"}],
    ["L",{emoji: "💋", matter:`💋 Relation between name1 and name2 may end up as lovers, destined to share heartfelt moments and build a beautiful connection together!`, image:"lovers.jpeg", color:"rgb(220, 97, 118)"}],
    ["A",{emoji: "👀", matter:`👀 Relation between name1 and name2 may end up as a magnetic attraction, where curiosity and chemistry keep pulling you closer!`, image:"attraction.jpeg", color:"#E6E6FA"}],
    ["M",{emoji: "💍", matter:`💍 Relation between name1 and name2 may end up in marriage, a lifelong bond built on love, trust, and shared dreams!`, image:"marriage.jpeg", color:"rgb(70, 70, 215)"}],
    ["E",{emoji: "🔥", matter:`🔥 Relation between name1 and name2 may end up as enemies, igniting sparks of rivalry. But remember, even enemies have a story to tell!`, image:"enemies.jpeg", color:"red"}],
    ["S",{emoji: "👊", matter:`👊 Relation between name1 and name2 may end up as siblings, tied by an unbreakable bond of love, care, and occasional playful fights!`, image:"siblings.jpeg", color:"lightgreen"}],
]);

//Function to shower the screen with the related emojies
const showerTheScreen = () => {
    result=relationMap.get(relation);
        
    for(let i=0;i<100;i++)
    {
        const item=document.createElement("div");
        item.className="item";
        item.textContent=result.emoji;
        item.style.left=`${Math.random()*90}vw`;
        item.style.fontSize=`${Math.random()*30 +30}px`;
        item.style.animationDuration=`${Math.random()*3 + 3}s`;
        item.style.animationDelay=`${Math.random()*2}s`;
        document.body.appendChild(item);
        itemFalling=true;
        
    }
};

//Function to display the relation
const dispalyRelation = () => {
    relationDisplay.textContent=result.matter.replace("name1",Name1.value).replace("name2",Name2.value);
    relationDisplay.appendChild(playagainButton);
    document.body.style.background="none";
    document.body.style.backgroundImage=`url(${result.image})`;
    document.body.style.backgroundSize="contain";
    document.body.style.backgroundRepeat="no-repeat";
    document.body.style.backgroundPosition="center";
    document.body.style.backgroundColor=result.color;
    document.body.style.height="100vh";
    document.body.style.width="100vw";
    relationDisplay.style.display="flex";
    slidetext.style.visibility = "visible";
     
};

//To tryagain
playagainButton.addEventListener("click", () => {
    location.reload();
});

//Function to blur and disable remaining part
const blurAndDisableElements = () => {
    const elementsToBlur=document.querySelectorAll("body *:not(.display, .tryagain, .item, .text)");
    elementsToBlur.forEach(element => {
        element.style.filter="blur(100px)";
    });
    
    const disableElements=document.querySelectorAll("body *:not(.display, .tryagain, .item");
    disableElements.forEach(element => {
        element.style.pointerEvents="none";
    });
};