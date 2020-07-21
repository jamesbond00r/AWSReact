import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarLower from './NavBarLower';
import Table from 'react-bootstrap/Table';

class Contest extends React.Component {
	render() {
		return (
      <div>
 <h1 className="CoSw">Contest and Sweepstakes</h1>

 <Table striped bordered hover >
  <thead>
    <tr>
      <th>Type</th>
      <th>Site</th>
      <th>Description</th>
      <th>Rules</th>
      <th>End</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Sweepstakes</td>
      <td><a href="https://www.hgtv.com/design/ultimate-house-hunt"> HGTV Ultimate House Hunt</a></td>
      <td> Join HGTV on the Ultimate House Hunt. Tour amazing homes for sale in each of the 8 categories and vote for your favorites. After you vote, be sure to enter the sweepstakes for your chance to win $10,000.</td>
      <td><a href="https://www.hgtv.com/design/ultimate-house-hunt/sweepstakes"> <Button variant="info">Sweepstakes Rules</Button></a></td>
      <td>8/04/2020</td>
    </tr>
    <tr>
      
<td>Sweepstakes</td>
      <td><a href="https://www.travelchannel.com/sweepstakes/dreaming-of-travel">Travel Channel Dreaming of Travel Sweepstakes </a></td>
      <td>You could win $10,000 CASH! Enter daily through July 31 at 8:59 am EDT for your chance to win
 </td>
      <td><a href="https://www.travelchannel.com/sweepstakes/"> <Button variant="info">Sweepstakes Rules</Button></a></td>
      <td>07/31/2020</td>

    </tr>
    <tr>
      <td>Sweepstakes</td>
      <td><a href="https://www.foodnetwork.com/sponsored/sweepstakes/best-thing-i-ever-ate-sweepstakes">Food Network All Star Best Thing I Ever Ate</a></td>
      <td>Watch All-Star Best Thing I Ever Ate every Monday at 9|8c and look for the special code to enter for a chance to win $5,000 every week! </td>
      <td><a href="https://www.foodnetwork.com/allstargiveaway"> <Button variant="info">Sweepstakes Rules</Button></a></td>
      <td>09/14/2020</td>
    </tr>

    <tr>
      <td>Sweepstakes</td>
      <td><a href="http://vmas.post-it.com/">3M Company Post-it back to School VMAs Sweepstakes </a></td>
      <td>3M Company's Post-it Back to School VMAs Sweepstakes is giving you the chance to win a trip to the MTV Video Music Awards, a prize worth $3,700. Plus, six more winners will each receive a gift card worth $250. </td>
      <td><a href="http://vmas.post-it.com/docs/OfficialRules.pdf"> <Button variant="info">Sweepstakes Rules</Button></a></td>
      <td>09/30/2020</td>
    </tr>
     <tr>
      <td>Sweepstakes</td>
      <td><a href="https://f150inyourdriveway.com/registration">Park The All-New F-150 In Your Driveway</a></td>
      <td>ENTER FOR A CHANCE TO WIN THE ALL-NEW 2021 F-150</td>
      <td><a href="https://f150inyourdriveway.com/assets/pdfs/en/rules.pdf"> <Button variant="info">Sweepstakes Rules</Button></a></td>
      <td>12/31/2020</td>
    </tr>
  </tbody>
</Table>

<Table striped bordered hover className="tableSpace">
  <thead>
    <tr>
      <th>Type</th>
      <th>Site</th>
      <th>Description</th>
      <th>Rules</th>
      <th>End</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Contest</td>
      <td><a href="https://www.instructables.com/contest/frozentreats2020/">Instructables Forzen Treats </a></td>
      <td>Make those hot summer days more enjoyable with a frozen treat! Share your favorite recipes for frozen treats for a chance to<b> win an Amazon Gift Card!</b> </td>
      <td><a href="https://www.instructables.com/contest/frozentreats2020/"> <Button variant="warning">Contest Rules</Button></a></td>
      <td>7/19/2020</td>
    </tr>
    <tr>
      
<td>Contest</td>
      <td><a href="https://www.instructables.com/contest/TinkercadStudents/">Tinkercad Student Design Contest!  </a></td>
      <td>The Tinkercad Student Design Contest is for all students who are using Tinkercad. To enter, you simply need to post an instructable showing how you made a Tinkercad 3D design as part of your homeschooling experience. No 3D printer is required!
 </td>
      <td><a href="https://www.instructables.com/contest/TinkercadStudents/"> <Button variant="warning">Contest Rules</Button></a></td>
      <td>8/10/2020</td>

    </tr>
    <tr>
      <td>Contest</td>
      <td><a href="https://www.instructables.com/contest/rainbow2020/">Instructables rainbow2020 </a></td>
      <td>You can taste, wear, decorate with, or just be the rainbow in the Colors of the Rainbow Contest! Make a project that uses all or just one of the colors of the rainbow (Red, Orange, Yellow, Green, Blue, Indigo, and Violet) for a chance to win an Amazon Gift Card. There is a grand prize winner, a winner for each color, and 3 winners for use of rainbow.</td>
      <td><a href="https://www.instructables.com/contest/rainbow2020/"> <Button variant="warning">Contest Rules</Button></a></td>
      <td>8/17/2020</td>
    </tr>

    <tr>
      <td>Contest</td>
      <td><a href="https://www.instructables.com/contest/metal2020/">Instructables Metal Work Contest </a></td>
      <td>Cut, bend, weld, forge and fasten: It's time to make something out of metal!

All projects that include the use of metal are eligible, and there is a special judges' prize for the most creative and impressive welding project!</td>
      <td><a href="https://www.instructables.com/contest/metal2020/"> <Button variant="warning">Contest Rules</Button></a></td>
      <td>8/17/2020</td>
    </tr>
  </tbody>
</Table>

<div className="space">

</div>
 <NavBarLower></NavBarLower>

    </div>
    );
  }
}




export default Contest