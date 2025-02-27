import { useEffect, useState } from "react"


function TypeSelection(){
    const [types,setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState("Select Type")

    useEffect(() => {
        fetchTypes();
    })

    const fetchTypes = async () => {
        fetch('https://pokeapi.co/api/v2/type?limit=30').then(res => {
            if(res.ok){
                res.json().then(j => {
                    setTypes(j.results);
                });
            }
        }
        );
    }

    /*
    Example Type
    https://pokeapi.co/docs/v2#types
        {
            "name": "normal",
            "url": "https://pokeapi.co/api/v2/type/1/"
        }
    */

    return (
        <div data-testid="PokeTypeSelection">
            <label>
                Select Pokemon Type:
                <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                    <option value="Select Type">Select Type</option>
                    {types.map((type, index) => (
                        <option key={type.name + ":" + index} value={type.name}>{type.name}</option>
                    ))}
                </select>
            </label>
        </div>
    )
}

export default TypeSelection