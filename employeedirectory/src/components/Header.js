import React from 'react';

function Header(props) {
    return (
        <div>
            <h1>Employee Directory</h1>
            <p>Search filters by last name. Click "Name", "Phone", or "Email" to sort by that column (name sorts by last name).</p>
        </div>
    )
}

export default Header