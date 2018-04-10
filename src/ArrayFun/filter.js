const filter = (arr, fn) => {
    let results = []
    for(const value of arr)
        (fn(value) ? results.push(value) : undefined)
    return results
}