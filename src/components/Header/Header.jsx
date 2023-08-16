import React from 'react';
import crateLogo from '../../assets/cratedb_cloud_logo.svg';

function Header() {
    return (
        <header className="bg-slate-950 flex justify-between px-6 py-4">
            <img src={crateLogo} alt="crate logo" />
        </header>
    );
}

export default Header;
