import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton, Divider } from "@mui/material";
import { Result } from './Result';
import axios from 'axios';

export const Search = () => {
    const [cityName, setCityName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [weatherData, setWeatherData] = React.useState(null);
    const API_KEY = "10cff2155cc83c81b194d2bf136f60bc";
    const useFetch = async (city) => {
        setIsLoading(true);
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        setIsLoading(false);
        if (response.status === 200) {
            setWeatherData(response.data);
            setShowResult(true);
        } else {
            setWeatherData(null);
            setShowResult(false);
        }
    }

    return (
        <>
            <TextField
                value={cityName}
                onChange={(e) => {
                    setCityName(e.target.value);
                    setShowResult(false);
                }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && cityName) {
                        useFetch(cityName);
                    }
                }}
                placeholder="Search for a city"
                variant='outlined'
                sx={{
                    mt: 2,
                    width: '320px',
                    backgroundColor: '#fff',
                    borderRadius: '4px',
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '4px',
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#EA6E4B !important',
                        },
                    },
                    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#EA6E4B !important',
                    },
                    '& .MuiInputBase-input': {
                        padding: '12px 2px',
                        fontSize: '18px',
                        fontFamily: "Poppins",
                        fontWeight: 500,
                        color:'#000',
                        borderColor:'#EA6E4B'
                    },
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start" sx={{
                            mr: 0.5
                        }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#EA6E4B' }}>location_on</span>
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                onClick={() => { setCityName(""); setShowResult(false); setWeatherData(null); }}
                                sx={{
                                    '&:hover': {
                                        color: '#EA6E4B',
                                    },
                                }}
                            >
                                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>clear</span>
                            </IconButton>
                            <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />
                            <IconButton
                                disabled={!cityName || isLoading}
                                onClick={() => {
                                    if (cityName) {
                                        useFetch(cityName);
                                    }
                                }}
                                sx={{
                                    color: '#EA6E4B',
                                    '&:hover': {
                                        background: '#EA6E4B',
                                        color: '#fff',
                                    },
                                }}
                            >
                                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>search</span>
                            </IconButton>

                        </InputAdornment>
                    ),
                }}
            />
            {showResult && <Result cityName={cityName} isLoading={isLoading} setIsLoading={setIsLoading} weatherData={weatherData} />}
        </>
    );
};