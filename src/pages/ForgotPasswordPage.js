import React, { useState } from 'react';
import '../styles/FormStyle.css'; 
import PageHeader from '../components/PageHeader';

function ForgotPasswordPage() {
  const [forgotPasswordData, setFormData] = useState({
    email: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Kliknięto Przypomnij Hasło', forgotPasswordData);
  };

  return (
    <div>
      <PageHeader title="Przypomnienie hasła" />
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input className="form-field" type="email" name="email" placeholder="Wpisz email..." value={forgotPasswordData.email} onChange={handleChange} />
         <button className="form-register-button" type="submit">Przypomnij hasło</button>
      </form>
    </div>
    </div>
  );
}

export default ForgotPasswordPage;
