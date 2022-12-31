const express = require("express");
const projectRoutes = express.Router();
const Project = require("../models/project");
const User_be_in_project = require("../models/user_be_in_project")
const User = require("../models/user")


projectRoutes.route('/all-projects/:username').get((req, res) => {
    const { username } = req.params;
    User.aggregate([
        {
            $lookup: {
                from: "user_be_in_projects",
                localField: "_id",
                foreignField: "user_ID",
                as: "user_be_in_projects"
            }
        },
        {
            $match: { username: username }
        }
    ]).exec(function (err, projects) {
        if (err) res.send(err);

        let proj_ids = projects[0].user_be_in_projects.map((o => o.project_ID));
        let privilege = projects[0].user_be_in_projects.map((o => o.privilege));
        Project.find({ $or: proj_ids.map(id => ({ _id: id })) })
            .then(projects => {
                proj_and_privilege = projects.map((proj, i) => {
                    return ({...proj._doc, privilege: privilege[i]});
                })
                res.json(proj_and_privilege)
            })
            .catch(err => res.status(400).json('Error: ' + err));
    });;
});


projectRoutes.post("/new-project", (req, res) => {
    console.log("New Project: ", req.body)
    const { project_name, target, start_date, end_date, manager_id } = req.body;

    const project = new Project({ project_name, reality_money: 0, target, start_date, end_date })
    const user_be_in_project = new User_be_in_project({
        user_ID: manager_id,
        project_ID: project._id,
        privilege: "manager"
    })

    project.save(err => {
        if (err) {
            res.send(err)
        } else {
            res.send({ message: "SUCCESS" })
        }
    })

    user_be_in_project.save(err => {
        if (err) {
            res.send(err)
        } else {
            res.send({ message: "SUCCESS" })
        }
    })
});

projectRoutes.post("/add-member", (req, res) => {
    console.log("Add member: ", req.body)
    const { user_ID, project_ID } = req.body;
    const user_be_in_project = new User_be_in_project({
        user_ID: user_ID,
        project_ID: project_ID,
        privilege: "member"
    })

    user_be_in_project.save(err => {
        if (err) {
            res.send(err)
        } else {
            res.send({ message: "SUCCESS" })
        }
    })
});


module.exports = projectRoutes;