const dialogs=[
"Hii! Hii! overhere! stop daydreaming and come to earth please!",
"Finally... i was starting to think that you`re ignoring me or something...oh,I haven`t introduced myself yet,My name is Komaeda Nagito.Nice to meet you.",
"I have heard from Kairo that today is your Birthday.I hope your day is filled with Hope and Happiness.",
"Promise me this,No matter what happens, You will never give up to despair ok?",
"as long as you have that hope inside yourself, i`m sure everything will be fine.",
 "so once again,Happy Birthday Isa!" 
];


const images =[
"/images/Nagito1.png",
"/images/Nagito2.png",
"/images/Nagito3.png",
"/images/Nagito4.png",
"/images/Nagito5.png",
"/images/Nagito2.png",
]
let Index = 0
window.onload= function(){
 document.getElementById('dialog').innerText=dialogs[Index];
}
function nextDialog(){
    Index =(Index+1)% dialogs.length;
    document.getElementById('dialog').innerText= dialogs[Index];
    document.getElementById('character-img').src=images[Index];

}
