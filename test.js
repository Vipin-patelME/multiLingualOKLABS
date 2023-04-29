const arr = [23,20,10,5,9,90]

const total = ()=>{
    let total = 0;
    arr.map(e =>{
        total = e + total
    } )
    return total
}

console.log(total())