// Dependencies
const mongoose = require("mongoose");
const { ObjectID } = require("mongodb");
const _ = require("lodash");

const User = mongoose.model("User");
const auth = require("../middlewares/auth");

module.exports = app => {
    /**
     * GET /api/admin/profile/:id
     * Gets a profile item from the users database given its id
     */
    app.get("/api/admin/profile/:id", async (req, res) => {
        // get the id of the profile to retrieve
        const id = req.params.id;

        // check if the id is a valid object id
        if (!ObjectID.isValid(id)) return res.status(404).send();

        try {
            // retrieve the profile item
            const profile = await User.findOne({ _id: id });

            if (!profile) return res.status(404).send();

            // send the result
            res.send(profile);
        } catch (err) {
            res.status(400).send(err);
        }
    });

    /**
     * PATCH /api/admin/profile/:id
     * Updates the user object in the database given its id and the properties to update
     * User can only update his own profile
     */
    app.patch("/api/admin/profile/:id", auth.requireLogin, async (req, res) => {
        // get the id of the profile to update and the properties to update
        const id = req.params.id;
        var body = _.pick(req.body, ["name", "bio"]);

        // check if the id is a valid object id
        if (!ObjectID.isValid(id)) return res.status(404).send();

        // check if the id of the profile to update if the user id
        if (!req.user._id.equals(id)) return res.status(401).send();

        try {
            // update the user object
            const user = await User.findOneAndUpdate({ _id: id }, { $set: body }, { new: true });

            if (!user) return res.status(404).send();
            res.send(user);
        } catch (err) {
            res.status(400).send(err);
        }
    });
};
