'use strict'

const Schema = use('Schema')

class SlidesTableSchema extends Schema {

  up () {
    this.create('slides', (table) => {
      table.increments('id').primary()
      table.string('name')
      table.string('slug').unique()
      table.string('template_file')
      table.text('description')
      table.json('default_props')
      table.json('props_schema')
      table.timestamps()
    })
  }

  down () {
    this.drop('slides')
  }

}

module.exports = SlidesTableSchema
