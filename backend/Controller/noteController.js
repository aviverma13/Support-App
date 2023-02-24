const asyncHandler = require("express-async-handler");

const Ticket = require("../model/ticketModel");
const User = require("../model/userModel");
const Note = require("../model/noteModel");

// @desc Get  Notes for a ticket
// @route GET/api/ticket/:tickrtId/notes
// @access Private
const getNotes = asyncHandler(async (req, res) => {
  //Get user using the id in theJWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const ticket = await Ticket.findById(req.params.ticketId);

  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const notes = await Note.find({ ticket: req.params.ticketId });

  res.status(200).json(notes);
});

// @desc Create  ticket notes
// @route Post/api/ticket/:tickrtId/notes
// @access Private
const addNote = asyncHandler(async (req, res) => {
  //Get user using the id in theJWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const ticket = await Ticket.findById(req.params.ticketId);

  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const notes = await Note.create({
    text: req.body.text,
    isStaff: false,
    ticket: req.params.ticketId,
    user: req.user.id,
  });

  res.status(200).json(notes);
});

module.exports = {
  getNotes,
  addNote,
};
