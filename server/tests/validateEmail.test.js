/**
 * Test suit for validateEmail function.
 * Checks for all positive and negative scenarios
 */
const validateEmail = require("../validations/validateEmail")

test("returns false for empty email", () => {
	expect(validateEmail()).toBe(false)
})
test("returns false for email of zero length", () => {
	expect(validateEmail("")).toBe(false)
})
test("returns false for email with no @", () => {
	expect(validateEmail("aakash.com")).toBe(false)
})
test("returns false for email starting with uppercase", () => {
	expect(validateEmail("Aakash.com")).toBe(false)
})
test("returns true for proper email", () => {
	expect(validateEmail("aakash@me.com")).toBe(true)
})
