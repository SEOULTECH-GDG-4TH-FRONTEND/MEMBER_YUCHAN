// src/context/MemberContext.js
import React, { createContext, useContext, useState } from 'react';

const MemberContext = createContext();

export const useMembers = () => useContext(MemberContext);

export const MemberProvider = ({ children }) => {
    const [members] = useState([
        "김하늘", "노경인", "박지윤", "신민규", "이서인", "이민혁",
        "이유진", "이지원", "전효정", "정윤석", "허정민", "희진", "조유찬"
    ]);

    return (
        <MemberContext.Provider value={members}>
            {children}
        </MemberContext.Provider>
    );
};
