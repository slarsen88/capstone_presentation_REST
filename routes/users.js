const express = require('express')
const router = express.Router()

const { allUsers, user, createUser, deleteUser, updateFood} = require('../controllers/users')


// 1) POST
// 2) put /:user
// 3) get /:user
// 4) get all users
// 5) delete user
// 6) get all users

// Route to GET all users in the DB
router.route('/').get(allUsers)

// Route to GET specific user in DB
router.route('/:user').get(user)

// Route to POST (create) a new user in the DB
router.route('/').post(createUser)

// Route to DELETE a user from the DB
router.route('/:user').delete(deleteUser)

// Route to PUT (update) user field in the DB
router.route('/:user').put(updateFood)


module.exports = router