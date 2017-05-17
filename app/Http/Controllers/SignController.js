'use strict'

const Sign = use('App/Model/Sign')

class SignController {

  * index (request, response) {
    const signs = yield Sign.all();
    console.log(signs);

    response.send(signs.toJSON())
  }

  * show (request, response) {
    const slug = request.param('slug')
    const sign = yield Sign.findByOrFail('slug', slug)

    response.send(sign.toJSON())
  }
}

module.exports = SignController
