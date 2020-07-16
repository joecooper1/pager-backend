exports.up = function (knex) {
  return knex.schema.createTable("trusts", (trustsTable) => {
    trustsTable.increments("trust_id").primary();
    trustsTable.string("trust_name");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("trusts");
};
