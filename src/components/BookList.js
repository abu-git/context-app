import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

/*class BookList extends Component{
	static contextType = ThemeContext;
	render(){
		const { isLightTheme, light, dark } = this.context;
		const theme = isLightTheme ? light : dark;
		return(
			<div className="book-list" style={{color: theme.syntax, background: theme.bg}}>
				<ul>
					<li style={{ background: theme.ui }}>the way of kings</li>
					<li style={{ background: theme.ui }}>the name of the wind</li>
					<li style={{ background: theme.ui }}>the final empire</li>
				</ul>
			</div>
		);
	}
}

NOTE:
the class component was replaced with a much cleaner functional component
using the React Hook 'useContext'.

*/

const BookList = () => {
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;
	return(
		<div className="book-list" style={{color: theme.syntax, background: theme.bg}}>
			<ul>
				<li style={{ background: theme.ui }}>the way of kings</li>
				<li style={{ background: theme.ui }}>the name of the wind</li>
				<li style={{ background: theme.ui }}>the final empire</li>
			</ul>
		</div>
);
}

export default BookList;