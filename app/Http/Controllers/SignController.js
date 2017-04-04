'use strict'

class SignController {
  * show (request, response) {
    response.send({
      slide: 'SlideDemo',
      slideProps: {
        banana: '🍌🍌🍌'
      }
    })
  }
}

module.exports = SignController
