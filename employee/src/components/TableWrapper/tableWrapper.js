import React from 'react';

function tableWrapper (props) {
    return (
        <table className="table">{props.children}</table>   
    )
}

export default tableWrapper;