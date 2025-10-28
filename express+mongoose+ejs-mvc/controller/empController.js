const empModel = require('../model/emp');

const getEmpDetails = async (req,res)=> {

    try {
      const data = await empModel.find();
      res.render("index", {data});
    } catch (error) {
        throw new Error(error.message);
    }
}

const AddEmployee = async (req,res) => {
    try {
        const data = new empModel({
            name: req.body.name,
            salary: req.body.salary
        });
        await data.save();
        res.redirect("/");
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {getEmpDetails, AddEmployee};