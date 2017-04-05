'use strict'

const Schema = use('Schema')

class SignsTableSchema extends Schema {

  up () {
    this.create('signs', (table) => {
      table.increments()
      table.string('name')
      table.string('slug')
      table.text('description')
      table.string('default_slide')
      table.json('slide_props')
      table.timestamps()
    })
  }

  down () {
    this.drop('signs')
  }

}

module.exports = SignsTableSchema
