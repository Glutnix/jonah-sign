'use strict'

const Lucid = use('Lucid')

class Sign extends Lucid {
  getSlideProps (props) {
    console.log(props);
    return JSON.parse(props)
  }
}

module.exports = Sign
