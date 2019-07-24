import React, { useState, div } from 'react'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
import Team from './components/Team'

const App = () => {
		const membersData = [
		]

	const initialFormState = { id: null, name: '', email: '' }

	const [ members, setMembers ] = useState(membersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	const addUser = member => {
		member.id = members.length + 1
		setMembers([ ...members, member ])
	}

	const deleteUser = id => {
		setEditing(false)

		setMembers(members.filter(member => member.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setMembers(members.map(member => (member.id === id ? updatedUser : member)))
	}

	const editRow = member => {
		setEditing(true)

		setCurrentUser({ id: member.id, name: member.name, email: member.email })
	}

	return (
		<div className="container">
			<h1>Team Members</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<div>
							<h2>Edit member</h2>
							<EditUser
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</div>
					) : (
						<div>
							<h2>Add member</h2>
							<AddUser addUser={addUser} />
						</div>
					)}
				</div>
				<div className="flex-large">
					<h2>View members</h2>
					<Team members={members} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default App