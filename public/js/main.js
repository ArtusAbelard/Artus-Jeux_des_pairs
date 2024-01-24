let theback = document.querySelectorAll(".theback")
let btnrandom = document.querySelector("#btnrandom")
let cartes = document.querySelectorAll(".cartes")
let thecard = document.querySelectorAll(".thecard")

let classes= ["theback carte1","theback carte1","theback carte2","theback carte2","theback carte3","theback carte3","theback carte4","theback carte4"]
let choix =[]
let victoire =[]
   
    

btnrandom.addEventListener("click", ()=> {


    classes=classes.sort(() => Math.random() - 0.5);
    classes=classes.sort(() => Math.random() - 0.5);
    classes=classes.sort(() => Math.random() - 0.5);
    theback.forEach(element => {
        
        console.log(classes);
        element.classList=classes.pop()
        // element.setAttribute("data-card",+1)
        // console.log(element.getAttribute("data-card"));

    })
    classes= ["theback carte1","theback carte1","theback carte2","theback carte2","theback carte3","theback carte3","theback carte4","theback carte4"]

});


for (let index = 0; index < cartes.length; index++) {
    cartes[index].addEventListener("click", ()=>{
        // thecard[index].style.transform="rotateY(180deg)";
        thecard[index].classList.toggle("thecardrotate")
        console.log(thecard[index].style.transform);
        
        choix.push(theback[index].getAttribute("class"))
        console.log(choix);
        console.log(index);
        setTimeout(()=>{
            thecard[index].classList.toggle("thecardrotate")

        },2500)


        if (choix.length==2) {
                        
        
            console.log(choix[0]);
            console.log(choix[1]);

            if (choix[0]==choix[1]) {
                console.log(choix[0]);
                console.log(choix[1]);
                
                console.log("ewaaaa");
                victoire.push(choix[0])
                choix=[]
                console.log(victoire);
                thecard[index].classList.toggle("thecardrotate")
                // thecard[index].style.transform="rotateY(180deg)";

                
            }else{
                console.log("noooob");
                choix=[]
                // thecard[index].style.transform="rotateY(180deg)"
                // thecard[indexclic].style.transform=""
                
                
                
            }
            if (victoire.length==4) {
                alert("Bravo !!")
                victoire=[]
            }
        }
        })}

        

        


        // if (choix.length==2) {

        //     console.log(choix[0]);
        //     console.log(choix[1]);
        //     if (choix[0]==choix[1]) {
                
        //         console.log("ewaaaa");
        //         victoire.push(choix[0])
        //         choix=[]
        //         console.log(victoire);

                
        //     }else{
        //         console.log("noooob");
        //         choix=[]
        //         thecard[0].style.transform="";
        //         thecard[1].style.transform="";
        //         thecard[2].style.transform="";
        //         thecard[3].style.transform="";
        //         thecard[4].style.transform="";
        //         thecard[5].style.transform="";
        //         thecard[6].style.transform="";
        //         thecard[7].style.transform="";
        //     }
        //     if (victoire.length==4) {
        //         alert("Bravo !!")
        //         victoire=[]
        //     }                 }  
       




// mercistckoverflox




















    // let choix1=classes.pop()
    // console.log(choix1);
    
    // classes=classes.sort(() => Math.random() - 0.5);
    // let choix2=classes.pop()
    // console.log(choix2);
    
    // classes=classes.sort(() => Math.random() - 0.5);
    // let choix3=classes.pop()
    // console.log(choix3);

    // classes=classes.sort(() => Math.random() - 0.5);
    // let choix4=classes.pop()
    // console.log(choix4);

    // classes=classes.sort(() => Math.random() - 0.5);
    // let choix5=classes.pop()
    // console.log(choix5);

    // classes=classes.sort(() => Math.random() - 0.5);
    // let choix6=classes.pop()
    // console.log(choix6);

    // classes=classes.sort(() => Math.random() - 0.5);
    // let choix7=classes.pop()
    // console.log(choix7);

    // classes=classes.sort(() => Math.random() - 0.5);
    // let choix8=classes.pop()
    // console.log(choix8);
    


    // for (let index = 0; index < theback.length; index++) {
    //     console.log(theback[index]);
    //     let classes= ["theback carte1","theback carte1","theback carte2","theback carte2","theback carte3","theback carte3","theback carte4","theback carte4"]
    //     classes=classes.sort(() => Math.random() - 0.5);
    //     // console.log(classes);
    //     let choix=classes.pop()
    //     console.log(choix);






    
    // theback[index].className="theback carte1"
    // theback[index].className="theback carte1"
    // theback[index].className="theback carte2"
    // theback[index].className="theback carte2"
    // theback[index].className="theback carte3"
    // theback[index].className="theback carte3"
    // theback[index].className="theback carte4"
    // theback[index].className="theback carte4"
  




// let indexx=[0,1,2,3,4,5,6,7]
// indexx.forEach(element => {
//     console.log(element);
// });

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }
  
//   console.log(getRandomInt(7));
 

// let indexx=[0,1,2,3,4,5,6,7]

// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
//   }

// shuffle(indexx)
// console.log(indexx);
  
 
