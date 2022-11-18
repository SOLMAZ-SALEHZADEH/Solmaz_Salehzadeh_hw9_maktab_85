function filterRangeInPlace(arr,a,b){
    for(const [i,item] of arr.entries()){
        if(!(a<=item && item<=b) ){
            arr.splice(i,1)
        }
    }
    return arr
    }
    const arr = [5,3,8,1]
    let filtered = filterRangeInPlace(arr,1,4)
    console.log(filtered)
    console.log(arr)