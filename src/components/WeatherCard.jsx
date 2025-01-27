const WeatherCard = ({ weatherdata }) => {
	const { name, main, weather } = weatherdata

	return (
		<div className='bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-xl shadow-2xl max-w-lg w-full text-white'>
			<h2 className='text-4xl font-extrabold mb-6'>{name}</h2>
			<div className='flex items-center justify-center mb-8'>
				<img
					src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
					alt={weather[0].description}
					className='h-24 w-24 mr-6 drop-shadow-lg'
				/>
				<div className='text-left'>
					<p className='text-5xl font-bold'>{main.temp}&deg;C</p>
					<p className='text-lg capitalize opacity-90'>
						{weather[0].description}
					</p>
				</div>
			</div>
			<div className='grid grid-cols-2 gap-6'>
				<div className='flex flex-col items-center'>
					<span className='text-sm opacity-80'>Humidity</span>
					<span className='text-2xl font-semibold'>{main.humidity}%</span>
				</div>
				<div className='flex flex-col items-center'>
					<span className='text-sm opacity-80'>Feels Like</span>
					<span className='text-2xl font-semibold'>
						{main.feels_like}&deg;C
					</span>
				</div>
			</div>
		</div>
	)
}

export default WeatherCard
