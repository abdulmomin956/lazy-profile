import { useEffect, useState } from 'react';
import './App.css';
import { LoadingProfile } from './LoadingProfile';
import Profile from './Profile';




function App() {



  return (
    <div className="App">
      {/* <LoadingProfile /> */}
      <Profile />
    </div>
  );
}

export default App;
