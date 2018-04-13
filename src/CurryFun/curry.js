const curry = (fn) => {
    if (typeof fn !== 'function') {
        throw Error('Not a function')
    }
    const currideFn = (...args) => {
        if (args.length < fn.length) {
            return (...surplusArgs) => {
                return currideFn.apply(null, args.concat(surplusArgs))
            }
        }
        return fn.apply(null, args)
    }
    return currideFn
}