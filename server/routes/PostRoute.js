const router = require("express").Router()
const PostController = require("../controllers/PostController")
const validateUser = require("../middlewares/validateUser")

router.get("/all", PostController.getAllPosts)
router.get("/all/:userId", PostController.getAllPostsForUser)
router.post("/add", validateUser, PostController.addPost)
router.put("/edit/:id", PostController.editPostById)
router.get("/delete/:id", validateUser, PostController.deletePostById)
router.get("/like/:id", PostController.likePostById)
router.get("/dislike/:id", PostController.dislikePostById)

module.exports = router
