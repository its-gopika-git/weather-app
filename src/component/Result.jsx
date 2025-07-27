import { LocalAirport } from "@mui/icons-material";
import { Paper, Stack, Typography, Grid, Box, Divider, Chip, Stepper, Step, StepLabel, Badge, Avatar, Tooltip } from "@mui/material";
import axios from "axios";
import { divide } from "lodash";
import moment from "moment";
import React from "react";

export const Result = (props) => {
    const { cityName, isLoading, setIsLoading, weatherData } = props;

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (!cityName) {
        return null;
    }
    const weatherInfo = [
        {
            label: 'Wind Speed',
            description: `${weatherData?.wind?.speed} m/s`,
            icon: <span class="material-symbols-outlined" style={{ fontSize: '18px' }}>
                air
            </span>,
            divide: <Divider orientation="vertical" flexItem sx={{ mx: 1, backgroundColor: '#EA6E4B' }} />
        },
        {
            label: 'Humidity',
            description: `${weatherData?.main?.humidity} %`,
            icon: <span class="material-symbols-outlined" style={{ fontSize: '18px' }}>
                humidity_percentage
            </span>
        },
        {
            label: 'Pressure',
            description: `${weatherData?.main?.pressure} hPa`,
            icon: <span class="material-symbols-outlined" style={{ fontSize: '18px' }}>
                compress
            </span>
        },
        {
            label: 'Visibility',
            description: `${(weatherData?.visibility / 1000).toFixed(1)} km`,
            icon: <span class="material-symbols-outlined" style={{ fontSize: '18px' }}>
                visibility
            </span>
        }

    ];
    const imgDesc = {
        Clouds: 'Perfect time to cozy up with a good book!',
        Clear: 'Perfect time to go trekking!',
        Rain: `Don't forget your umbrella!`,
        Snow: 'Time for a snowball fight!',
        Drizzle: 'A light drizzle, perfect for a walk!',
        Thunderstorm: 'Stay safe indoors during the storm!',
        Mist: 'A mystical morning with low visibility!',
        Haze: 'A hazy day, perfect for a quiet indoor activity!',
        Fog: 'A foggy day, perfect for a cozy indoor activity!',
    }

    const imgLink = {
        'Clouds': 'https://www.shutterstock.com/image-vector/woman-reading-book-relaxing-warm-600nw-2323058005.jpg',
        'Clear': 'https://img.freepik.com/premium-vector/romantic-couple-admiring-sun-man-woman-embracing-love-outdoors_1326094-816.jpg',
        'Rain': 'https://img.freepik.com/free-vector/woman-with-umbrella-girl-raincoat-dog-walking-rain-city-park-vector-illustration-family-activity-bad-weather-downpour-concept_74855-13290.jpg?semt=ais_items_boosted&w=740',
        'Thunderstrom':'https://us.123rf.com/450wm/yupiramos/yupiramos2008/yupiramos200827919/154319112-young-couple-wearing-medical-masks-in-rainy-weather-scene-vector-illustration-design.jpg?ver=6',
        'Snow': 'https://static.vecteezy.com/system/resources/thumbnails/004/471/099/small_2x/umbrellas-under-snow-composition-vector.jpg',
        'Drizzle':'https://img.freepik.com/free-vector/people-walking-rain-street_74855-4559.jpg?semt=ais_hybrid&w=740',
        'Fog':'https://img.freepik.com/free-vector/wood-house-forest-with-morning-fog-forester-shack-vector-cartoon-summer-landscape-wooden-village-cottage-farmhouse-with-porch-green-lawn-big-trees-mist_107791-4658.jpg?semt=ais_hybrid&w=740',
        'Haze': 'https://img.freepik.com/free-vector/people-walking-rain-street_74855-4559.jpg?semt=ais_hybrid&w=740',
        'Mist': 'https://img.freepik.com/free-vector/wood-house-forest-with-morning-fog-forester-shack-vector-cartoon-summer-landscape-wooden-village-cottage-farmhouse-with-porch-green-lawn-big-trees-mist_107791-4658.jpg?semt=ais_hybrid&w=740',
    }


    return (
        <React.Fragment>
            <Paper sx={{
                mt: 2,
                width: '100%',
                maxWidth: "320px",
                minHeight: "320px",
                mx: 'auto',
                borderRadius: '4px',
                backgroundColor: '#fff',
                boxShadow: '0 8px 32px rgba(33,150,243,0.18)',
            }}>
                <Stack direction="column" alignItems="center" justifyContent="center" sx={{ padding: '10px 15px' }}>
                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} sx={{ width: '100%' }}>
                        <Stack direction={"column"} alignItems={"flex-start"} spacing={0.5}>
                            <Stack direction="row" alignItems="center" justifyContent={"center"} spacing={0.5}>
                                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#EA6E4B', verticalAlign: 'middle', marginRight: '4px', display: 'flex', alignItems: 'center' }}>location_on</span>
                                <Typography sx={{
                                    fontSize: '18px',
                                    fontFamily: "Poppins",
                                    textTransform: 'capitalize',
                                    color: '#000',
                                    textAlign: 'left',
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontWeight: 500,
                                }}>
                                    {`${cityName}, ${weatherData?.sys?.country}`}
                                </Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center" justifyContent={"center"} spacing={0.5} sx={{ margin: ' 4px !important', height: '14px' }}>
                                <Typography sx={{
                                    fontSize: '12px',
                                    fontFamily: "Poppins",
                                    textTransform: 'capitalize',
                                    color: 'grey',
                                    textAlign: 'left',
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontWeight: 500,
                                }}>
                                    {`Lat / Lng : ${weatherData?.coord?.lat?.toFixed(2)}° / ${weatherData?.coord?.lon?.toFixed(2)}°`}
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack direction="column" alignItems="flex-end">
                            <Typography sx={{
                                fontSize: '18px',
                                fontFamily: "Poppins",
                                textTransform: 'capitalize',
                                color: '#000',
                                textAlign: 'right',
                                fontWeight: 500,
                            }}>
                                {moment.unix(weatherData?.dt).format('ddd, MMM D')}
                            </Typography>
                            <Typography sx={{
                                fontSize: '12px',
                                fontFamily: "Poppins",
                                textTransform: 'capitalize',
                                color: 'grey',
                                textAlign: 'right',
                                fontWeight: 500,
                            }}>

                                {`${moment.unix(weatherData?.dt).format('h:mm A')}`}
                            </Typography>
                        </Stack>
                    </Stack>
                    <Divider sx={{
                        width: '100%',
                        borderColor: '#EA6E4B',
                        cursor: 'pointer',
                    }} >
                        <Tooltip title={`${weatherData?.weather[0]?.description}`} placement="right"
                            slotProps={{
                                popper: {
                                    modifiers: [
                                        {
                                            name: 'offset',
                                            options: {
                                                offset: [0, 8],
                                            },
                                        },
                                    ],
                                },
                                tooltip: {
                                    sx: {
                                        backgroundColor: '#EA6E4B',
                                        color: '#fff',
                                        fontFamily: 'Poppins',
                                        fontSize: '14px',
                                        textTransform: 'capitalize',
                                    }
                                }
                            }}>
                            <Badge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right', cursor: 'pointer' }}
                                badgeContent={
                                    <Avatar src={`https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`} />
                                }
                            >
                                <Avatar sx={{
                                    backgroundColor: weatherData?.weather[0]?.main === 'Clear' ? '#fff !important' : '#EA6E4B !important',
                                    fontSize: '20px',
                                    fontFamily: "Poppins",
                                    color: weatherData?.weather[0]?.main === 'Clear' ? '#EA6E4B !important' : '#fff !important',
                                    textAlign: 'center',
                                    fontWeight: 600,
                                    height: '32px',
                                    width: '32px',
                                }}>
                                    <Typography>
                                        {`${Math.round(weatherData?.main?.temp - 273.15)}°`}
                                    </Typography>
                                </Avatar>
                            </Badge>
                        </Tooltip>
                    </Divider>
                    <Stack direction="column" alignItems="center" justifyContent="center" sx={{ margin: '12px 0 0 0', height: '22px' }}>
                        <Typography sx={{
                            fontSize: '16px',
                            fontFamily: "Poppins",
                            textTransform: 'capitalize',
                            color: '#ea6e4b',
                            textAlign: 'center',
                            fontWeight: 600,
                        }}>
                            {`${weatherData?.weather[0]?.main === 'Clouds' ? 'Cloudy' : weatherData?.weather[0]?.main === 'Clear' ? 'Clear Sky' : weatherData?.weather[0]?.main}`}
                        </Typography>
                    </Stack>
                    <Typography sx={{
                        fontSize: '14px',
                        fontFamily: "Poppins",
                        color: '#000',
                        textAlign: 'center',
                        fontWeight: 500,
                        lineHeight: '1.5',
                        letterSpacing: '0.5px',
                    }}>
                        {imgDesc[weatherData?.weather[0]?.main] || `Currently ${weatherData?.weather[0]?.description}`}
                    </Typography>
                    <img style={{
                        width: '200px',
                        height: '200px',
                        objectFit: 'cover',
                        margin: '5px 0',
                        borderRadius: '8px',
                        transition: 'transform 0.2s',
                    }} src={
                        imgLink[weatherData?.weather[0]?.main] 
                    } />
                </Stack>
                <Stack direction="row" justifyContent="space-between" sx={{ padding: '5px 15px', boxShadow: '0 4px 16px rgba(234,110,75,0.25)' }}>
                    {weatherInfo.map((info, index) => (
                        <React.Fragment key={index}>
                            <Tooltip
                                title={info.label}
                                slotProps={{
                                    popper: {
                                        modifiers: [
                                            {
                                                name: 'offset',
                                                options: {
                                                    offset: [0, 8],
                                                },
                                            },
                                        ],
                                    },
                                    tooltip: {
                                        sx: {
                                            backgroundColor: '#EA6E4B',
                                            color: '#fff',
                                            fontFamily: 'Poppins',
                                            fontSize: '14px',
                                        }
                                    }
                                }}
                            >
                                <Stack
                                    direction="column"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    sx={{
                                        borderRadius: '8px',
                                        transition: 'background 0.2s',
                                        px: 1,
                                        py: 0.5,
                                        '&:hover': {
                                            backgroundColor: '#ea6e4b',
                                            cursor: 'pointer',
                                        },
                                        '&:hover .weather-icon': {
                                            color: '#fff',
                                        },
                                        '&:hover .weather-desc': {
                                            color: '#fff',
                                            fontWeight: 600,
                                        },
                                    }}
                                >
                                    <Box
                                        className="weather-icon"
                                        sx={{
                                            color: '#EA6E4B',
                                            transition: 'color 0.2s',
                                        }}
                                    >
                                        {info.icon}
                                    </Box>
                                    <Typography
                                        className="weather-desc"
                                        sx={{
                                            fontSize: '14px',
                                            fontFamily: "Poppins",
                                            color: '#000',
                                            textAlign: 'center',
                                            transition: 'color 0.2s, font-weight 0.2s',
                                        }}
                                    >
                                        {info.description}
                                    </Typography>
                                </Stack>
                            </Tooltip>
                        </React.Fragment>
                    ))}
                </Stack>
            </Paper>
            <Typography sx={{
                margin: '15px 0 0 0',
                fontSize: '12px',
                fontFamily: "Poppins",
                textTransform: 'capitalize',
                color: 'grey',
                textAlign: 'center',
                fontWeight: 500,
            }}>
                {"Weather data provided by OpenWeatherMap"}
            </Typography>
        </React.Fragment >
    );
}