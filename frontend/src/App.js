import React from 'react';
import Navigation from './routes';
import './App.css';
import './styles/index.css';
import { ThemeProvider } from './components/hooks/useContextHook/create';
import UseContextHook from './components/hooks/useContextHook/useContextHook';

function App() {
    return (
        <>
        <ThemeProvider>
            <Navigation />
        <UseContextHook />
        </ThemeProvider>
        </>
    );
}

export default App;