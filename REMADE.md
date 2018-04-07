# **FP(函数式编程)-函数库**

 - [`unless`函数](#unless函数) 

 - [`times`函数](#times函数) 

 - [`every`函数](#every函数) 

 - [`some`函数](#some函数) 

 - [`sortBy`函数](#sortBy函数) 

# `unless`函数

### 参数
 1. `boolean`值
 2. `fn`函数

### 功能
 - **`unless`函数接收`2`个参数**

 - **当`predicate`为`fals`e时，调用`fn`函数**

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

### 功能
 - **`sortBy`函数接受`1`个参数**

 - **`sortBy`函数会根据`property`来决定数组的`sort`方法根据那个`key`的值来排序**

``` javascript
    const sortBy = (property) => {
        return (a, b) => {
            var result = (a[property] < b[property] ? -1 :
                (a[property] > b[property]) ? 1 : 0)
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
    console.log(Person.sort(sortBy('age')))
    //输出：
        // 0: {name: "huahua", age: 18}
        // 1: {name: "yvyv", age: 19}
    
```