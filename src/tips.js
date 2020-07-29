import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bar from './nav.js';
import NavBarLower from './NavBarLower';


class Lucky extends React.Component {
	render() {
		return (
      
      <div><h1>Quick Tips</h1>
      

 <ol>
  <li>Before you get started entering sweepstakes we suggest getting a dedicated email for your entries. It will be easier to sort out why you are getting certian emails, winning anncouments if you get lucky and unsubscring from mailing list you dont want to be on.  </li>
  <li> Unsubscribe from emails you dont want to get anymore. Once you enter some contest you might (most likely will) start to get a lot of advertisement emails. If you dont want them anymore just click the unsubscribe link at the bottom of most emails. Even LuckStreak's emails have a simple unsubscribe button located at the bottom of every email.</li>
  <li>Do use your real shipping address either home or office. Small prizes get mailed out without informing you and big prize anncouments might come in the shape of a letter. I have gotten small prizes in the mail like candy and permanet markers.</li>
  <li>Read the rules! You dont want to do somehting to get disqualified if you do win for using something like a fake name or anything else that might be against the rules.</li>
  <li>Submit as often as you can for better odds!</li>


</ol> 


        <NavBarLower></NavBarLower>
        </div>

    );

  }

}





export default Lucky