function Students(props) {
	console.log(props);
	return(
		<div>
			<h1>name: {props.name}</h1>
			<h1>email: {props.email}</h1>
			<h1>Other: {props.other.address}</h1>
			<h1>Other: {props.other.mobile}</h1>
		</div>
	)
}
export default Students