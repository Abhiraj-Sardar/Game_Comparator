import React, { useEffect, useState } from 'react'
import "../Css/SearchBar.css";
import Card from './Card';

const SearchBar = () => {
    const [data,setData] = useState([]);
    const [state,setState]= useState(0);

    const getData = async ()=>{
        const url = 'https://gamerpower.p.rapidapi.com/api/giveaways';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '11f7277c93mshae1c3d675344ffbp18a342jsn2c53e95e559c',
                'x-rapidapi-host': 'gamerpower.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setData(result);
            if(state==0) setState(1);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData();
    },[state]);


    const submit = (e) => {
        e.preventDefault();
    }


    return (
        <>
            <form onSubmit={submit}>
                <div className='container-fluid search-container'>
                    <input type="text" placeholder='Enter Your Game...' />
                    <button className='btn btn-success' type="submit">Search</button>
                </div>
            </form>

            <div className="container-fluid search-content">
                    {
                        data.map((item,i)=>{
                            return (
                                <Card 
                                key={i} 
                                title={item.title}
                                type={item.type}
                                users={item.users}
                                worth={item.worth}
                                img={item.thumbnail}
                                platforms={item.platforms}
                                status={item.status}    
                                />
                            )
                        })
                    }
            </div>
            
        </>
    )
}

export default SearchBar
