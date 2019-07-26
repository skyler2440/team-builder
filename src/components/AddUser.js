import React, { useState } from 'react'
const AddUser = props => {
	const initialFormState = { id: null, name: '', email: '', role: ''}
	const [ member, setMember ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setMember({ ...member, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				props.addUser(member)
				setMember(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={member.name} onChange={handleInputChange} />
			<label>Email</label>
			<input type="text" name="email" value={member.email} onChange={handleInputChange} />
			<label>Role</label>
			<select name="role" value={member.role} onChange={handleInputChange}>
				<option>Select your role</option>
				<option>Full Stack Developer</option>
				<option>UI Developer</option>
				<option>UX Developer</option>
				<option>Android Developer</option>
				<option>IOS Developer</option>
			</select>
			<button>Add new member</button>
		</form>
	)
}

export default AddUser