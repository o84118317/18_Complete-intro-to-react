let ce = React.createElement;

let MyTitle = function(props) {
	return (
		ce('div', null, 
			ce('h1', {style: {color:props.color}}, props.title)
		)
	);
};

let MyFirstComponent = function () {
	return (
		ce('div', null,
			ce(MyTitle, {color:'rebeccapurple', title: 'House of Cards'}),
			ce(MyTitle, {color:'peru', title: 'Orange od the New Black'}),
			ce(MyTitle, {color:'burlywood', title: 'Stranger Things'})
		)
	);
};



ReactDOM.render(
	ce(MyFirstComponent),
	document.getElementById('app')
);