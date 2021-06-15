import React from 'react';

function Search(props) {
    return (
        <form>
            <input
            label="Search"
            value={props.value}
            type="text"
            onChange={props.handleInputUpdate}
            />
        </form>
    )
}

export default Search;