
let name="max"
console.log(name);
let go="max"
let fast="max"
let time="max"
console.log(go);
let lives=3
let hp=document.getElementById("hp")
console.log(fast);
console.log(time);
let nickname="max"
console.log("player name: "+nickname);
console.log(nickname+" exp: 1000000000");
console.log(nickname+" place: 1");
let h1=document.getElementById("h1")
let p=document.getElementById("p")
let ok =document.getElementById("ok")
let  input=document.getElementById("input")
let secret=Math.floor(Math.random()*10+1)
let newGame=document.getElementById("newGame")
ok.onclick=function(event){
    // Чтобы не обновлялась страница
    event.preventDefault();
    console.log(input.value);
    if (input.value ==secret){
        console.log("victory");
        h1.innerHTML="you won"
        ok.disabled=true
        hp.innerHTML="🎆 🎆 🎆 🎆 🎆 "
    }
    else{
        console.log("false");
        lives=lives-1
        console.log(lives);
        hp.innerHTML="❤️".repeat(lives)
        if(secret>input.value){
            p.innerHTML="secret number is bigger"
       }else{
        p.innerHTML="secret number is smaller"
       }
        if(lives==0){
        ok.disabled=true
        hp.innerHTML="💀💀💀"
h1.innerHTML="you lose.secret number was:"+secret
        }
    }

}
newGame.onclick=function(event){
    event.preventDefault();
let max  ="max champion"
    console.log(max  );
    secret=Math.floor(Math.random()*10+1);
    h1.innerHTML="number quiz"
    hp.innerHTML="❤️❤️❤️"
    lives=3
    p.innerHTML="type your number and press  ok"
    ok.disabled=false
}
// 1. Если нажать на new game, то кнопка разблокируется и внизу появятся правила
// 2. Если игрок победил, то вместо сердечек поставить 5 эмодзи фейерверков