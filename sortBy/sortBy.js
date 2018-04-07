const sortBy = (property, order) => {
    return (a, b) => {
        var result = (a[property] < b[property] ? -order :
            (a[property] > b[property]) ? order : 0)
        return result
    }
}