import React, { useState, useEffect } from 'react'
import Navigator from './screens/navigator'
import Content from './screens/content'


const App = () => {
	const [page, setPage] = useState("home")
	const [data, setData] = useState(null);

	useEffect(() => {
		console.log("get data")
		const fetchData = async () => {
			try {
				const response = await fetch('/api/data')
				const data =  await response.json()
				setData(data)
			} catch (error) {
				throw Error(error.message)
			}
		}
		fetchData()
	}, [])

	return (
		<div style={styles.background}>
			<Navigator page={page} setPage={setPage} />
			<Content page={page} data={data} />
		</div>
	)
}

const styles = {
	background: {
		height: '100vh',
		width: '100vw',
        display: 'flex',
        flexDirection: 'row',
		backgroundColor: '#3F72AF'
	}
}


export default App
