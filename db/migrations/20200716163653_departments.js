exports.up = function (knex) {
  return knex.schema.createTable("departments", (departmentsTable) => {
    departmentsTable.increments("department_id").primary();
    departmentsTable.string("department_name");
    departmentsTable.timestamp("created_at").defaultTo(knex.fn.now());
    departmentsTable.integer("hospital_id").references("hospitals.hospital_id");
    departmentsTable.string("status").defaultTo("active");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("departments");
};
