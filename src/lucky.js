import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bar from './nav.js';
import NavBarLower from './NavBarLower';
import Mailchimp from 'react-mailchimp-form';


class Lucky extends React.Component {
	render() {
		return (
      <div>
 <Mailchimp
        action="https://protonmail.us10.list-manage.com/subscribe/post?u=901a183ea4387919f46d5e0b4&amp;id=46fa43a086"
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
          }
        ]}

         // Change predetermined language
  messages = {
    {
      sending: "Sending...",
      success: "Thank you for subscribing!",
      error: "An unexpected internal error has occurred.",
      empty: "You must write an e-mail.",
      duplicate: "Too many subscribe attempts for this email address",
      button: "Subscribe!"
    }
  }
        />
        <NavBarLower></NavBarLower>
        </div>

    );

  }

}





export default Lucky