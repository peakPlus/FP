[unless方法](#unless方法) 

[times方法](#times方法) 

[every方法](#every方法) 

# unless方法

### 参数
 1. boolean值
 2. 函数方法名

### 功能
**unless方法接收两个参数**

**当predicate为false时，调用fn方法**

    const unless = (predicate, fn) => {
        if(!predicate)
            fn()
    }


# times方法

### 参数
 1. 数字类型
 2. 方法名

### 功能
**times方法接收两个参数**

**times方法会从0到times执行for循环，将每次循环的值传递给fn执行**

    const times = (times, fn) => {
        for (var i = 0; i < times; i++)
            fn(i)
    }

# every方法

### 参数
 1. 数组
 2. 方法

### 功能
**every方法接受两个参数**

**every方法会遍历数组arr，当参数各项满足fn判断时，返回true，否则返回false**

    const every = (arr, fn) => {
        let result = true
        for (let value of arr)
            result = result && fn(arr[value])
        return result
    }
