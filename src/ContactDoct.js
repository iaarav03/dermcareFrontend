import React, { useState, useEffect } from 'react';
import axios from 'axios';
import myimage from './assets/dp.jpg';
import AddPatient from './Doctor';

const Appointment = () => {
  const [isAddPatientModalOpen, setAddPatientModalOpen] = useState(false);
  // const [patients, setPatients] = useState([]);
  // const[show,setShow]=useState(false);

  const toggleAddPatientModal = () => {
    setAddPatientModalOpen(!isAddPatientModalOpen);
  };

//   const showAllPatients = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/pdata');
//       setPatients(response.data);
//     } catch (error) {
//       console.error('Error fetching patient details:', error);
//     }
//   };

  // useEffect(() => {
  //   showAllPatients();
  //   setShow
  // }, []);

  return (
    <div className="md:flex  md:flex-row ">
      <div className="md:min-h-screen md:w-1/2 bg-gradient-to-r from-green-400 to-purple-600">
        <img src={myimage} alt="My Image" className="object-cover h-full w-full" />
      </div>
      <div className="md:min-h-screen md:w-1/2 bg-gray-200 p-8 ">
        <div className="mt-8">
          <h1 className="text-4xl font-serif text-gray-800">Patients Dashboard</h1>

          <div className="flex mt-8">
            {/* <button
              className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-full mr-4"
              onClick={showAllPatients}
            >
              Show Patients
            </button> */}

            <button
              className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-full"
              onClick={toggleAddPatientModal}
            >
              Book An Appointment with Doctor
            </button>
          </div>

          {/* {patients.length > 0 &&  (
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Patient Details:</h2>
              <ul className="list-disc list-inside">
                {patients.map((patient) => (
                  <li key={patient._id} className="text-gray-600">
                    {patient.name} - {patient.email}
                  </li>
                ))}
              </ul>
            </div>
          )} */}

          {isAddPatientModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="bg-white shadow-md rounded-lg p-8 w-96 z-10">
                <AddPatient onClose={toggleAddPatientModal} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
