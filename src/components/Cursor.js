import React, { useEffect, useState } from 'react';

const Cursor = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible((v) => !v);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <span className={`cursor ${visible ? 'visible' : ''}`}>&nbsp;</span>
    );
};

export default Cursor;