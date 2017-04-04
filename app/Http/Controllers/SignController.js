'use strict'

class SignController {
  show (request, response) {
    response.send({
      slide: 'SlideDemo'
    })
  }
}

module.exports = SignController
