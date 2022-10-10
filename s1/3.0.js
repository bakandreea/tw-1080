const countAppearences = (s,c) => {
    let count = 0;
    for (const elem of s){
        if (elem === c){
            count++;
        }
    }
    return count;
}

console.log(countAppearences('a little cat', 'a'))
console.log(countAppearences('','a'))

const countAppearences2 = (s,c) => s.split(c).length
console.log(countAppearences('a little cat', 'a'))
console.log(countAppearences('','a'))