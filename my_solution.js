function(s) {
    
    let longestLeng = 0
    for(let i = 0; i < s.length; i++){
        let subStr = s[i]
        
        let repeat = false
        let j = i + 1
        while(!repeat && j < s.length){
            if(subStr.includes(s[j])){
                repeat = true
            } else {
                subStr += s[j]
                j++
            }
        }
        longestLeng = Math.max(longestLeng, subStr.length)
    }

    return longestLeng
};
