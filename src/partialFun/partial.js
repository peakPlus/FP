const partial = (fn, ...args) => {
    return (...fullArgs) => {
        for (let i = 0, arg = 0; i < args.length && arg < fullArgs.length; i++) {
            if (args[i] === undefined) {
                args[i] = fullArgs[arg++]
            }
            return fn.apply(null, args)
        }
    }
}