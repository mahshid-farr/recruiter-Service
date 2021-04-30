const mongoose = require('mongoose')

mongoose.model("Recruiter", {

    username:{type: String, require: true},

    first_name:{type: String, require: true},
    
    last_name:{type: String, require: true},

    company:{type: String, require: true},

    note:{type: Object, require: false},
    job:[
        {
            type:mongoose.SchemaTypes.ObjectId,
            ref:"Job",
            require:false
        }
    ]
});