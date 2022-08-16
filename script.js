function snapCrackle (maxValue){
    let string = ""

    for (index = 1; index <= maxValue; index++){
        if (index % 2 !== 0 && index % 5 === 0){
            string = string + "SnapCrackle, "
        }else if (index % 5 === 0){
            string = string + "Crackle, "
        }else if (index % 2 !== 0){
            string = string + 'Snap, '
        }else{
            string = string + index + ", "
        }
    }
    return string
}
console.log(snapCrackle(30))