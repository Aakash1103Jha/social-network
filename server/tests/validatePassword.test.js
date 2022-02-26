/**
 * Test suit for validatePassword function.
 * Checks for all positive and negative scenarios
 */
const validatePassword = require("../validations/validatePassword")

test("returns false for empty password", () => {
	expect(validatePassword()).toBe(false)
})
test("returns false for password of zero length", () => {
	expect(validatePassword("")).toBe(false)
})
test("returns false for password with less than 8 characters", () => {
	expect(validatePassword("javascr")).toBe(false)
})
test("returns false for password with only lowercase characters", () => {
	expect(validatePassword("javascript")).toBe(false)
})
test("returns false for password with no number", () => {
	expect(validatePassword("Javascript")).toBe(false)
})
test("returns false for password with no uppercase character", () => {
	expect(validatePassword("javascript2022")).toBe(false)
})
test("returns false for password with no special character", () => {
	expect(validatePassword("Javascript2022")).toBe(false)
})
test("returns false for password with at least 8 character, at least 1 uppercase, 1 number and 1 special character", () => {
	expect(validatePassword("Javascript@2022")).toBe(true)
})
