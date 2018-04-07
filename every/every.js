const every = (arr, fn) => {
    let result = true
    for (let value of arr)
        result = result && fn(arr[value])
    return result
}