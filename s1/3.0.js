const countAppearences = (s,c) => {
    let count = 0;
    for (const elem of s){
        if (elem === c){
            count++;
        }
    }
    return count;
}