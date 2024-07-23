import React from 'react';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import Login from '../app/components/Login';

const LoginPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Login />
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
