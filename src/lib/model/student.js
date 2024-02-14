const { default: mongoose } = require("mongoose");

const studentModel = new mongoose.Schema ({
    name: String,
    detail: String,
    imageUrl: String
  
})
  export const Student = mongoose.models.students || mongoose.model('students', studentModel);