'use strict'

const Helpers = use('Helpers')

class UploadController {
  * uploadImage (request, response) {
    const file = request.file('file', {
      maxSize: '100mb',
      allowedExtensions: ['jpg', 'png', 'jpeg', 'gif']
    })

    const fileName = `${new Date().getTime()}.${file.clientName()}.${file.extension()}`

    yield file.move(Helpers.storagePath(), fileName)

    if (!file.moved()) {
      response.badRequest(file.errors())
      return
    }

    response.ok(`uploaded as ${file.uploadPath()}`)
  }
}

module.exports = UploadController
