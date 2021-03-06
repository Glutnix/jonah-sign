'use strict'

const Schema = use('Schema')

class SignsTableSchema extends Schema {

  up () {
    this.create('signs', (table) => {
      table.increments('id').primary()
      table.string('name')
      table.string('slug').unique()
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
