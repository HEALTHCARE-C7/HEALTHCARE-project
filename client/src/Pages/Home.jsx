import React, { Component, useState } from 'react';
import style from '../CSS/Home.css';

export class Home extends Component {
  render() {
    return (
      <main className="container test"> 
        <div className="row row-home">
          <div className="col row-home">
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
          </div>
        </div>
        <div className="container ">
                {/* <div className="text"> <h2>Our results in numbers</h2></div> */}
                    <div className="row">
                      <div className="col-3">                        
                        <div className="col-3">           
                            {/* <p>24/7 Search</p> */}
                            <p>99% Customer satisfaction</p>      
                        </div>
                        <div className="col-3">
                          <p>15k Online Patients</p>            
                        </div>
                        <div className="col-3">
                        <p>12k Patients Recovered</p>
                        </div>
                        <div className="col-3">
                          <p>240% Company growth</p>
                        </div>
                      

                      </div>

                </div>
        </div>
        {/* <p>You have lots of reasons to choose us</p> */}
        {/* Integrate FindADoctor component here */}
        <div className="row">
          <div className="col">
            <FindADoctor />
          </div>
        </div>

        {/* TwoColumnLayout component */}
        <div className="row">
          <div className="col Grid"> {/* Apply Grid class */}
            <div className="TextWrapper"> {/* Apply TextWrapper class */}
              <h2>You have lots of reasons to choose us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit
                phasellus mollis sit aliquam sit nullam.
              </p>
              <button>Get started</button>
              <button>Talk to sales</button>
            </div>
            <div className="ImageWrapper"></div> {/* Apply ImageWrapper class */}
          </div>
        </div>
        
      
        {/* Add ServicesPage component here */}
        <ServicesPage />
        <TeamMembers />
        <Testimonials />
         
        <header>
          <div className="title">
            <h1>Trusted by 10,000+ companies around the world</h1>
          </div>
          {/* TopIcons component */}
          <div className="top-icons">
  Facebook
  YouTube
  Pinterest
  Twitch
  Webflow
</div>

          {/* SubscribeBar component */}
          <div className="subscribe-bar">
            <p>Subscribe to our newsletter</p>
            <div className="input-field">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </header>
        <Icons />
        
        {/* <div className="icons-container">
      <div className="icon-row">
        <div className="items-container">
          <p>Product</p>
          <p>Company</p>
          <p>Support</p>
          <p>Getting started</p>
        </div>
        <div className="items-container">
          <p>Features</p>
          <p>About</p>
          <p>Pricing</p>
          <p>Contact us</p>
        </div>
        <div className="items-container">
          <p>Help center</p>
          <p>Case studies</p>
          <p>Careers</p>
          <p>Server status</p>
        </div>
        <div className="items-container">
          <p>Reviews</p>
          <p>Culture</p>
          <p>Report a bug</p>
          <p>Updates</p>
        </div>
      </div>
      <div className="icon-row">
        <div className="items-container">
          <p>Blog</p>
          <p>Chat support</p>
          <p>Email:</p>
          <p>hello@healthcare.co</p>
        </div>
        <div className="items-container">
          <p>Phone:</p>
          <p>+1 212 123 4567</p>
          <p>Address:</p>
          <p>
            555 Thomson Avenue, 1st Floor
            <br />
            New York, NY 10001
          </p>
        </div>
      </div>
    </div> */}
      </main>
    );
  }
}

const FindADoctor = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [specialities, setSpecialities] = useState([]);
  const [doctors] = useState([
    { name: 'Dr. Jane Smith', speciality: 'Cardiology', available: true },
    { name: 'Dr. Bob Johnson', speciality: 'Dermatology', available: false },
    { name: 'Dr. Alice Williams', speciality: 'Neurology', available: true },
  ]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSpecialityChange = (selectedSpecialities) => {
    setSpecialities(selectedSpecialities);
  };

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearchQuery = doctor.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpeciality =
      specialities.length === 0 || specialities.includes(doctor.speciality);
    return matchesSearchQuery && matchesSpeciality;
  });

  return (
    <div>
      <h1>Find A Doctor</h1>
      <SearchBar onSearch={handleSearch} />
      <SpecialityFilter onSpecialityChange={handleSpecialityChange} />
      <DoctorList doctors={filteredDoctors} />
    </div>
  );
};

const DoctorList = ({ doctors }) => {
  return (
    <ul>
      {doctors.map((doctor, index) => (
        <li key={index}>
          {doctor.name} - {doctor.speciality} - {doctor.available ? 'Available' : 'Not Available'}
        </li>
      ))}
    </ul>
  );
};

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // get the search query from the input field
    const searchQuery = event.target.elements.search.value;
    // call the onSearch function with the search query
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="search" />
      <button type="submit">Search</button>
    </form>
  );
};

const SpecialityFilter = ({ onSpecialityChange }) => {
  const handleSpecialityChange = (event) => {
    // get the filtered specialities
    const filteredSpecialities = Array.from(event.target.selectedOptions)
      .map((option) => option.value)
      .filter((speciality) => speciality !== '');
    // call the onSpecialityChange function with the filtered specialities
    onSpecialityChange(filteredSpecialities);
  };

  return (
    <select multiple onChange={handleSpecialityChange}>
      <option value="">All</option>
      <option value="Cardiology">Cardiology</option>
      <option value="Dermatology">Dermatology</option>
      <option value="Neurology">Neurology</option>
      {/* ...other specialities */}
    </select>
  );
};

