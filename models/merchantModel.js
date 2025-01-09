'use strict';

const { Model } = require('objection')

class Merchant extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'Merchant'
  }



}


module.exports = {
    Merchant
}