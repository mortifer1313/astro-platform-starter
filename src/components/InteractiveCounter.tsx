import { useState } from 'react';

export default function InteractiveCounter() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg">
            <span className="text-lg">Counter: {count}</span>
            <button 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                onClick={() => setCount(count + 1)}
            >
                +1
            </button>
            <button 
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                onClick={() => setCount(count - 1)}
            >
                -1
            </button>
            <button 
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
                onClick={() => setCount(0)}
            >
                Reset
            </button>
        </div>
    );
}