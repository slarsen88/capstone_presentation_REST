const User = require('../models/User')

// @route  GET /api/v1/users/
// @desc   Returns all users in the DB
exports.allUsers = (req, res) => {
    User.find({}, (err, users) => {
        res.send(users)
    })
}

// @route  GET /api/v1/users/:user
// @desc   Returns specified user
exports.user = async (req, res) => {
    // Search the DB for a user by sending in the parameter found within the endpoint (/:user)
    const user = await User.findOne({username: req.params.user})

    // If no user is found, the response should send the error
    if (!user) {
        return res.status(404).json({ status: '404', err: 'User not found' })
    }

    // If a user is found, send the user as the response
    res.status(200).send(user)
    console.log(user)
}


// @route  POST /api/v1/users/
// @desc   Creates and posts new user to the DB
exports.createUser =  async (req, res) => {
    try {
        console.log(req.body)
        // check to see if a user already exists. Do not continue with code until this function completes
        const user = await User.findOne({ username: req.body.username })
        if (user) {
         return res.status(400).send('Username taken')
        }

        // Create a new user object with information passed in through Postman
        const newUser = new User({
            username: req.body.username,
            password: req.body.password
          })

          try {
            // Save the user to the DB
            const user = await newUser.save()
            // Send a response that contains the User data from MongoDB
            res.send(user)
          } catch (err) {
              console.log(err.message)
          }
    } catch (err) {
        console.log(err.message)
    }    
}

// @route  DELETE /api/v1/users/:user
// @desc   Delete specified user from DB
exports.deleteUser = async (req, res) => {
     User.deleteOne({username: req.params.user}, (err) => {
        if (err) {
            // console.log(err.message)
            return res.json(err.message)
        }
        console.log('deleted successfully')
        return res.status(200).json({msg: `${req.params.user} was deleted`})
    })
}

// @route  PUT /api/v1/users/:user
// @desc   Update the favorite food of the specified user
