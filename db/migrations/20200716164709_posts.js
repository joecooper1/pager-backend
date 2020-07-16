exports.up = function (knex) {
  return knex.schema.createTable("posts", (postsTable) => {
    postsTable.increments("post_id").primary();
    //Text of post
    postsTable.string("post_title");
    postsTable.string("post_body");
    //Who is the sender and recipient
    postsTable.integer("from_user").references("users.user_id");
    postsTable.integer("to_user").references("users.user_id");
    //Has the post been seen and acknowledged?
    postsTable.boolean("seen?").defaultTo(false);
    postsTable.timestamp("seen_at");
    //When was the post sent
    postsTable.timestamp("sent_at").defaultTo(knex.fn.now());
    //Has the post been resolved?
    postsTable.boolean("resolved_by_sender").defaultTo(false);
    postsTable.boolean("resolved_by_recipient").defaultTo(false);
    postsTable.boolean("resolved?").defaultTo(false);
    postsTable.timestamp("resolved_at");
    //Where is the alert being sent from, if relevant
    postsTable.integer("department_id").references("departments.department_id");
    postsTable.string("ward");
    //How urgent is the message, options: urgent, important, by_end_of_day, reminder, message
    postsTable.string("urgency");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("posts");
};
