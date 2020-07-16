exports.up = function (knex) {
  return knex.schema.createTable("users", (usersTable) => {
    usersTable.increments("user_id").primary();
    usersTable.string("username");
    usersTable.string("password");
    usersTable.string("email");
    usersTable.string("phone_number");
    usersTable.timestamp("created_at").defaultTo(knex.fn.now());
    //Job position/job description
    usersTable.string("role");
    usersTable.integer("hospital_id").references("hospitals.hospital_id");
    usersTable.integer("department_id").references("departments.department_id");
    //Is the user an admin or not?
    usersTable.boolean("admin").defaultTo(false);
    //Is the user available? options: on-site, on-break, unavailable, on-call, inactive
    usersTable.string("status").defaultTo("inactive");
    //Manager
    usersTable.integer("manager_id").refernces("users.user_id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
