import '@/styles/globals.css'

export const metadata = {
	title: 'WeatherCast',
	description: 'A simple weather application made by Abdullah Al Mahmud',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}
