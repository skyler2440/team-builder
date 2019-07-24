import React, {useState} from "react";

export default function Form({saveUser}) {
    const [user, setUser] = useState( {});
    
    // var userArray=[]
    
    function handleChange(event) {
        
        const updatedUser = { ...user, [event.target.name]: event.target.value };
        console.log(
            "handleChange",
            event.target.name,
            event.target.value,
            updatedUser
            );
            setUser(updatedUser);
        }
        
        function handleSubmit (e)  {
            e.preventDefault();
            if (!user) return;
            // setUser(updatedUser);
            saveUser(user);
        };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <legend className='form-legend'>Team Form</legend>
        <label htmlFor='name' className='form-label'>
          Member Name:
          <input type="text" placeholder="Member Name" className='form-field' name='name' onChange={handleChange} value={user.name} />
        </label>
        <label htmlFor='email' className='form-label'>
          Member Email:
          <input type="email" placeholder="user@email.com" className='form-field' name='email' onChange={handleChange} value={user.email} />
        </label>
        <label htmlFor='role' className='form-label'>
          Member Role:
         <select onChange={handleChange}  value={user.role} name="role">
             <option value="Full Stack Developer">Full Stack Developer</option>
             <option value="UI Developer">UI Developer</option>
             <option>UX Developer</option>
             <option>Android Developer</option>
             <option>IOS Developer</option>
         </select>
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}
