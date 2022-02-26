const router = require("express").Router()
const PostController = require("../controllers/PostController")

router.get("/all", PostController.getAllPosts)
router.get("/all/:userId", PostController.getAllPostsForUser)
router.post("/add", PostController.addPost)
router.put("/edit/:id", PostController.editPostById)
router.delete("/delete/:id", PostController.deletePostById)
router.put("/like/:id", PostController.likePostById)
router.put("/dislike/:id", PostController.dislikePostById)

module.exports = router
