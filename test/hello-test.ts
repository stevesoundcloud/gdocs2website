import * as test from "tape"

test("passes", (assert: test.Test) => {
  assert.equal(2, 2)
})

test("fails", (assert: test.Test) => {
  assert.equal(2, 1)
})