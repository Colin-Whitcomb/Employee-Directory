import React from 'react';
import './style.css'

function tableWrapper (props) {
    return (
        <table className="table table-bordered">{props.children}</table>   
    )
}

export default tableWrapper;