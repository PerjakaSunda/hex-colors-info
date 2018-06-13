const ntc = require ('./ntc.js')
let c = function (hex) {
    if (hex) {
        const getNTC = ntc.name(hex)
        return {
            hex: getNTC[0],
            name: getNTC[1],
            hueHex: getNTC[2],
            hueName: getNTC[3],
            match: getNTC[4]
        }
    } else {
        const names = ntc.names.sort(function (a, b) {
            let y = a[2].toLowerCase()
            let z = b[2].toLowerCase()
            if (y < z) {
                return -1
            }
            if (y > z) {
                return 1
            }
            return 0
        })
        return names
    }
}
module.exports = c
