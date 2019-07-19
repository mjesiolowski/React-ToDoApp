import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="container">
    <p className="text">404</p><Link className="button link" to="/">Go home</Link>
  </div>
);

export default NotFoundPage;
