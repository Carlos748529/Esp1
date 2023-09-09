const alph=
    "asdfghjklpoiutrwcbnmz!%&*/ABSGTREOELP+"

function clave(Length = 6){
    let result="";
    for(let i=0 ; i  <= length; i++){
        result += alph.charAt(Math.floor(Math.random() * alph.Length));
    }
    return result;
}

const pass = clave(6);
console.log(pass);
