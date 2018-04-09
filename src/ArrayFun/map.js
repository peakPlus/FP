const map = (arr, fn) => {
    let results = []
    for (let value of arr)
        results.push(fn(value))
    return results
}