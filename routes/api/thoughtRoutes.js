const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtControllers.js');

// /api/courses
router.route('/thoughts').get(getThoughts).post(createThought);

// /api/courses/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router
.route('/thoughts/:thoughtId/reactions')
.put(addReaction);

router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);
module.exports = router;
