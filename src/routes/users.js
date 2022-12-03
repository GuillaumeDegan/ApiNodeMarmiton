import express from "express";
import bodyParser from "body-parser";
import UsersModel from "../models/Users";

const usersRoutes = express.Router();

var jsonParser = bodyParser.json();

usersRoutes.get("/users", (req, res) => {
  UsersModel.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

usersRoutes.get("/users/:idUser", (req, res) => {
  UsersModel.findById(req.params.idUser)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

usersRoutes.post("/users", jsonParser, (req, res) => {
  const User = new UsersModel({
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    username: req.body.username,
    password: req.body.password,
  });
  User.save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

usersRoutes.patch("/users/:idUser", jsonParser, (req, res) => {
  UsersModel.findByIdAndUpdate(req.params.idUser, req.body, { new: true })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

usersRoutes.delete("/users/:idUser", (req, res) => {
  UsersModel.findByIdAndDelete(req.params.idUser)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

export default usersRoutes;
