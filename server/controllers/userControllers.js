const Person = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const register = async (req, res) => {
  try {
    const { email, name, password, address } = req.body;
    const newuser = await Person.findOne({ email });
    if (newuser) {
      res.status(400).json({ msg: "user exists, try to connect" });
    } else {
      const hashedPw = await bcrypt.hash(password, 10);
      const createUser = await Person.create({
        email,
        name,
        password: hashedPw,
        address,
      });
      console.log(hashedPw);
      const token = jwt.sign(
        {
          id: createUser._id,
        },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );
      console.log(token);
      res
        .status(201)
        .json({ msg: "user created", token: token, person: createUser });
    }
  } catch (error) {
    res.status(500).json({ msg: "sth went wrong", error: error.message });
  }
};
const getPerson = async (req, res) => {
  try {
    const person = await Person.find();
    res.status(201).json({ msg: "find all the data", person });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const addPerson = async (req, res) => {
  try {
    const person = new Person(req.body);
    await person.save();
    res.status(201).json({ msg: "person added", person });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
const updatePerson = async (req, res) => {
  try {
    const person = await Person.findByIdAndUpdate(
      { _id: req.params.id },
      { ...req.body }
    );
    if (!person) return res.status(404).json({ msg: "person not found" });
    res
      .status(201)
      .json({ msg: "person updated", person: { ...person._doc, ...req.body } });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const deletePerson = async (req, res) => {
  try {
    const person = await Person.findByIdAndDelete(req.params.id);
    if (!person) return res.status(404).json({ msg: "person not found" });
    res.status(200).json({ msg: "person deleted", person });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const person = await Person.findOne({ email });
    if (!person)
      res.status(400).json({ msg: "user doesn't exist, try to register" });
    else {
      const checkPw = await bcrypt.compare(password, person.password);

      if (!checkPw) res.status(400).json({ msg: "wrong password, try again" });
      const token = jwt.sign(
        {
          id: person._id,
        },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );
      console.log(token);
      res
        .status(201)
        .json({ msg: "login successful", token: token, person: person });
    }
  } catch (err) {
    res.status(500).json({ msg: "sth went wrong", error: error.message });
  }
};
const getPersonData=async(req,res)=>{
  try{
    const user=await Person.findOne({_id:req.personId})
    if(!user)res.status(400).json({msg:"user doesn't exist, try to register"})
    else{res.status(200).json({msg:"user info sucess", person:user})}}
    catch(error){res.status(500).json({msg:"sth went wrong"})}
  }

module.exports = {
  register,
  login,
  getPersonData,
  getPerson,
  addPerson,
  updatePerson,
  deletePerson,
};
