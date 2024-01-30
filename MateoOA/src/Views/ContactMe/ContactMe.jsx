import { useState } from 'react';
import Switch from '@mui/material/Switch';
import "./ContactMe.css"


function ContactMe() {
  const [showEnglishCV, setShowEnglishCV] = useState(false);

  const handleToggleSwitch = () => {
    setShowEnglishCV((prevValue) => !prevValue);
  };

  const languageText = showEnglishCV ? 'English' : 'Español';

  return (
    <>
        <span className='PersonalData'>
        Datos Personales: <br/>
        matossoara@gmail.com <br/>
        +54 011 4079-0510 <br/>
        Buenos Aires, Argentina
      </span>
      <div className='SwitchCV'>
        <span style={{ marginRight: '10px' }}> CV:</span>
        <Switch
          checked={showEnglishCV}
          onChange={handleToggleSwitch}
          inputProps={{ 'aria-label': 'Alternar CV' }}
          
        />
        <span style={{ marginLeft: '10px' }}>{languageText}</span>
      </div>

      <iframe
        src={showEnglishCV ? '../../../public/Mateo Ossorio Arana CV (english).pdf#toolbar=0' : '../../../public/Mateo Ossorio Arana CV.pdf#toolbar=0'}
        width="100%"
        height="900px"
        className="CV"
      ></iframe>
      
    </>
  );
}

export default ContactMe;