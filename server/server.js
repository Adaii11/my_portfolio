const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const emailjs = require('emailjs-com');
const axios = require('axios');

const PORT = 5000;

const app = express();

dotenv.config();
app.use(express.json());

//variables
const apiService = process.env.EMAILJS_SERVICE_ID
const apiTemplate = process.env.EMAILJS_TEMPLATE_ID
const apiPublicKey = process.env.EMAILJS_PUBLIC_KEY
console.log()

//setup cors
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET','POST'],
    credentials: true,
}));

app.post('/', async (req, res) => {
    const { firstName, lastName, email, message } = req.body;

    //validate
    if( !firstName || !lastName || !email || !message ) {
        return res.status(400).send("invalid request payload");
    }

    const payload = {
        service_id: apiService,
        template_id: apiTemplate,
        user_id: apiPublicKey,
        template_params: {
            firstName,
            lastName,
            email,
            message,
        },
    };

    try {
        //send email using REST API
        const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', payload, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        //success response
        console.log('email sent successful: ', response.data);
        return res.status(200).json({ message: 'email sent successfully'});
    } catch (error) {
        console.error('Error sending email: ', error.response?.data || error.message);
        return res.status(500).json({ error: 'failed to send email ', details: error.repsonse?.data})
    }

});




/*
//this will make the port request and send the email
app.post('/', (req, res) => {
    console.log(req.body)
    //res.send('email recieved sucessfully!')
    const { firstName, lastName, email, message } = req.body;

    if(!email || !firstName || !lastName || !message) {
        return res.status(400).send("invalid request payload")
    } else {
        emailjs.send(apiService, apiTemplate, {
            firstName,
            lastName,
            email,
            message,
        }, apiPublicKey)
        .then(() => res.status(200).json({ message: 'email sent'}))
        .catch(err => res.status(500).json({ error: 'Email sending failed.', details: err }));
    }
})
*/

app.listen(PORT, (error) => {
    if(!error) {
        console.log(`Server is running successfully ${PORT}`)
    } else {
        console.log("Error occurred, server can't start", error);
    }
});

