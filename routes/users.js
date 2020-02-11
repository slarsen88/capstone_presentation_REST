const express = require('express')
const router = express.Router()

const { allUsers, user, createUser, deleteUser} = require('../controllers/users')


// Route to GET all users in the DB
router.route('/').get(allUsers)

// Route to GET specific user in DB
router.route('/:user').get(user)

// Route to POST (create) a new user in the DB
router.route('/').post(createUser)

// Route to DELETE a user from the DB
router.route('/:user').delete(deleteUser)



module.exports = router