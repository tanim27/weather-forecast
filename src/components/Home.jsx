'use client'

import axios from 'axios'
import { useState } from 'react'
import WeatherCard from './WeatherCard'

const Home = () => {
	const [city, setCity] = useState('')
	const [weatherData, setWeatherData] = useState(null)
	const [error, setError] = useState('')

	const fetchWeather = async () => {
		try {
			setError('')
			const apiKey = '8287535c0b83012b80939b46825b3ed2'
			const response = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`,
			)
			setWeatherData(response.data)
		} catch (err) {
			setError('City not found. Please try again.')
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (city.trim() !== '') {
			fetchWeather()
		}
	}

	return (
		<div className='min-h-screen flex flex-col items-center bg-gradient-to-b from-blue-100 to-blue-300 py-10 px-5'>
			<h1 className='text-4xl font-extrabold text-gray-800 mb-10 drop-shadow-sm'>
				WeatherCast
			</h1>
			<form
				onSubmit={handleSubmit}
				className='flex flex-col sm:flex-row gap-5 mb-8 w-full max-w-lg bg-white p-6 rounded-lg shadow-lg border border-gray-200'
			>
				<input
					type='text'
					placeholder='Enter city name'
					value={city}
					onChange={(e) => setCity(e.target.value)}
					className='flex-1 px-4 py-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm'
				/>
				<button
					type='submit'
					className='px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
				>
					Get Weather
				</button>
			</form>
			{error && <p className='text-red-600 font-medium'>{error}</p>}
			{weatherData && <WeatherCard weatherdata={weatherData} />}
		</div>
	)
}

export default Home
