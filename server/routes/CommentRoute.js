const router = require("express").Router()
const CommentController = require("../controllers/CommentController")
const validateUser = require("../middlewares/validateUser")

router.get("/all?", CommentController.getCommentsForPost)
router.post("/add/:postId", validateUser, CommentController.addComment)
router.put("/edit/:id", CommentController.editCommentById)
router.delete("/delete/:id", CommentController.deleteCommentById)
router.post("/like/:id", CommentController.likeComment)
router.post("/dislike/:id", CommentController.dislikeComment)

module.exports = router
