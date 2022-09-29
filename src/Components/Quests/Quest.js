import React from 'react';
import './Quest.css'

const Quest = () => {
    return (
        <div className='quest'>
            <div className="q1">
            <h3 className='q-title'>Q-1: How Does React Works?</h3>
            <p>React Works in different ways with it's many Features.
            <br />
            <strong>JSX:</strong> It is most likely HTML. but it is not an HTML, it is a JavaScript XML.
            <br />
            <strong>DOM manipulation:</strong> It creates a copy of dom in different storage. And compares with the main. If something changes it replace the only part just changed. So it loads Faster..
            </p>
            </div>

<br />
            <div className="q2">
                <h3 className='q-title'>Q-2: Difference Between Props and State.</h3>
                    <strong>Props:</strong>
                    <ul>
                        <li>Props read only.</li>
                        <li>Props Cannot be Modified.</li>
                    </ul>
                    <strong>State:</strong>
                    <ul>
                        <li>State changes. It can be Asynchronous.</li>
                        <li>State can be Modified by this.state().</li>
                    </ul>
            </div>

            <br />
            <div className="q3">
                <h3 className='q-title'>Q-3: Without data loading What else useEffect() do?</h3>
                <p>
                    <strong>useEffect</strong> re-render Components and it is called after Mounted. If you give a component as a Dependency Value, it will re-render the component.
                </p>
            </div>
            <br />
        </div>
    );
};

export default Quest;