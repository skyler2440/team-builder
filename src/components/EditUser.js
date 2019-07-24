import React, { useState, useEffect } from 'react'

const EditUser = props => {
  const [ member, setMember ] = useState(props.currentUser)

  useEffect(
    () => {
      setMember(props.currentUser)
    },
    [ props ]
  )
  const handleInputChange = event => {
    const { name, value } = event.target

    setMember({ ...member, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(member.id, member)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={member.name} onChange={handleInputChange} />
      <label>Email</label>
      <input type="text" name="email" value={member.email} onChange={handleInputChange} />
      <select value={member.role} onChange={handleInputChange}>
				<option>Select your role</option>
				<option>Full Stack Developer</option>
				<option>UI Developer</option>
				<option>UX Developer</option>
				<option>Android Developer</option>
				<option>IOS Developer</option>
			</select>
      <button>Update member</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditUser
