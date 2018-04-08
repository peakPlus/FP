const once = (fn) => {
    let done = false
    return  (rest) => {
        return done ?
            undefined :
            ((done = true), fn.apply(this, rest))
    }
}