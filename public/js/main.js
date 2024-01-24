let theback = document.querySelectorAll(".theback")
let btnrandom = document.querySelector("#btnrandom")

let classes= ["theback carte1","theback carte1","theback carte2","theback carte2","theback carte3","theback carte3","theback carte4","theback carte4"]
    classes=classes.sort(() => Math.random() - 0.5);
    
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
    


btnrandom.addEventListener("click", ()=> {

  
    // for (let index = 0; index < theback.length; index++) {
    //     console.log(theback[index]);
    //     let classes= ["theback carte1","theback carte1","theback carte2","theback carte2","theback carte3","theback carte3","theback carte4","theback carte4"]
    //     classes=classes.sort(() => Math.random() - 0.5);
    //     // console.log(classes);
    //     let choix=classes.pop()
    //     console.log(choix);

        
        
    // }})

    classes=classes.sort(() => Math.random() - 0.5);
    theback.forEach(element => {
        
        console.log(classes);
        element.classList=classes.pop()

        
    })
    classes= ["theback carte1","theback carte1","theback carte2","theback carte2","theback carte3","theback carte3","theback carte4","theback carte4"]

});


    
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
  
 
