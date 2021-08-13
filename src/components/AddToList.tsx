import React, { useState } from 'react'
import { IState as Props } from "../App";

interface IProps {
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
    people: Props["people"]
}

const AddToList: React.FC<IProps> = ({setPeople, people}) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        country: "",
        img: ""
    }) 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        if(!input.name || !input.age) return

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                img: input.img,
                country: input.country
            }
        ]);

        setInput({
            name: "",
            age: "",
            img: "",
            country: ""
        })
    }

    return (
        <div className="AddToList">
            <input 
                type="text"
                onChange={handleChange}
                className="AddToList-input"
                name="name"
                value={input.name}
                placeholder="Isim"
            />
            <input 
                type="text"
                onChange={handleChange}
                className="AddToList-input"
                name="age"
                value={input.age}
                placeholder="Yas"
            />
            <input 
                type="text"
                onChange={handleChange}
                className="AddToList-input"
                name="img"
                value={input.img}
                placeholder="Resim Linki"
            />
            <textarea
                onChange={handleChange}
                className="AddToList-input"
                name="country"
                value={input.country}
                placeholder="Ulke"
            />
            <button
                onClick={handleClick}
                className="AddToList-btn"
            >
                Listeye ekle
            </button>
        </div>
    )
}

export default AddToList