function ServicesPage() {
  return (
    <div className="services-page">
      <h1> Services we provide</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
        elementum tempus hac tellus libero accumsan.
      </p>
      <div className="service-cards-container">
        <div className="card">
          <h3>Dental treatments</h3>
          <img src="<image URL>" alt="Dental treatments" />
        </div>
        <div className="card">
          <h3>Bones treatments</h3>
          <img src="<image URL>" alt="Bones treatments" />
        </div>
        <div className="card">
          <h3>Diagnosis</h3>
          <img src="<image URL>" alt="Diagnosis" />
        </div>
        <div className="card">
          <h3>Cardiology</h3>
          <img src="<image URL>" alt="Cardiology" />
        </div>
        <div className="card">
          <h3>Surgery</h3>
          <img src="<image URL>" alt="Surgery" />
        </div>
        <div className="card">
          <h3>Eye care</h3>
          <img src="<image URL>" alt="Eye care" />
        </div>
      </div>
    </div>
  );
}
function TeamMembers() {
  return (
    <div className="team-member">
      <h1>Meet our team members</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
        elementum tempus hac tellus libero accumsan.
      </p>
      <div className="service-cards-container members">
        <div className="card">
          <img src= "<image URL>" alt="John Carter: CEO & Co-Founder" />
          <h3>John Carter</h3>
          <p>CEO & Co-Founder</p>
        </div>
        <div className="card">
          <img src="<image URL>"  alt="Sophie Moore: Dental Specialist" />
          <h3>Sophie Moore</h3>
          <p>Dental Specialist</p>
        </div>
        <div className="card">
          <img src="<image URL>"  alt="Matt Cannon: Orthopedic" />
          <h3>Matt Cannon</h3>
          <p>Orthopedic</p>
        </div>
        <div className="card">
          <img src="<image URL>"  alt="Andy Smith: Brain Surgeon" />
          <h3>Andy Smith</h3>
          <p>Brain Surgeon</p>
        </div>
        <div className="card">
          <img src="<image URL>"  alt="Lily Woods: Heart Specialist" />
          <h3>Lily Woods</h3>
          <p>Heart Specialist</p>
        </div>
        <div className="card">
          <img src= "<image URL>"  alt="Patrick Meyer: Eye Specialist" />
          <h3>Patrick Meyer</h3>
          <p>Eye Specialist</p>
        </div>
      </div>
    </div>
  );
}
function Testimonials() {
  return (
    <div className="testimonials">
      <h1>Testimonials</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit semperdalar
        elementum tempus hac tellus libero accumsan
      </p>
      <div className="testimonial-cards-container">
        <div className="card">
          <img
            src="https://via.placeholder.com/200x200.png?text=John+Carter"
            alt="John Carter"
          />
          <h3>"An amazing service"</h3>
          <p>
            Lorem ipsum dolor sit ametll col consectetur adipiscing lectus
            anunc mauris scelerisque sed egestas.
          </p>
          <p>
            John Carter 
            CEO at Google
            {/* <br /> */}
          </p>
        </div>
        <div className="card">
          <img
            src="https://via.placeholder.com/200x200.png?text=Sophie+Moore"
            alt="Sophie Moore"
          />
          <h3>"One of a kind service"</h3>
          <p>
            Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra
            diam sit amet nisl suscipit adipis
          </p>
          <p>
            Sophie Moore
            MD at Facebook
             {/* <br /> */}
          </p>
        </div>
        <div className="card">
          <img
            src="https://via.placeholder.com/200x200.png?text=Andy+Smith"
            alt="Andy Smith"
          />
          <h3>"The best service"</h3>
          <p>
            Convallis posuere morbi leo una molestie at elementum eu
            facilisis sapien pellentesque habitant
          </p>
          <p>
            Andy Smith 
            CEO at Dot Austere
            {/* <br /> */}
          </p>
        </div>
      </div>
    </div>
  );
}


function Icons() {
  
      return (
        <div className="main-container icons">
          <div className="icons-container">
            <div className="logo-container icons">
              <div className="logo-text">
                <h1>Healthcare</h1>
                <p>Copyright © 2022 BRIX Templates</p>
                <p>All Rights Reserved</p>
              </div>
            </div>
            <div className="icon-row">
              <div className="items-container">
                <p>Product</p>
                <p>Company</p>
                <p>Support</p>
                <p>Getting started</p>
              </div>
              <div className="items-container">
                <p>Features</p>
                <p>About</p>
                <p>Pricing</p>
                <p>Contact us</p>
              </div>
              <div className="items-container">
                <p>Help center</p>
                <p>Case studies</p>
                <p>Careers</p>
                <p>Server status</p>
              </div>
              <div className="items-container">
                <p>Reviews</p>
                <p>Culture</p>
                <p>Report a bug</p>
                <p>Updates</p>
              </div>
            </div>
            <div className="icon-row">
              <div className="items-container">
                <p>Blog</p>
                <p>Chat support</p>
                <p>Email:</p>
                <p>hello@healthcare.co</p>
              </div>
              <div className="items-container">
                <p>Phone:</p>
                <p>+1 212 123 4567</p>
                <p>Address:</p>
                <p>
                  555 Thomson Avenue, 1st Floor
                  <br />
                  New York, NY 10001
                </p>
              </div>
            </div>
          </div>
        </div>
      
      
    
  );
}

export default Home;
