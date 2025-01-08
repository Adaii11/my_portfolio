import '../styles/contact.css';
import Navbar from "../components/navbar";
import PComponent from "../components/particles";
import Footer from '../components/footer';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { useState, useEffect } from 'react';




const Contact = () => {

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const [isMessageSent, setIsMessageSent] = useState(false);
    const [showMessage, setShowMessage ] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (isMessageSent) {
            console.log("show message")
            setShowMessage(true);
            
            const fadeOutTimer = setTimeout(() => {
                setShowMessage(false);
            }, 4000); //4 seconds to display message, after that fadeOut will remove text visibility

            const removeMessage = setTimeout(() => {
                setIsMessageSent(false); // this will remove message from DOM
            }, 6000); //6 seconds delay, text element will be removed. 

            return () => {
                clearTimeout(fadeOutTimer);
                clearTimeout(removeMessage);
            };
        }
      }, [isMessageSent]);


    
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            message: Yup.string()
                .min(10, 'Must be 10 characters or more')
                .required('Required'),
        }),

        onSubmit: (values, {resetForm}) => {
            // Handle form submission
            console.log("onSubmit trigger");
            console.log(values);
            console.log(serviceId, templateId, publicKey);
            
            //this part of the code needs to be changed. We will implement a backend portion of this code
            emailjs.send(serviceId, templateId, values, publicKey)
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                setIsMessageSent(true);
                console.log('success-message class | UseEffect triggered', !showMessage);
                resetForm();
            }, (error) => {
                console.error('There was an error sending the email:', error.text)
            });
        },
    });

    return (
        <div className="contact-root">
            <Navbar />
            <PComponent />
            <h1 className="header">Contact</h1>
            <p className="description">Let's build something together.<br />Provide details below and I will respond shortly.</p>
            <form className="form-container" onSubmit={formik.handleSubmit}>
                <div className="row">
                    <label className="label" htmlFor="firstName">First Name</label>
                    <input
                        className='input'
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        onFocus={ () => setIsFocused(true) }
                        onBlur={ () => setIsFocused(false) }
                    ></input>
                    {formik.errors.firstName ? <div className="error">{formik.errors.firstName}</div> : null}
                </div>
                <div className="row">
                    <label className="label" htmlFor="lastName" >Last Name</label>
                    <input
                        className='input'
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    ></input>
                    {formik.errors.lastName ? <div className="error">{formik.errors.lastName}</div> : null}
                </div>
                <div className="row">
                    <label className="label" htmlFor='email'>Email</label>
                    <input
                        className='input'
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    ></input>
                    {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                </div>
                <div className="row">
                    <label className='label' htmlFor='message'>Message</label>
                    <textarea
                        className='message'
                        id="message"
                        name="message"
                        type="message"
                        onChange={formik.handleChange}
                        value={formik.values.message}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    ></textarea>
                    {formik.errors.message ? <div className="error">{formik.errors.message}</div> : null}
                </div>
                <div className="row">
                        <div className='recaptcha-container'>

                        </div>
                        {isMessageSent && (
                            <div className={`success-message ${!showMessage ? 'fadeOut': ''}`}>
                            Thank you! Your message has been sent successfully.
                            </div>
                        )}
                        <button className="submit-form" type="submit">submit</button>
                </div>
            </form>
            
            <Footer />
        </div>
    )
}

export default Contact;