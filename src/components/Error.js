import React from 'react'
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const Error = () => {
    
  return (
    <div>
        <Alert variant="danger" dismissible>
            <Alert.Heading>Oh snap! You got an 404 error!</Alert.Heading>
            <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
            </p>
        </Alert>
    </div>
  )
}

export default Error