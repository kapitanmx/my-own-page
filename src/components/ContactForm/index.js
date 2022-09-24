import React from 'react';
import API from '../../API';
import { Wrapper, StyledField, StyledTextArea, StyledButton, ErrorMessage} from './ContactForm.styles';
import { Formik, Field, Form } from 'formik';

const ContactForm = () => {
    return (
        <Wrapper>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: '',
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field 
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First name"
                    />
                    <label htmlFor="lastName">Last Name</label>
                    <Field 
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Last name"
                    />
                    <label htmlFor="email">Email</label>
                    <Field
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                    />
                    <label htmlFor="message">Message</label>
                    <Field
                        type="text"
                        id="message"
                        name="message"
                        placeholder="Message..."
                    />
                    <StyledButton type="submit">Submit</StyledButton>
                </Form>
            </Formik>
        </Wrapper>
    );
}

export default ContactForm;