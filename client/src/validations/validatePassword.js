/**
 * This function accepts password as a parameter,
 * matches with a regex and return true for valid,
 * and false for invalid password
 * @param {string} password
 * @returns {boolean} isValidPassword flag
 */
module.exports = (password) => {
	if (!password || password.length === 0) return false
	if (password.length < 8) return false
	if (
		password.match(
			/^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*["!'^+%&/()=?_\-*\\{}[\]$#£é€@])(?=.{8,}))/gm,
		)
	)
		return true
	return false
}
