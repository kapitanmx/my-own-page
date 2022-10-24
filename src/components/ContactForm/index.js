import React, {useState, useRef} from 'react';
import reCAPTCHA from "react-google-recaptcha";
import API from '../../API';
import { Wrapper, StyledField, FieldBox, StyledTextArea, StyledButton, ErrorMessage} from './ContactForm.styles';

const ContactForm = () => {
    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    const [nameInputError, setNameInputError] = useState(false);
    const [emailInputError, setEmailInputError] = useState(false);
    const [messageInputError, setMessageInputError] = useState(false);
    // const captchaRef = useRef(null);
    // const token = captchaRef.current.getValue();

    const fetchFormData = async (formData) => {
        try {
            setError(false);
            await API.fetchFormData(
                formData.name,
                formData.email,
                formData.message
            );

        } catch (error) {
            setError(error => !error);
        }
    } 

    const handleName = target => {
        if (target.value.length < 3){
            setNameInputError(true);
            return;
        }
        setNameInputError(false);
        setData(values => ({...values, [target.name] : target.value }))
        return;
    }
    
    const handleEmail = target => {
        const mailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (target.value.match(mailRegEx) === null) {
            setEmailInputError(true);
            return;
        }
        setEmailInputError(false);
        setData(values => ({...values, [target.name] : target.value }))
        return;
    }

    const handleMessage = target => {
        if (target.value.length < 45) {
            setMessageInputError(true);
            return;
        }
        setMessageInputError(false);
        setData(values => ({...values, [target.name] : target.value }))
        return;
    }

    const handleSubmit = e => {
        e.preventDefault();
        // const token = captchaRef.current.getValue();
        if (nameInputError && emailInputError && messageInputError) {
            setError(true);
            return;
        }
        fetchFormData(data);
        return;
    }

    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <FieldBox>
                    <div>
                        <StyledField
                            type="text"
                            name="name"
                            placeholder="Name"
                            required minlength="3"
                            onChange={(e) => handleName(e.target)}
                            error={nameInputError}
                        />
                        {nameInputError && <ErrorMessage>Name must contain at least 3 characters</ErrorMessage>}
                    </div>
                    <div>
                        <StyledField
                            type="email"
                            name="email"
                            placeholder="Email"
                            required minlength="3"
                            onChange={(e) => handleEmail(e.target)}
                            error={emailInputError}
                        />
                        {emailInputError && <ErrorMessage>Invalid email</ErrorMessage>}
                    </div>
                </FieldBox>
                <StyledTextArea
                    type="text"
                    name="message"
                    placeholder="Message..."
                    required minlength="45"
                    onChange={(e) => handleMessage(e.target)}
                    error={messageInputError}
                />
                {messageInputError && <ErrorMessage>Message must contain at least 45 characters</ErrorMessage>}
                {/* <reCAPTCHA
                    sitekey={process.env.REACT_APP_SITE_KEY}
                    ref={captchaRef}
                /> */}
                <StyledButton onClick={handleSubmit}>Send</StyledButton>
                {error && <ErrorMessage>Cannot send form</ErrorMessage>}
            </form>
        </Wrapper>
    );
}

export default ContactForm;