import React from 'react';
import Header from './Header';
import About from './About';
import BookTable from './BookTable';
import Footer from './Footer';
import Ingredients from './Ingredients';
import Menu from './Menu';
import Rewiews from './Rewiews';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Ingredients />
      <Menu />
      <Rewiews />
      <BookTable />
      <Footer />
    </div>
  );
}

export default App;
