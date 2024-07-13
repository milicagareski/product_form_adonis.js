"use strict";

const Schema = use("Schema");

class ProductSchema extends Schema {
  up() {
    this.create("products", (table) => {
      table.increments();
      table.string("title", 255).notNullable();
      table.decimal("price", 10, 2).notNullable();
      table.integer("quantity").notNullable();
      table.text("description");
      table.timestamps(true, true);
    });
  }

  down() {
    this.drop("products");
  }
}

module.exports = ProductSchema;
