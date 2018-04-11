const curry = (fn) => 
    (firstArg) => 
        (secondArg) => 
            fn(firstArg, secondArg)