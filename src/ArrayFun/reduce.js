const reduce = (arr, fn, initialValue) => {
    let accumlator
    if (initialValue != undefined)
        accumlator = initialValue
    else
        accumlator = arr[0]
    if (initialValue === undefined)
        for (let i = 1, len = arr.length; i < len; i++)
            accumlator = fn(accumlator, arr[i])
    else
        for (let value of arr)
            accumlator = fn(accumlator, value)
    return [accumlator]
}