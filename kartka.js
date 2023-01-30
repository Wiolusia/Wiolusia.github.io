import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom({
  "debug":"true"
});

loadSprite("tlo","balwan.png")

loadSprite("postac","gwiazdka1.png")

loadSprite("postac2","gwiazdka2.png")


loadSound("piosenka","slicznapanienka.mp3")

// add a piece of text at position (120, 80)
add([
    text("hello"),
    pos(120, 80),
]);

add([
    sprite("tlo"),
    pos(0,0)
]);

const postac = add([
 sprite("postac"),
 pos(100,100)   
]);

// add([
// sprite("postac2"),
// pos(150,100)
// ])

let pierwszy = true

let licznik = 0

loop(1, ()=>{

  if(pierwszy)

  {
    postac.use(sprite("postac2"))
    pierwszy=false
  }

  else
  
  {
    postac.use(sprite("postac"))
    pierwszy=true
  }


  //debug.log(licznik++)

})

onKeyPress("space", ()=>{
  play("piosenka")
})

// onUpdate(()=>{
//   wait(1,()=>{
//   if(pierwszy) postac.use(sprite("postac2"))
//   else postac.use(sprite("postac"))
//   pierwszy != pierwszy

//   })  

