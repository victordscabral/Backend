const UserController = require("../controllers/UserController");
const userController = new UserController();
const express = require("express");
const routes = express.Router();

routes.post("/user", async (req, res, next) => {
    userController.createUser(req, res, next);
});
routes.get('/user/:id', async (req, res, next) => {
    userController.getUserById(req, res, next)
})
routes.put('/user/:id', async (req, res, next) => {
    userController.editUserById(req, res, next)
})
routes.put('/user/:id/address', async (req, res, next) => {
    userController.editUserAddressById(req, res, next)
});
routes.put('/user/:id/location', async (req, res, next) => {
    userController.updateUserLocationById(req, res, next)
});
routes.delete('/user/:id', async (req, res, next) => {
    userController.deleteUserLogic(req, res, next);
});

module.exports = routes
