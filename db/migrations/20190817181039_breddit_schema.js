exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', (table) => {
      table.increments('id').primary();
      table.string('user_name').unique();
      table.boolean('night_mode').defaultTo(false);
      table.date('joined').defaultTo(knex.fn.now());
    }),
    knex.schema.createTable('bakeries', (table) => {
      table.increments('id').primary();
      table.string('icon');
      table.string('color');
      table.string('description').defaultTo('');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
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
    }),
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
    }),
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
    knex.schema.dropTable('messages_votes'),
    knex.schema.dropTable('messages'),
    knex.schema.dropTable('hidden_posts'),
    knex.schema.dropTable('saved_posts'),
    knex.schema.dropTable('post_votes'),
    knex.schema.dropTable('posts'),
    knex.schema.dropTable('customers'),
    knex.schema.dropTable('bakeries'),
    knex.schema.dropTable('users'),
  ]);
};
