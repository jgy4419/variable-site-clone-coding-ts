import React, {useState} from 'react';

export const useInputChange = () => {
    const [inputObj, setInputObj] = useState({
        name: '',
        age: '',
        description: ''
    })


    const nameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputObj((prev) => ({
                ...prev,
                name: e.target.value
            }
        ))
    }

    const ageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputObj((prev) => ({
                ...prev,
                age: e.target.value
            }
        ))
    }

    const descriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputObj((prev) => ({
                ...prev,
                description: e.target.value
            }
        ))
    }
    return {inputObj, nameChange, ageChange, descriptionChange}
};