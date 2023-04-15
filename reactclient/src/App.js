import React from 'react';
import Contacts from './components/Contacts';


function App() {
  return (
    <div className="container-fluid">
      <nav>
        <div className='nav-wrapper center-align'>
          <a href='/' className='brand-logo'>Contact Page</a>

        </div>
      </nav>
      <div className='row'>
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
