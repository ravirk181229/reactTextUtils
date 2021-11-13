function StudentClass(props){
	const data="ravi kumar"
	return (
			<div>
				<button onClick={()=>props.alert(data)}>update</button>
			</div>

	)
}
export default StudentClass;