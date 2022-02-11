const { Thought, User} = require('../models');

module.exports = {
    //find all users
    async findAllUsers(req, res) {
        const allUsers = await User.find()
        res.json(allUsers)
  },

    //add a new user 
    async addUser(req, res) {
        const addUser = await User.create(req.body)
        console.log("req", req)
        res.json(addUser)
        // console.log("data", res)
    },

    // find single user
    async findUser(req, res) {
      try{
      const findOneUser = await User.findOne({ _id: req.params.userId }).populate('thoughts').populate('friends')
          !findOneUser
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json({
                findOneUser})
            } catch(error) {
          console.log(err);
          return res.status(500).json(err);
        };
    },

    // update a user using 
    async updateUser(req, res) {
      try {
          const update = await User.findOneAndUpdate(
              { _id: req.params.userId },
              { $set: req.body },
              { runValidators: true, new: true }
          );
          !update
            ? res.status(404).json({ message: 'No such user exists' })
            : res.json("Thought Added")
      } catch (err) {
          res.status(500).json({ message: err });
      }
    },


    //delete user 
    async deleteUser(req, res) {
        try {
            const findUser = await User.findOne({ _id: req.params.userId })
            const deleteUser = await User.findOneAndRemove({ _id: req.params.userId })
            const deleteThoughts = await Thought.deleteMany({ username: findUser.username })
            !deleteUser && !deleteThoughts
              ? res.status(404).json({ message: 'No such user exists' })
              : res.json("User and Associated Thoughts Deleted")
        }
          catch(err)  {
            console.log(err);
            res.status(500).json(err);
          };
      },  
      
      //add new friend 
      async createFriend(req, res) {
        try {
          console.log("Making friends!!!!")
          const addFriend = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends:  req.params.friendId }},
            { new: true, runValidators: true }
            )
            !addFriend
            ? res.status(404).json({ message: 'No such user exists' })
            : res.json("Friend Added")
          } catch(error)  {
            console.log(error);
            res.status(500).json(error);
          }
      },

      //Delete a friend
      async deleteFriend(req, res) {
        try {
          const deleteFriend = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends:  req.params.friendId }},
            { new: true, runValidators: true }
            )
            !deleteFriend
            ? res.status(404).json({ message: 'No such user exists' })
            : res.json("Friend Deleted")
          } catch(error)  {
            console.log(error);
            res.status(500).json(error);
          }
      },
}