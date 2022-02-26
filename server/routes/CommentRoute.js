const router = require("express").Router()
const CommentController = require("../controllers/CommentController")

router.get("/all/:postId?", CommentController.getCommentsForPost)
router.post("/add", CommentController.addComment)
router.put("/edit/:id", CommentController.editCommentById)
router.delete("/delete/:id", CommentController.deleteCommentById)
router.post("/like/:id", CommentController.likeComment)
router.post("/dislike/:id", CommentController.dislikeComment)

module.exports = router
