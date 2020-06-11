require("dotenv").config();

module.exports = {
	ACCOUNT_SID: "AC4d02cc76ba2ba6a87eee0c7cf64bf567",//process.env.TWILIO_ACCOUNT_SID,
	AUTH_TOKEN: "c1be285ec1e7d66736571b0584b3608f",//process.env.TWILIO_AUTH_TOKEN,
	TWILIO_NUMBER: "+14439927056",//process.env.TWILIO_NUMBER,
	MONGODBURI: process.env.MONGOURI || "mongodb://127.0.0.1:27017/sms-app",
};
