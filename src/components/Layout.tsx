import React, { ReactNode } from 'react';
import { Header, Footer } from './index';

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <div className='mx-20'>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export { Layout };
