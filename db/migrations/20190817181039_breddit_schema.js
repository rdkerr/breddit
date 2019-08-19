const {onUpdateTrigger} = require('../../knexfile');

const ON_UPDATE_TIMESTAMP_FUNCTION = `
  CREATE OR REPLACE FUNCTION on_update_timestamp()
  RETURNS trigger AS $$
  BEGIN
    NEW.updated_at = now();
    RETURN NEW;
  END;
$$ language 'plpgsql';
`;

const DROP_ON_UPDATE_TIMESTAMP_FUNCTION = `DROP FUNCTION on_update_timestamp`;

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.raw(ON_UPDATE_TIMESTAMP_FUNCTION),
    knex.schema.createTable('users', (table) => {
      table.increments('id').primary();
      table.string('name').unique();
      table.boolean('night_mode').defaultTo(false);
      table.date('joined').defaultTo(knex.fn.now());
    }),
    knex.schema.createTable('bakeries', (table) => {
      table.increments('id').primary();
      table.string('name').unique();
      table.string('icon').notNullable();
      table.string('color');
      table.string('description').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.json('rules');
      table.integer('baker_id').unsigned()
          .references('users.id').onDelete('CASCADE');
    }),
    knex.schema.createTable('customers', (table) => {
      table.increments('id').primary();
      table.boolean('favorite').defaultTo(false);
      table.integer('user_id').unsigned()
          .references('users.id').onDelete('CASCADE');
      table.integer('bakery_id').unsigned()
          .references('bakeries.id').onDelete('CASCADE');
    }),
    knex.schema.createTable('posts', (table) => {
      table.increments('id').primary();
      table.boolean('is_image').notNullable();
      table.string('title').notNullable();
      table.string('content').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.integer('user_id').unsigned()
          .references('users.id').onDelete('CASCADE');
      table.integer('bakery_id').unsigned()
          .references('bakeries.id').onDelete('CASCADE');
    }).then(() => knex.raw(onUpdateTrigger('posts'))),
    knex.schema.createTable('post_votes', (table) => {
      table.increments('id').primary();
      table.integer('value').notNullable();
      table.integer('post_id').unsigned()
          .references('posts.id').onDelete('CASCADE');
      table.integer('user_id').unsigned()
          .references('users.id').onDelete('CASCADE');
    }),
    knex.schema.createTable('saved_posts', (table) => {
      table.increments('id').primary();
      table.integer('user_id').unsigned()
          .references('users.id').onDelete('CASCADE');
      table.integer('post_id').unsigned()
          .references('posts.id').onDelete('CASCADE');
    }),
    knex.schema.createTable('hidden_posts', (table) => {
      table.increments('id').primary();
      table.integer('user_id').unsigned()
          .references('users.id').onDelete('CASCADE');
      table.integer('post_id').unsigned()
          .references('posts.id').onDelete('CASCADE');
    }),
    knex.schema.createTable('messages', (table) => {
      table.increments('id').primary();
      table.integer('message_id').unsigned()
          .references('messages.id').onDelete('CASCADE');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.integer('sender_id').unsigned()
          .references('users.id').onDelete('CASCADE');
      table.integer('receiever_id').unsigned()
          .references('users.id').onDelete('CASCADE');
      table.integer('post_id').unsigned()
          .references('posts.id').onDelete('CASCADE');
    }).then(() => knex.raw(onUpdateTrigger('messages'))),
    knex.schema.createTable('message_votes', (table) => {
      table.increments('id').primary();
      table.integer('value').notNullable();
      table.integer('message_id').unsigned()
          .references('messages.id').onDelete('CASCADE');
      table.integer('user_id').unsigned()
          .references('users.id').onDelete('CASCADE');
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.raw(DROP_ON_UPDATE_TIMESTAMP_FUNCTION),
    knex.schema.dropTable('messages_votes')
        .dropTable('messages')
        .dropTable('hidden_posts')
        .dropTable('saved_posts')
        .dropTable('post_votes')
        .dropTable('posts')
        .dropTable('customers')
        .dropTable('bakeries')
        .dropTable('users'),
  ]);
};
