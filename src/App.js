import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Team from './components/Team';
import Form from './components/Form'
import { Form as SemForm } from 'semantic-ui-react';

export default function App(props) {
  const [members, setMembers] = useState([
    
  ]);


  
  return(
    <div>
      <div>
    <Form saveUser={setMembers} />
        {members.map((team, index) => (
          <Team
          key={index}
          index={index}
          team={team.text}
          />
        ))}
      </div>
    </div>
  )
}