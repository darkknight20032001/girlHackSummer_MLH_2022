import React, { useEffect, useState } from "react";

const DetectLocation = () => {
  
  const apiKey = `14999f04491479f4dd3d78c4045bc8da`;
  const [latitude, setLatitude] = useState(``);
  const [longitude, setLongitude] = useState(``);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      console.log(position);
    });

    const fetchData = async () => {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
      );
      const getData = await data.json();
      console.log(getData);
    };
    fetchData();
  }, []);
  return <div>DetectLocation</div>;
};

export default DetectLocation;
