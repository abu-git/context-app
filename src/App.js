import React from 'react';

import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContext from './context/AuthContext';
import BookContextProvider from './context/BookContext';


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContext>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContext>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
