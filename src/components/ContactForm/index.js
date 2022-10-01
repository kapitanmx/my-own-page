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
        if (target.value.length < 3){
            setNameInputError(true);
        } else {
            setNameInputError(false);
            setData(values => ({...values, [target.name] : target.value }))
        }
    }

    const handleEmail = target => {
        const mailRegEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if ((target.value.length < 4) 
            && (!target.value.match(mailRegEx))) {
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
            setError(true)
            return;
        }
        fetchFormData(data);
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
                        {emailInputError && <ErrorMessage>Invalid email form</ErrorMessage>}
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