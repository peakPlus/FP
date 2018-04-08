# **FP(函数式编程)-函数库**

 - [`unless`函数](#unless函数) 

 - [`times`函数](#times函数) 

 - [`every`函数](#every函数) 

 - [`some`函数](#some函数) 

 - [`sortBy`函数](#sortBy函数) 

 - [`tap`函数](#tap函数) 

 - [`unary`函数](#unary函数) 

 - [`once`函数](#once函数) 

 - [`memoized`函数](#memoized函数) 
# `unless`函数

### 参数
 1. `boolean`值
 2. `fn`函数

### 功能
 - **`unless`函数接收`2`个参数**

 - **当`predicate`为`false`时，调用`fn`函数**

``` javascript
    const unless = (predicate, fn) => {
        if(!predicate)
            fn()
    }
```

# `times`函数

### 参数
 1. `number`类型
 2. `fn`函数

### 功能
 - **`times`函数接收两个参数**

 - **`times`函数会从0到`times`执行`for`循环，将每次循环的值传递给`fn`执行**

``` javascript
    const times = (times, fn) => {
        for (var i = 0; i < times; i++)
            fn(i)
    }
```

# `every`函数

### 参数
 1. `arr`数组
 2. `fn`函数

### 功能
 - **`every`函数接受两个参数**

 - **`every`函数会遍历数组`arr`，当参数各项满足`fn`判断时，返回`true`，否则返回`false`**

``` javascript
    const every = (arr, fn) => {
        let result = true
        for (let value of arr)
            result = result && fn(arr[value])
        return result
    }
```

# `some`函数

### 参数
 1. `arr`数组
 2. `fn`函数

### 功能
 - **`every`函数接受`2`个参数**

 - **`every`函数会遍历数组`arr`，当参数任意一项满足`fn`判断时，返回`true`，否则返回`false`**

``` javascript
    const some = (arr, fn) => {
        let result = false
        for(let value of arr)
            result = result || fn(value)
        return result
    }
```

# `sortBy`函数

### 参数
 1. 调用对象的一个`key`值
 2. `1`或者`-1`
### 功能
 - **`sortBy`函数会根据`property`来决定数组的`sort`方法根据那个`key`的值来排序**
 - **当`order`值为`1`时，从小到大排序，当`order`值为`-1`时，从大到小排序**
``` javascript
    const sortBy = (property, order) => {
        return (a, b) => {
            var result = (a[property] < b[property] ? -order :
                (a[property] > b[property]) ? order : 0)
            return result
        }
    }
    // 用法：
    const Person = [
        {
            name: 'yvyv',
            age: 19
        },
        {
            name: 'huahua',
            age: 18
        }
    ]
    console.log(Person.sort(sortBy('age', 1)))
    //输出：
        // 0: {name: "huahua", age: 18}
        // 1: {name: "yvyv", age: 19}
```

# `tap`函数

### 参数
 1. value
### 功能
 - **`tap`函数接受`value`参数并返回一个函数**
 - **该函数执行时，接受一个`fn`函数参数，将`value`传递给`fn`函数并执行，同时打印出去`value`**
### 使用场景
 - **当遍历一个数组对象，需要调试时，使用`tap`函数打印出所有的`value`并执行对应方法**
``` javascript
    const tap = (value) =>
    (fn) => (
        typeof fn === 'function' && fn(value),
        console.log(value)
    )
    // 用法：
    const arr = [1, 8, 3, 7, 2, 8, 2, 9]
    arr.forEach((i) => {
        tap(i)((i) => {
            // 函数具体
        })
    })
```

# `unary`函数

### 参数
 1. `fn`函数
### 功能
 - **`unary`函数接受`fn`函数并返回只接受`1`个参数的`fn`函数**
### 使用场景
 - **`Array.prototype.map`函数会给回调`callback`函数传递`3`个参数**
 1. `currentValue`：数组中正在处理的当前元素。
 2. `index`: 数组中正在处理的当前元素的索引。
 3. `array`: `map` 方法被调用的数组。
``` javascript
    const unary = (fn) => 
        fn.length === 1 ?
            fn :
            (arg) => fn(arg)

    console.log(['1', '2', '3'].map(parseInt))
    // 输出：[1, NAN, NAN]
    console.log(['1', '2', '3'].map(unary(parseInt)))
    // 输出：[1, 2, 3]
```

# `once`函数

### 参数
 1. `fn`函数
### 功能
 - **`once`函数接受`fn`函数并返回只能调用`1`次的`fn`函数，二次调用会返回`undefined`**
### 使用场景
 - **当只需要运行`1`次给定的函数时**
``` javascript
    const once = (fn) => {
        let done = false
        return (...rest) => {
            return done ?
                undefined :
                ((done = true), fn.apply(this, rest))
        }
    }
    const fn = once((a, b, c) => a + b + c)
    console.log(fn(1, 2, 3))//输出：6
    console.log(fn(1, 2, 3))//输出：undefined
```

# `memoized`函数

### 参数
 1. `fn`函数
### 功能
 - **`memoized`函数接受`fn`函数并返回`fn`函数**
 - **当`fn`函数接受的参数相同时，`memoized`内部的`lookupTable`对象会缓存`fn`执行结果，再次调用时，直接返回缓存，不执行`fn`函数**
### 使用场景
 - **当只需要运行`1`次给定的函数时**
``` javascript
    const memoized = (fn) => {
        let lookupTable = {}
        return (...rest) => lookupTable[rest] || (lookupTable[rest] = fn.apply(this, rest))
    }
    const fn = memoized((a, b) => a + b)
    console.log(fn(2, 5))// 输出：7
    console.log(fn(2, 5))// 输出：7
```