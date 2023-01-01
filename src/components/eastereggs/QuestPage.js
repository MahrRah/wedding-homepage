import React, { useState, useCallback, useEffect } from 'react';
import '../../assets/css/main.css'
import '../eastereggs/MotionObject.js'

import { useTranslation } from "react-i18next";
import MotionObject from '../eastereggs/MotionObject.js';


function QuestPage() {
    const [animation, setAnimation] = useState(false);
    const handleUserKeyPress = useCallback(event => {
        const { key, keyCode } = event;
        if (keyCode === 13 || (keyCode >= 65 && keyCode <= 90)) {
            setAnimation(() => true);
        }
    }, []);
    useEffect(() => {
        window.addEventListener("keydown", handleUserKeyPress);
        return () => {
            window.removeEventListener("keydown", handleUserKeyPress);
        };
    }, [handleUserKeyPress]);


    return (
        <div id="main">
            <section className="post">
                <h2 > <a href="https://twitter.com/githubstatus">Quests</a></h2>
                <span>blu blala</span>
            </section>
            {animation &&
                <MotionObject></MotionObject>}
        </div>
    )
}

export default QuestPage;
