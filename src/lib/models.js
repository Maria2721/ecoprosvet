import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			min: 3,
			max: 20,
		},
		surname: {
			type: String,
			required: true,
			unique: true,
			min: 3,
			max: 20,
		},
		country: {
			type: String,
			required: true,
			min: 3,
			max: 20,
		},
		city: {
			type: String,
			required: true,
			min: 3,
			max: 20,
		},
		date: {
			type: String,
			required: true,
			min: 3,
			max: 10,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			max: 50,
		},
		password: {
			type: String,
			required: true,
			unique: true,
		},
		phone: {
			type: String,
			required: true,
			unique: true,
			max: 20,
		},
		filters: {
			type: Array,
		},
		likes: {
			type: Array,
		},
		organization: {
			type: String,
			required: true,
			unique: true,
			max: 50,
		},
		events: {
			type: Array,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const eventsSchema = new mongoose.Schema(
	{
		event: {
			type: String,
			required: true,
		},
		date: {
			type: String,
			required: true,
		},
		location: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		photo: {
			type: String,
			required: true,
		},
		filters: {
			type: Array,
			required: true,
		},
		activities: {
			type: Array,
			required: true,
		},
		link: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Event =
	mongoose.models?.Event || mongoose.model("Event", eventsSchema);
