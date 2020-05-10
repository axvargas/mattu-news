import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	createMuiTheme,
	responsiveFontSizes,
	MuiThemeProvider,
	Grid,
	Container
} from '@material-ui/core';



import useStyles from './style';
import Footer from '../components/footer';
import Header from '../components/header';
import Form from '../components/form';
import ListOfNews from '../components/listOfNews';

const APIKEY = 'fec524e13ad64bba9318f566c2658f95';

const App = () => {

	const classes = useStyles();
	let theme = createMuiTheme();
	theme = responsiveFontSizes(theme);

	//State
	const [globalCategory, setGlobalCategory] = useState('general');
	const [news, setNews] = useState([]);

	useEffect(() => {

		const consultAPI = async () => {
			const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${globalCategory}&apiKey=${APIKEY}`;
			const response = await axios.get(URL);
			setNews(response.data.articles);
		}
		if (globalCategory === '') return;
		consultAPI();
	}, [globalCategory]);


	return (
		<MuiThemeProvider theme={theme}>
			<Header title="MattuNews" />
			<Container>
				<Grid container justify="center" spacing={2} className={classes.grid}>

					<Grid item xs={12} sm={12} md={12} >
						<Grid container justify="center" alignItems="center" direction="column" spacing={2}>
							<Form setGlobalCategory={setGlobalCategory} />
						</Grid>
					</Grid>

					<ListOfNews news={news} globalCategory={globalCategory} />



				</Grid>
				
			</Container>
			<Footer />
		</MuiThemeProvider>
	);
}


export default App;
