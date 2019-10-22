import React from 'react';
import Form from '../components/Form';

export default function RegisterPage() {

  const fields = [
    {input: 'input', placeholder: 'Username', type: 'text', name: 'username'},
    {input: 'input', placeholder: 'Email', type: 'email', name: 'email'},
    /* {input: 'select', placeholder: '', type: '', name: 'team', option: ['Seleziona team', 'EAM', 'Web', 'IoT', 'Altro']}, */
    {input: 'input', placeholder: 'Password', type: 'password', name: 'password'},
    {input: 'input', placeholder: 'Conferma password', type: 'password', name: 'confirm'}
  ];
  const submitButton = 'Registrati!';
  return (
    <div className="container">
      <Form fields={fields} btn={submitButton}></Form>
    </div>
    
  )
}