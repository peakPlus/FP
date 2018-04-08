const memoized = (fn) => {
    let lookupTable = {}
    return (...rest) => lookupTable[rest] || (lookupTable[rest] = fn.apply(this, rest))
}