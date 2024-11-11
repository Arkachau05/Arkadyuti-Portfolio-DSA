import React from 'react';
import Skillset from './Skillset';
import Skillset2 from './Skillset2';
import Hero from './Hero';
import About from './About';
import Certificates from './Certificates';
import Footer from './Footer';
import Contact from './Contact';
import Signature from './Signature';
import Ppt from './Ppt';
import Video from './Video';
import LabExperiment from './LabExp';
import FloatingButton from './Button';
import ResumeSection from './Resume';

const App = () => {
  return (
    <div className="bg-black text-white font-sans">
      
<Hero/>
<ResumeSection/>
<About/>
<Skillset/>
<Skillset2/>
<LabExperiment/>
<Certificates/>
<Ppt/>
<Video/>
<Signature/>  
<Contact/>    
<Footer/>
<FloatingButton/>

    </div>
  );
}

export default App;
