const Nothing = function (value) {
    this.value = value
}
Nothing.of = function (value) {
    return new Nothing(value)
}
Nothing.prototype.map = function (fn) {
    return this
}
const Some = function (value) {
    this.value = value
}
Some.of = function (value) {
    return new Some(value)
}
Some.prototype.map = function (fn) {
    return Some.of(fn(this.value))
}

const Either = {
    Some: Some,
    Nothing: Nothing
}