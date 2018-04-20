import { test } from "mocha"
import { assert } from "chai";

test("fail", () => {
  assert.equal(2, 1)
})

test("pass", () => {
  assert.equal(2, 2)
})
