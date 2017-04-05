'use strict'

const Sign = use('App/Model/Sign')

class SignController {
  * show (request, response) {
    const slug = request.param('slug')

    const sign = yield Sign.findByOrFail('slug', slug)

    console.log(sign)

    response.send(sign.toJSON())
  }
}

module.exports = SignController
