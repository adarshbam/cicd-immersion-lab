const test = require("node:test");
const assert = require("node:assert");
const { greet } = require("../src");

test("greet returns the expected message", () => {
  assert.strictEqual(greet("CI/CD"), "Hello, CI/CD!");
});
