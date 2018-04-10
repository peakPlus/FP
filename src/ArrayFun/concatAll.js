const concatAll = (arr) => {
    let results = []
    for(let value of arr)
        results.push.apply(results, value)
    return results
}