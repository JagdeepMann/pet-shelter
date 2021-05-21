const mongoose = require("mongoose");



const PetSchema = new mongoose.Schema({
		name: {
			type: String,
			required:[true, "Name is required!"],
			minLength: [3, "Name must be at least 3 chars"],
			maxLength: [100000000, "Name can't be that long"]
		},
		
		petType: {
			type: String,
			required: [true, "Pet type is required"],
			minlength: [3, "Type must be at least 3 characters long."],
		},

		description: {
			type: String,
			required: [true, "Description is required"],
			minlength: [3, "Description must be at least 3 characters long.",
			],
		},

		skill1: {
			type: String
		},

		skill2: {
			type: String
		},

		skill3: {
			type: String
		},

		likes: {
			type: Number
		}



	}, { timestamps: true });


const Pet = mongoose.model("Pet", PetSchema );

module.exports = Pet;