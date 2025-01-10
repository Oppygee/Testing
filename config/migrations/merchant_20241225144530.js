'use strict';

exports.up = (knex) => {
  return knex.schema.createTable('Merchant', table => {
    table.string('merchant_id').primary().notNullable()
    table.string('user_id').notNullable().references('user_id').inTable('User')
    table.string('merchant_name', 100).defaultTo(null)
    table.string('password_hash').notNullable()
    table.string('password_salt').notNullable()
    table.string('email').notNullable()
    table.string('city').notNullable()
    table.string('country').notNullable()
    table.boolean('is_account_verified').defaultTo(false)
    table.boolean('is_account_blocked').defaultTo(false)
    table.string('blocked_reason').defaultTo(null)
    table.boolean('is_email_verified').defaultTo(false)
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.datetime('modified_at').defaultTo(knex.raw('NULL ON UPDATE CURRENT_TIMESTAMP') )
   

  })
}


exports.down = (knex) => {
  return knex.schema.dropTableIfExists('Merchant')
}