// // /services/otpService.js
// const twilio = require('twilio');
// const crypto = require('crypto');

// // Twilio Credentials
// const accountSid = 'your_account_sid';
// const authToken = 'your_auth_token';
// const client = new twilio(accountSid, authToken);

// // OTP generate karna
// exports.generateOtp = () => {
//   const otp = crypto.randomInt(100000, 999999);  // Random 6-digit OTP
//   return otp;
// };

// // OTP ko SMS ke through bhejna
// exports.sendOtp = async (mobile, otp) => {
//   try {
//     const message = await client.messages.create({
//       body: `Your OTP is: ${otp}`,
//       from: '+your_twilio_phone_number',  // Twilio se liya gaya phone number
//       to: mobile  // User ka mobile number
//     });
//     console.log(`OTP sent: ${message.sid}`);
//   } catch (err) {
//     console.error('Error sending OTP:', err);
//     throw new Error('Error sending OTP');
//   }
// };

// // /services/otpService.js
// const db = require('../config/db');  // DB connection import karna
// const crypto = require('crypto');

// // OTP generate karna
// exports.generateOtp = () => {
//   const otp = crypto.randomInt(100000, 999999);  // Random 6-digit OTP
//   return otp;
// };

// // OTP ko SMS ke through bhejna aur database mein store karna
// exports.sendOtp = async (mobile, otp) => {
//   try {
//     // SMS bhejna (Twilio ya kisi aur API ke through)
//     // (Aapne jo code likha hai usme yeh part add karna hoga)

//     // OTP ko database mein store karna
//     const sql = "INSERT INTO otp_verification (mobile, otp) VALUES (?, ?)";
//     db.query(sql, [mobile, otp], (err, result) => {
//       if (err) {
//         console.error('Error storing OTP in database:', err);
//         throw new Error('Error storing OTP in database');
//       } else {
//         console.log('OTP stored in database:', result);
//       }
//     });

//     // OTP bhejne ka logic (Twilio ya koi aur API)
//     // Is part ko apne SMS service integration se replace karen
//     console.log(`Sending OTP ${otp} to ${mobile}`);
//   } catch (err) {
//     console.error('Error sending OTP:', err);
//     throw new Error('Error sending OTP');
//   }
// };

// // Error capture aur response send karna
// exports.sendOtp = async (mobile, otp) => {
//     try {
//       // SMS bhejne ka code aur database mein OTP store karna
//       console.log(`Sending OTP ${otp} to ${mobile}`);
//       // Example Twilio/SMS code yahan
  
//       res.status(200).send('OTP sent successfully');
//     } catch (err) {
//       console.error('Error:', err);
//       res.status(500).send('Error sending OTP');
//     }
//   };
  