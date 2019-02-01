/*
**  GemstoneJS -- Gemstone JavaScript Technology Stack
**  Copyright (c) 2016-2019 Gemstone Project <http://gemstonejs.com>
**  Licensed under Apache License 2.0 <https://spdx.org/licenses/Apache-2.0>
*/

/*  load external requirements  */
const loaderUtils = require("loader-utils")

/*  the exported Webpack loader function  */
module.exports = function (content) {
    /*  determine Webpack loader query parameters  */
    const options = Object.assign({}, {
    }, loaderUtils.getOptions(this), this.resourceQuery ? loaderUtils.parseQuery(this.resourceQuery) : null)
    void (options)

    /*  indicate to Webpack that our results are
        fully deterministic and can be cached  */
    this.cacheable(true)

    /*  parse JSON  */
    try {
        content = JSON.parse(content)
    }
    catch (ex) {
        this.emitError(`gemstone-loader-json: [JSON]: ERROR: ${ex}`)
    }

    /*  export result as a JavaScript string  */
    content = `module.exports = ${JSON.stringify(content)}`

    return content
}

