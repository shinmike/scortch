
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("users", (table) => {
      table.increments("id").primary();
      table.string("name");
      table.string("email");
      table.string("photo");
      table.string("password")
      table.timestamps(true, true);
    }),

    knex.schema.createTable("games", (table) => {
      table.integer("game_id");
      table.integer("awayScore");
      table.integer("homeScore");
      table.timestamps(true, true);
    }),

    knex.schema.createTable("predictions", (table) => {
      table.increments("id").primary();
      table.integer('user_id').unsigned().notNull().references('users');
      table.integer('games_id').unsigned().notNull().references('games');
      table.boolean("predictHomeWins");
      table.timestamps(true, true);
    })
  ]);
}

exports.down = function(knex, Promise) {
  return Promise.all([
  knex.schema.dropTable('predictions'),
  knex.schema.dropTable('games'),
  knex.schema.dropTable('users'),
  ]);
};
