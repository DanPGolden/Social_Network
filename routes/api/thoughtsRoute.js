const router = require('express').Router();
const {
    allThoughts,
    findOneThought,
    createThought,
    createReaction,
    deleteThought,
    deleteReaction
} = require('../../controllers/thoughtController')

router.route('/').get(allThoughts)
router.route('/:userId/').post(createThought);
router.route('/:thoughtId').get(findOneThought).delete(deleteThought)
router.route('/:thoughtId/reaction').post(createReaction)
router.route('/:thoughtId/reaction/:reactionId').delete(deleteReaction)


module.exports = router;