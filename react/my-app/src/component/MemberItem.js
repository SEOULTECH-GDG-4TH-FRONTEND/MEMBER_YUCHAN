// src/components/MemberItem.js
import React from 'react';
import './MemberItem.css';

function MemberItem({ name }) {
    return (
        <li className="ask_member">
            <a href="#">{name}</a>
        </li>
    );
}

export default MemberItem;
