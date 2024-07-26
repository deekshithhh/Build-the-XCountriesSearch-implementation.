import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import styles from './countries.module.css'


function CountryCard({ name, flag}){
    // console.log(name,flag)
 return(
     <div>
 
         <Card variant="outlined"  className={styles.CardImage} sx={{ maxWidth: 100 }}>
         <CardMedia
         component="img"
         height="100px"
         image={flag}
         alt={"Flag of "+ name}
       />
       <Typography variant="body" color="text.primary">
           {name}
         </Typography>
         </Card>
     </div>
 )
 }

function Countries() {
    const [search, setSearch] = useState('');
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {
        // Fetch country data
        
        const fetchCountries = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all');
                setCountries(response.data);
                setFilteredCountries(response.data)
            } catch (error) {
                console.error('Error fetching the countries', error);
            }
        };

        fetchCountries();
    }, []);

    useEffect(() => {
        // Filter countries based on search input
        if (search.trim()) {
            setFilteredCountries(
                countries.filter(country =>
                    country.name.common.toLowerCase().includes(search.toLowerCase())
                )
            );
        } else {
            setFilteredCountries([]);
        }
    }, [search]);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div >
            <input
                type="text"
             
                value={search}
                onChange={handleChange}
            />
            <div >
            {
        filteredCountries.map((ele) => <CountryCard  key ={ele.abbr} name={ele.name} flag={ele.flag} />)
       }
        
            </div>
        </div>
    );
}

export default Countries;
