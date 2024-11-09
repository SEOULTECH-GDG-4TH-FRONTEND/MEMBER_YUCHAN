// src/components/MemberList.js
import React from 'react';
import MemberItem from './MemberItem';
import { useMembers } from '../context/MemberContext';
import './MemberList.css';

function MemberList() {
    const members = useMembers();

    return (
        <main aria-label="멤버조회 섹션" id="ask">
            <div className="max-container">
                <h1 className="ask_desc">GDSC QnA site, Ask and answer anything</h1>
                <p className="ask_title">멤버조회</p>
                <ul className="ask_member-container">
                    {members.map((member, index) => (
                        <MemberItem key={index} name={member} />
                    ))}
                </ul>
            </div>
        </main>
    );
}

export default MemberList;
