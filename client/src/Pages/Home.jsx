import React, { Component } from 'react'

export class Home extends Component {
  render() {
    return (
      <main className="container">
      <div className="row">
        <div className="col">
          <h1>Providing Quality Healthcare For A Brighter And Healthy Future</h1>
          <p>
            At Our Hospital We Are Dedicated To Providing Exceptional Medical
            Care To Our Patients And Their Families. Our Experienced Team Of
            Medical Professionals, Cutting Edge Technology, And Compassionate
            Approach Make Us A Leader In The Healthcare Industry.
          </p>
          <button type="button" className="btn btn-primary">
            Appointments
          </button>
          <button type="button" className="btn btn-secondary">
            Watch Video
          </button>
          <button type="button" className="btn btn-outline-secondary">
            Find A Doctor
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Our results in numbers</h2>
          <p>24/7 Search</p>
          <p>99% Customer satisfaction</p>
          <p>15k Online Patients</p>
          <p>12k Patients Recovered</p>
          <p>240% Company growth</p>
          <p>You have lots of reasons to choose us</p>
        </div>
      </div>
    </main>
    )
  }
}

export default Home




