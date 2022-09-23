import { Outlet } from 'react-router-dom';

import './styles/App.css';

import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import GoToTopButton from './components/gotToTopButton/goToTopButton';
import { useEffect } from 'react';

export default function App() {
    useEffect(() => {
        const block = e => e.preventDefault();
        const blockKeys = e => {
            if (
                e.keyCode === 123 ||
                (e.ctrlKey && e.key === 'u') ||
                (e.ctrlKey && e.shiftKey && e.key === 'I')
            ) {
                block(e);
            }
        };
        document.addEventListener('contextmenu', block);
        document.addEventListener('keydown', blockKeys);

        return () => {
            document.removeEventListener('contextmenu', block);
            document.removeEventListener('keydown', blockKeys);
        };
    }, []);

    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <GoToTopButton />
            <Footer />
        </>
    );
}

