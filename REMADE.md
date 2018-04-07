# **FP(函数式编程)-函数库**

[`unless`函数](#unless函数) 

[`times`函数](#times函数) 

[`every`函数](#every函数) 

[`some`函数](#some函数) 

# `unless`函数

### 参数
 1. `boolean`值
 2. `fn`函数

### 功能
**`unless`函数接收`2`个参数**

**当`predicate`为`fals`e时，调用`fn`函数**

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
**`times`函数接收两个参数**

**`times`函数会从0到`times`执行`for`循环，将每次循环的值传递给`fn`执行**

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
**`every`函数接受两个参数**

**`every`函数会遍历数组`arr`，当参数各项满足`fn`判断时，返回`true`，否则返回`false`**

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
**`every`函数接受`2`个参数**

**`every`函数会遍历数组`arr`，当参数任意一项满足`fn`判断时，返回`true`，否则返回`false`**

``` javascript
    const some = (arr, fn) => {
        let result = false
        for(let value of arr)
            result = result || fn(value)
        return result
    }
```