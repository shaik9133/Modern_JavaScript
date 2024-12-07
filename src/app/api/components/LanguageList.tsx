'use client'

import { useState, useEffect } from 'react';

export default function LanguageList() {
    const [languages, setLanguages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchLanguages() {
            try {
                const response = await fetch('/api/programming-languages');
                if (!response.ok) {
                    throw new Error('Failed to fetch languages');
                }
                const data = await response.json();
                console.log(":: data ::", data)
                setLanguages(data);
            } catch (err) {
                setError('Failed to load languages. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        }

        fetchLanguages();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <ul className="space-y-2">
            {languages.map((lang: any) => (
                <li key={lang.code} className="bg-gray-100 p-2 rounded">
                    <span className="font-semibold">{lang.name}</span> - <code className="bg-gray-200 px-1 rounded">{lang.code}</code>
                </li>
            ))}
        </ul>
    );
}

