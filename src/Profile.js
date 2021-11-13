import React from 'react'

function Profile(props) {
	return (
		<div>
			<h1>Profile Component</h1>
			<button onClick={()=>props.data()}>on cleick</button>
		</div>
	)
}
export default Profile