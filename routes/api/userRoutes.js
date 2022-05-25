const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addUserFriend,
  removeUserFriend,
} = require('../../controllers/userControllers.js');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

// api//:userId/friends/:friendId
router
  .route('/:userId/friends/:friendId')
  .post(addUserFriend)
  .delete(removeUserFriend);
module.exports = router;
