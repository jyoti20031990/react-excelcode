import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import ReactToExcel from 'react-html-table-to-excel';
import ExcelReader from './ExcelReader';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
   <table id="table-to-xls">
  <tr>
    <th>Name:</th>
    <td>ABC</td>
  </tr>
  <tr>
    <th>Registration date:</th>
    <td>04-sep-1990</td>
  </tr>
   <tr>
    <th>a2:</th>
    <td>1</td>
  </tr>
   <tr>
    <th>B2:</th>
    <td>90</td>
  </tr>
  
</table>
<br/>
<ReactToExcel className="btn"
table="table-to-xls" filename="excelfile" sheet="sheet 1"
buttonText="EXPORT" />
 <ExcelReader/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
