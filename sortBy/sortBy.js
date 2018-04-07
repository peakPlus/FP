const sortBy = (property) => {
    return (a, b) => {
        var result = (a[property] < b[property] ? -1 :
            (a[property] > b[property]) ? 1 : 0)
        return result
    }
}