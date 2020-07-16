exports.up = function (knex) {
  return knex.schema.createTable("hospitals", (hospitalsTable) => {
    hospitalsTable.increments("hospital_id").primary();
    hospitalsTable.string("hospital_name");
    hospitalsTable.timestamp("created_at").defaultTo(knex.fn.now());
    hospitalsTable.integer("trust_id").references("trusts.trust_id");
    hospitalsTable.string("status").defaultTo("active");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("hospitals");
};
