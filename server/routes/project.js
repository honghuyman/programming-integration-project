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
    ]).exec(function (err, users) {
        if (err) return res.send(err);
        if (users.length === 0) return res.send({ message: "USERNAME DOES NOT EXIST" })
        let proj_ids = users[0].user_be_in_projects.map((o => o.project_ID));
        
        // user has no projects
        let mapped_ids = proj_ids.map(id => ({ _id: id }));
        if (mapped_ids.length === 0) return res.json([]);
        
        Project.find({ $or: mapped_ids })
            .then(projects => {
                res.json(projects);
            })
            .catch(err => res.status(400).json('Error: ' + err));
    });;
});

projectRoutes.get('/project/:project_ID', function (req, res) {
    const { project_ID } = req.params;
    Project.findById(project_ID, function (err, record) {
        if (err) return res.send(err);
        res.json(record);
    })
})


projectRoutes.post("/new-project", (req, res) => {
    console.log("New Project: ", req.body)
    const { project_name, target, start_date, end_date, manager_id } = req.body;

    const project = new Project({ project_name, reality_money: 0, target, start_date, end_date })
    const user_be_in_project = new User_be_in_project({
        user_ID: manager_id,
        project_ID: project._id,
        privilege: "manager",
        money: 0
    })

    project.save((err, record) => {
        if (err) return res.send(err)
        user_be_in_project.save(err => {
            if (err) return res.send(err)
            res.send(record)
        })
    })

});

projectRoutes.post("/add-member", (req, res) => {
    console.log("Add member: ", req.body)
    const { user_ID, project_ID } = req.body;
    const user_be_in_project = new User_be_in_project({
        user_ID: user_ID,
        project_ID: project_ID,
        privilege: "member",
        money: 0
    })

    user_be_in_project.save(err => {
        if (err) {
            res.send(err)
        } else {
            res.send({ message: "SUCCESS" })
        }
    })
});

projectRoutes.post("/add-money-to-project", (req, res) => {
    console.log("Add money to project: ", req.body)
    const { user_ID, project_ID, money } = req.body;
    User_be_in_project.findOne({ user_ID, project_ID }, function (err, record) {
        if (err) return res.send(err)

        if (record) {
            record.money = record.money + money;
            record.save();
            Project.findById(record.project_ID, function (err, record) {
                if (err) return res.send(err)

                if (record) {
                    record.reality_money = record.reality_money + money;
                    record.save();
                    res.send({ message: "SUCCESS" });
                }
            })

        }
    })
});

projectRoutes.get('/all-members/:project_ID', function (req, res) {
    const { project_ID } = req.params;
    User_be_in_project.find({ project_ID })
        .sort('user_ID')
        .exec(function (err, be_in) {
            if (err) return res.send(err);

            let members = be_in.map(r => ({ _id: r.user_ID }));
            let privilege = be_in.map(r => r.privilege);
            let money = be_in.map(r => r.money);
            User.find({ $or: members }).select('_id username')
                .sort('_id')
                .exec(function (err, records) {
                    if (err) return res.send(err);
                    res.json(records.map((v, i) => ({ ...v._doc, privilege: privilege[i], money: money[i] })))
                })
        })
})


projectRoutes.post("/delete-member", (req, res) => {
    console.log("Delete member: ", req.body)
    const { user_ID, project_ID } = req.body;
    User_be_in_project.deleteOne({ user_ID, project_ID }, function (err, _) {
        if (err) return res.send(err);
        res.send({ message: "SUCCESS" })
    })
});

projectRoutes.post("/delete-project", function (req, res) {
    console.log("Delete project: ", req.body);
    const { project_ID } = req.body;
    Project.findByIdAndDelete(project_ID).exec(function (err, _) {
        if (err) return res.send(err);
        User_be_in_project.deleteMany({ project_ID }).exec(function (err, _) {
            if (err) return res.send(err);
            res.send({ message: "SUCCESS" })
        })
    })
})

projectRoutes.post("/update-project", function (req, res) {
    console.log("Update project: ", req.body);
    const { _id, target, start_date, end_date } = req.body;
    Project.findOneAndUpdate({ _id }, { target, start_date, end_date }).exec(function (err) {
        if (err) return res.send(err)
        res.send({ message: "SUCCESS" })
    })
})




module.exports = projectRoutes;