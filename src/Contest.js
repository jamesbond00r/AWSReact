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

 <Table striped bordered hover>
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
      <td><a href="https://www.instructables.com/contest/frozentreats2020/"> </a></td>
      <td> </td>
      <td><a href="https://www.instructables.com/contest/frozentreats2020/"> <Button variant="info">Contest Rules</Button></a></td>
      <td></td>
    </tr>
    <tr>
      
<td>Sweepstakes</td>
      <td><a href="https://www.instructables.com/contest/TinkercadStudents/"> </a></td>
      <td>
 </td>
      <td><a href="https://www.instructables.com/contest/TinkercadStudents/"> <Button variant="info">Contest Rules</Button></a></td>
      <td></td>

    </tr>
    <tr>
      <td>Sweepstakes</td>
      <td><a href="https://www.instructables.com/contest/rainbow2020/"></a></td>
      <td></td>
      <td><a href="https://www.instructables.com/contest/rainbow2020/"> <Button variant="info">Contest Rules</Button></a></td>
      <td></td>
    </tr>

    <tr>
      <td>Sweepstakes</td>
      <td><a href="https://www.instructables.com/contest/metal2020/"> </a></td>
      <td></td>
      <td><a href="https://www.instructables.com/contest/metal2020/"> <Button variant="info">Contest Rules</Button></a></td>
      <td></td>
    </tr>
  </tbody>
</Table>

<Table striped bordered hover>
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
      <td><a href="https://www.instructables.com/contest/frozentreats2020/"> <Button variant="info">Contest Rules</Button></a></td>
      <td>7/19/2020</td>
    </tr>
    <tr>
      
<td>Contest</td>
      <td><a href="https://www.instructables.com/contest/TinkercadStudents/">Tinkercad Student Design Contest!  </a></td>
      <td>The Tinkercad Student Design Contest is for all students who are using Tinkercad. To enter, you simply need to post an instructable showing how you made a Tinkercad 3D design as part of your homeschooling experience. No 3D printer is required!
 </td>
      <td><a href="https://www.instructables.com/contest/TinkercadStudents/"> <Button variant="info">Contest Rules</Button></a></td>
      <td>8/10/2020</td>

    </tr>
    <tr>
      <td>Contest</td>
      <td><a href="https://www.instructables.com/contest/rainbow2020/">Instructables rainbow2020 </a></td>
      <td>You can taste, wear, decorate with, or just be the rainbow in the Colors of the Rainbow Contest! Make a project that uses all or just one of the colors of the rainbow (Red, Orange, Yellow, Green, Blue, Indigo, and Violet) for a chance to win an Amazon Gift Card. There is a grand prize winner, a winner for each color, and 3 winners for use of rainbow.</td>
      <td><a href="https://www.instructables.com/contest/rainbow2020/"> <Button variant="info">Contest Rules</Button></a></td>
      <td>8/17/2020</td>
    </tr>

    <tr>
      <td>Contest</td>
      <td><a href="https://www.instructables.com/contest/metal2020/">Instructables Metal Work Contest </a></td>
      <td>Cut, bend, weld, forge and fasten: It's time to make something out of metal!

All projects that include the use of metal are eligible, and there is a special judges' prize for the most creative and impressive welding project!</td>
      <td><a href="https://www.instructables.com/contest/metal2020/"> <Button variant="info">Contest Rules</Button></a></td>
      <td>8/17/2020</td>
    </tr>
  </tbody>
</Table>

 <NavBarLower></NavBarLower>

    </div>
    );
  }
}




export default Contest