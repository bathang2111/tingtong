export const formatUnit = (unit, isShowed = false) => {
    switch (unit) {
        case "percent":
            return '%'        
        default:
            return 'giờ'
    }
}

export const formatNumber = (number, unit) => {
    switch (unit) {
        case "percent":
            return number + ' %'        
        case "hour":
            return number  + ' giờ'
        default:
            return number + " vnd"
    }
}
