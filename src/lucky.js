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
      
      <div className="lucky"><h1>Sign up for lucky emails</h1
      >
      <div><h4>"The best luck of all is the luck you make for yourself"-Douglas MacArthur</h4></div>
      <div>

      <p>Do you like playing games and the chance to win prizes?</p>
      <p>Looking for something new to add some excitement to your inbox</p>
      <p>Want to add more luck to you day?</p>

      <p>Sign up for lucky emails and get new contest and sweepstakes sent to your email! Unsubscribe anytime!</p>

      </div>

 <Mailchimp

        action="https://luckystreak.us17.list-manage.com/subscribe/post?u=05cdc8d7a7546cc448d4fc571&amp;id=712eeb4f81"
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
       <div> <p> We wont blow up your inbox  with daily emails and drive you nuts and we wont sell your information to anyone. Just a small site making the internet a little more fun.</p>
        </div>
        <NavBarLower></NavBarLower>
        </div>

    );

  }

}





export default Lucky