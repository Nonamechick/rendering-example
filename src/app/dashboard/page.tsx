'use client';


import { useState } from "react";

export default function DashboardPage() {
    console.log("dashboard client component");
    const[name, setName] = useState('');

    return (
        <div>
            <h1>Dashboard</h1>
            <input value={name} onChange={(e) => setName(e.target.value)}  />
            <p>hfskjsd {name}</p>
        </div>
    );
}