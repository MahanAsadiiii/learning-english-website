import React, { ReactNode } from 'react';
import { Header, Footer } from './index';

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <div className='mx-auto px-20 max-w-[1440px]'>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export { Layout };
