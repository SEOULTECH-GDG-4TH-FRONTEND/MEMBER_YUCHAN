// src/App.js
import React from 'react';
import Header from './components/Header';
import MemberList from './components/MemberList';
import Footer from './components/Footer';
import { MemberProvider } from './context/MemberContext';
import './App.css';

function App() {
    return (
        <MemberProvider>
            <Header />
            <MemberList />
            <Footer />
        </MemberProvider>
    );
}

export default App;
