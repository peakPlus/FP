function* main () {
    let dataOne = yield getDataOne()
    let dataTwo = yield getDataTwo()
    console.log(1 + ':' + dataOne)
    console.log(2 + ':' + dataTwo)
}
let generator = main()
let getDataOne = () => {
    setTimeout(function () {
        generator.next('one')
    }, 1000)
}
let getDataTwo = () => {
    setTimeout(function () {
        generator.next('two')
    }, 1000)
}
generator.next()