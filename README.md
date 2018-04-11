# **FP(函数式编程)-函数库**
**[`1.` 普通函数](#1-普通函数)**
 - [`unless`函数](#unless函数) 

 - [`times`函数](#times函数) 

 - [`every`函数](#every函数) 

 - [`some`函数](#some函数) 

 - [`sortBy`函数](#sortBy函数) 

 - [`tap`函数](#tap函数) 

 - [`unary`函数](#unary函数) 

 - [`once`函数](#once函数) 

 - [`memoized`函数](#memoized函数) 

**[`2.` 数组函数](#2-数组函数)**

 - [`forEach`函数](#foreach函数) 

 - [`map`函数](#map函数) 

 - [`filter`函数](#filter函数) 

 - [`concatAll`函数](#concatAll函数) 

 - [`reduce`函数](#reduce函数) 

 - [`zip`函数](#zip函数) 

**[`3.` 柯里化函数](#3-柯里化函数)**

 - [`curry`函数](#curry函数) 
---
# **1. 普通函数**

## `unless`函数

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
---
## `times`函数

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
---
## `every`函数

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
---
## `some`函数

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
---
## `sortBy`函数

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
---
## `tap`函数

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
---
## `unary`函数

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
---
## `once`函数

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
---
## `memoized`函数

### 参数
 1. `fn`函数
### 功能
 - **`memoized`函数接受`fn`函数并返回`fn`函数**
 - **当`fn`函数接受的参数相同时，`memoized`内部的`lookupTable`对象会缓存`fn`执行结果，再次调用时，直接返回缓存，不执行`fn`函数**
### 使用场景
 - **当函数计算过程过于复杂，需要缓存结果时**
``` javascript
    const memoized = (fn) => {
        let lookupTable = {}
        return (...rest) => lookupTable[rest] || (lookupTable[rest] = fn.apply(this, rest))
    }
    const fn = memoized((a, b) => a + b)
    console.log(fn(2, 5))// 输出：7
    console.log(fn(2, 5))// 输出：7
```
---
# **2. 数组函数**

## `forEach`函数

### 参数
 1. `arr`数组
 2. `fn`函数
### 功能
 - **`forEach`函数接受`arr`数组将`arr`数组的每`1`个`value`都传递给`fn`函数并调用**
### 使用场景
 - **仅需迭代数组时使用**
``` javascript
    const forEach = (arr, fn) => {
        for (let value of arr)
            fn(value)
    }
    let json = [
        {
            "address": "中国",
            "id": 1,
            "name": "Taki"
        },
        {
            "address": "Japan",
            "id": 2,
            "name": "DSM"
        }]
    forEach(json, (value) => console.log({
        address: value.address,
        name: value.name
    }))
    // 输出：{address: "中国", name: "Taki"}
    // 输出：{address: "Japan", name: "DSM"}
```
---
## `map`函数

### 参数
 1. `arr`数组
 2. `fn`函数
### 功能
 - **`map`函数接受`arr`数组将`arr`数组的每`1`个`value`都传递给`fn`函数并调用**
 - **`fn`的函数返回值将会依次保存进`1`个新数组，新数组由`map`函数返回**
### 使用场景
 - **迭代数组生成新数组**
``` javascript
    const map = (arr, fn) => {
        let results = []
        for (let value of arr)
            results.push(fn(value))
        return results
    }
    let json = [
        {
            "address": "中国",
            "id": 1,
            "name": "Taki"
        },
        {
            "address": "Japan",
            "id": 2,
            "name": "DSM"
        }]
    console.log(map(json, (value) => {
        return {
            address: value.address,
            name: value.name
        }
    }))
    // 输出：[{
    //         address: "中国", name: "Taki"
    //     }, {
    //         address: "Japan", name: "DSM"
    //     }]
```
---
## `filter`函数

### 参数
 1. `arr`数组
 2. `fn`函数
### 功能
 - **`filter`函数接受`arr`数组将`arr`数组的每`1`个`value`都传递给`fn`函数并调用**
 - **满足`fn`函数的`value`将会依次保存进`1`个新数组，新数组由`filter`函数返回**
### 使用场景
 - **迭代数组并有限制时 生成新数组**
``` javascript
    const filter = (arr, fn) => {
        let results = []
        for(const value of arr)
            (fn(value) ? results.push(value) : undefined)
        return results
    }
    let json = [
        {
            "address": "中国",
            "id": 1,
            "name": "Taki"
        },
        {
            "address": "Japan",
            "id": 2,
            "name": "DSM"
        }]
    console.log(filter(json, (value) => value.id == 1))
    // 输出：[{address: "中国", id: 1, name: "Taki"}]
```
---
## `concatAll`函数

### 参数
 1. `arr`嵌套数组
### 功能
 - **`concatAll`函数接受`arr`数组参数将`arr`数组的每`1`个子数组里的值都依次加入新数组并返回**
### 使用场景
 - **嵌套数组转换普通数组**
``` javascript
    const concatAll = (arr) => {
        let results = []
        for(let value of arr)
            results.push.apply(results, value)
        return results
    }
    let json = [
        [1, 2, 3, 4],
        [2, 3, 4, 5]
    ]
    console.log(concatAll(json))
    // 输出：[1, 2, 3, 4, 2, 3, 4, 5]
```
---
## `reduce`函数

### 参数
 1. `arr`数组
 2. `fn`函数
 3. `initialValue`数字（可选填）
### 功能
 - **`reduce`函数将迭代`arr`数组的各项并依次传递给`fn`函数，进行归约操作**
 - **`initialValue`参数可选，当未传值时，从数组第`2`个元素进行遍历，如若传值，由`initialValue`作为累加器的初始值，且遍历整个数组**
### 使用场景
 - **将数组各项进行`+`、`*`等归约操作**
``` javascript
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
    let arr = [1, 2, 3, 4]
    console.log(reduce(arr, (acc, val) => acc + val))
    // 输出：[10]
    console.log(reduce(arr, (acc, val) => acc * val, 1))
    // 输出：[24]
```
---
## `zip`函数

### 参数
 1. `leftArr`数组
 2. `rightArr`数组
 3. `fn`函数
### 功能
 - **`zip`函数将`leftArr`数组和`rightArr`数组相同键的项传递给`fn`函数，返回新数组**
### 使用场景
 - **将两个数组相同键的项进行合并操作**
``` javascript
    const zip = (leftArr, rightArr, fn) => {
        let index, results = []
        for (index = 0; index < Math.min(leftArr.length, rightArr.length); index++)
            results.push(fn(leftArr[index], rightArr[index]))
        return results
    }
    console.log(zip(
        [1, 2, 3, 4],
        [2, 3, 7, 7, 8],
        (x, y) => x + y)
    )
    // 输出：[3, 5, 10, 11]
```
---
# **3. 柯里化函数**

## `curry`函数

### 参数
 1. `fn`函数
### 功能
 - **`curry`函数将`fn`两元函数转化为一元函数**
### 使用场景
 - **两元函数转化为一元函数**
``` javascript
    const curry = (fn) => 
        (firstArg) => 
            (secondArg) => 
                fn(firstArg, secondArg)
    let fn = curry((a, b) => a + b)
    console.log(fn(1)(2))
    // 输出：3
```
---