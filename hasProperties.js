module.export = Object.prototype.hasOwnProperties = function(...keys) {

    for(let key of keys) {

        if(!this.hasOwnProperty(key)) {

            return false

        }

    }

    return true

}