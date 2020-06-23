import React from 'react';
import { ProfileType } from '../../types';
import './contact-form.css';

const ContactForm = ({ email, budget }) => {
  return (
    <>
      <h5
        className="font-header font-semibold text-front text-sm uppercase mt-12 mb-3"
        id="contact"
      >
        CONTACT
      </h5>
      <h3 className="font-bold">Send me a message</h3>
      <a className="underline" href="mailto:usmanc80@gmail.com">
        Usmanc80@gmail.com
      </a>
    </>
  );
};

ContactForm.propTypes = {
  budget: ProfileType.budget,
  email: ProfileType.email,
};

export default ContactForm;
