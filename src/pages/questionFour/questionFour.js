import React, { Component} from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import NHSArticles from './questionFourList';
import { getNHSData } from './api';

class QuestionFour extends Component {

	constructor(props){
		super(props);
		this.state = {
			articles: [],
			loading: true,
		};			
	}

	componentDidMount() {
		this.fetchData();
	}

	async fetchData() {
		try {
			const articles = await getNHSData();
			this.setState({
				articles: articles,
				loading: false,
			});
		} catch (error) {
			console.log(error)
		}
	}
 
	render(){
		const { loading }  = this.state;

		if(loading){
			return (
				<div className="ppp">
					<CircularProgress />
				</div>
			)
		}
		return(
			<div className="">
				<NHSArticles articles={ this.state.articles }/>
			</div>
		)
	}
}

export default QuestionFour;
