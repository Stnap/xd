import React, { useState, useContext } from "react";

const timerContext = React.createContext();
const timerToggleContext = React.createContext()

export function useTimerContext() {
    return useContext(timerContext);
}

export function useTimerToggleContext() {
    return useContext(timerToggleContext);
}

export function TimerProvider(props) {

    const [user, setUser] = useState(null);

    const cambiaLogin = () => {
        if (user) {
            setUser(null);
        } else {
            setUser({
                name: 'Luis',
                email: 'luis@mail.com'
            });
        }
    }

    return (
        <timerContext.Provider value={user}>
            <timerToggleContext.Provider value={cambiaLogin}>
                {props.children}
            </timerToggleContext.Provider>
        </timerContext.Provider>
    );
}