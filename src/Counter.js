import React, {useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count +1);
    return (
        <div>
            <h1>Let's count!</h1>
            <h2>Current count: {count}</h2>
            <button onClick={increment}>Add</button>
            <label htmlFor="user">Username</label>
            <input id="user" type="text" placeholder="username"></input>
        </div>
    )
}

export default Counter;