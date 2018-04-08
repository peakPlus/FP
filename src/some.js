const some = (arr, fn) => {
    let result = false
    for(let value of arr)
        result = result || fn(value)
    return result
}