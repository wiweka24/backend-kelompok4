const express = require('express');
const router = express.Router();
const { 
  getActivities, 
  getActivity, 
  editActivity, 
  newActivity, 
  deleteActivity, 
  findActivity 
} = require('../controllers/activity');
const { authMid } = require('../middleware/authMiddleware')

/*
Get and Post All Activities from Database
Path Name: {URI}/activity
*/

router
  .route('/')
  .get(authMid, getActivities)
  .post(authMid, newActivity)

router
  .route('/search')
  .get(findActivity)

/*
Get Edit and Delete Specific Activity from Database by their Id
Path Name: {URI}/activity/{activity id}
*/

router
  .route('/:id')
  .get(getActivity)
  .patch(editActivity)
  .delete(deleteActivity)

module.exports = router;