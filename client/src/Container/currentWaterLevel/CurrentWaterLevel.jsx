import React, { Component } from "react";
import apiAddress from "../../util/apiPath";
import "materialize-css";
class CurrentWaterLevel extends Component {
  constructor(props) {
    super(props);

    this.state = { value: "current", waterInfo: [] };

    this._handleSelectChange = this._handleSelectChange.bind(this);
    this.apiFetch = this.apiFetch.bind(this);
  }

  _handleSelectChange(e) {
    this.setState({ value: e.target.value });
    console.log(e.target.value);
  }
  _handleOnSelect(e) {}
  apiFetch = () => {
    fetch(`${apiAddress}/water/getall`)
      .then(res => {
        if (res.ok) return res.json();
      })
      .then(data => {
        let water = [];
        for (let i = 0; i < data.length; i++) {
          water.push({
            _id: data[i]._id,
            createdAt: data[i].createdAt,
            laboSensor_level: data[
              i
            ].laboSensor_level.$numberDecimal.toString(),
            batasanSensor_level: data[
              i
            ].batasanSensor_level.$numberDecimal.toString()
          });
        }
        this.setState({ waterInfo: water });
        console.log(this.state.waterInfo[0]);
      })
      .catch(error => {
        console.log(error);
      });
  };
  componentDidMount() {
    this.apiFetch();
  }

  render() {
    const { value, waterInfo } = this.state;

    return (
      <div
        className="col s12 m6 l4"
        style={{ paddingLeft: "10px", flexGrow: "2" }}
      >
        <h4>Water Level</h4>
        <div className="input-field selected">
          <select value={value} onChange={this._handleSelectChange}>
            <option value="" disabled>
              Please Choose One
            </option>
            <option value="current">Current</option>
            <option value="pastWeek">Past Week</option>
            <option value="pastMonth">Past Month</option>
            <option value="pastYear">Past Year</option>
            <option value="pastAll">Past All</option>
          </select>
        </div>
        <table>
          <thead>
            <tr>
              <th>Sapang Labo Sensor</th>
              <th>Batasan Bridge Sensor</th>
            </tr>
          </thead>
          <tbody>
            {waterInfo.map(water => (
              <tr>
                <td key="batasan">{water.laboSensor_level}</td>
                <td key="labo">{water.batasanSensor_level}</td>
                <td>{water.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CurrentWaterLevel;
