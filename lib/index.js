const ntc = require ('./ntc.js')
let c = function (hex) {
    const getNTC = ntc.name(hex)
    return {
        hex: getNTC[0],
        name: getNTC[1],
        hueHex: getNTC[2],
        hueName: getNTC[3],
        match: getNTC[4]
    }
}
module.exports = c
