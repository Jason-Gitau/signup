import React from 'react';

const AboutApp = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-header bg-primary text-white text-center">
              <h2>About This App</h2>
            </div>
            <div className="card-body">
              <h5 className="card-title">Welcome to Our Application!</h5>
              <p className="card-text">
                This app is designed to help users easily manage and track their tasks. 
                It provides a simple, clean interface with all the necessary features for productivity. 
                We hope this app helps you stay organized and efficient.
              </p>
              <h6>Key Features:</h6>
              <ul>
                <li>Task creation and management</li>
                <li>Real-time updates</li>
                <li>Simple, user-friendly design</li>
              </ul>
              <p>Thank you for using our app! If you have any questions or feedback, feel free to reach out.</p>
            </div>
            <div className="card-footer text-muted text-center">
              <small>&copy; 2025 Jason Mbugua</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutApp;
