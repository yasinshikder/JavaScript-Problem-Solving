function checkName(name) {

    if (typeof name !== 'string') {
        return "Invalid";
    }else{


    name = name.toLowerCase();
    const goodletters = ['a','y','i', 'e', 'o', 'u','w'];
    const lastChar = name[name.length - 1];
    

    for (let goodletter of goodletters) {
        if (lastChar === goodletter) {
            return "Good Name";
        }
    }
    return "Bad Name";
}
}


let name ="Rakiy";
console.log(checkName(name)); 



