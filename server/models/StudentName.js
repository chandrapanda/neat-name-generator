const { Schema, model } = require("mongoose");

const studentNameSchema = new Schema({
  studentName: [
    {
      type: Schema.Types.ObjectId,
    },
  ],
});

const StudentName = model("StudentName", studentNameSchema);
module.exports = StudentName;
