import React, {useState} from 'react';
import API from '../../API';
import { Wrapper, StyledField, FieldBox, StyledTextArea, StyledButton, ErrorMessage} from './ContactForm.styles';

const ContactForm = () => {
    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    const [nameInputError, setNameInputError] = useState(false);
    const [emailInputError, setEmailInputError] = useState(false);
    const [messageInputError, setMessageInputError] = useState(false);

    const fetchFormData = async (formData) => {
        try {
            setError(false);
            await API.fetchFormData(
                formData.name,
                formData.email,
                formData.message
            );

        } catch (error) {
            setError(true);
        }
    }

    const handleName = target => {
        if ((target.value.length < 3)
        || (typeof target.value === 'number')){
            setNameInputError(true);
        } else {
            setNameInputError(false);
            setData(values => ({...values, [target.name] : target.value }))
        }
    }

    const handleEmail = target => {
        const mailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if ((target.value.length < 7) 
            || (target.value.match(mailRegEx) === null)) {
            setEmailInputError(true);
        } else {
            setEmailInputError(false);
            setData(values => ({...values, [target.name] : target.value }))
        }
    }

    const handleMessage = target => {
        if (target.value.length < 50) {
            setMessageInputError(true);
        } else {
            setMessageInputError(false);
            setData(values => ({...values, [target.name] : target.value }))
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (nameInputError && emailInputError && messageInputError) {
            setError(true);
            return;
        } else {
            fetchFormData(data);
            return;
        }
    }

    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <FieldBox>
                    <div>
                        <StyledField
                            type="text"
                            placeholder="Name"
                            onChange={(e) => handleName(e.target)}
                            error={nameInputError}
                        />
                        {nameInputError && <ErrorMessage>Name must contain at least 3 characters</ErrorMessage>}
                    </div>
                    <div>
                        <StyledField
                            type="text"
                            placeholder="Email"
                            onChange={(e) => handleEmail(e.target)}
                            error={emailInputError}
                        />
                        {emailInputError && <ErrorMessage>Invalid email</ErrorMessage>}
                    </div>
                </FieldBox>
                <StyledTextArea
                    type="text"
                    placeholder="Message..."
                    onChange={(e) => handleMessage(e.target)}
                    error={messageInputError}
                />
                {messageInputError && <ErrorMessage>Message must contain at least 50 characters</ErrorMessage>}
                <StyledButton onClick={handleSubmit}>Send</StyledButton>
                {error && <ErrorMessage>Cannot send form</ErrorMessage>}
            </form>
        </Wrapper>
    );
}

export default ContactForm;