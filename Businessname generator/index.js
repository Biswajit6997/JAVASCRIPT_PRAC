/* Genearte a business name generator
    ADJECTIVE:
    creazy
    Amezing
    Fire

    Shop Name:
    Engine
    Foods
    Garments

    Another Word:
    Bros
    Limited
    Hub

 */

let range=Math.random()
let first,Secound,third;
if(range<0.33){
    first="creazy";

}
else if(range<0.66 && range>=0.33){
    first="Amezing"
}
else{
    first="Fire"
}

// generate Shop Name:


if(range<0.33){
    Secound="Engine";

}
else if(range<0.66 && range>=0.33){
    Secound="Foods"
}
else{
    Secound="Garments"
}

// generate the another word
if(range<0.33){
    third="Bros";

}
else if(range<0.66 && range>=0.33){
    third="Limited"
}
else{
    third="Hub"
}
console.log(`${first}:${Secound}:${third}`)