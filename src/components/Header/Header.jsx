import { useEffect, useState } from 'react';
import './Header.css';
import Card from '../Card/Card'

function Header() {

  const [userName,setUserName] = useState('lukavmm');

  const [user,setUser] = useState({name: '', avatar:'', location:'', company: '',blog:'', bio:''});

  function handleNameChange(name){
    setUserName(name); 
  }

  useEffect(()=>{
    fetch(`https://api.github.com/users/${userName}`)
    .then(response => response.json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url,
        location: data.location,
        company: data.company,
        blog: data.blog,
        bio: data.bio
      })
    } )
  },[userName])

 

  return (
    <div className="container">
     <div className="GithubProfile">
      <h1>Github Profile</h1>

      <input type="text" 
        placeholder="Digite o usuário..." 
        onChange={e => handleNameChange(e.target.value)}
      />     
     </div>

     <div className="card">
      <h4>{user.bio}</h4>
      <h4>{user.blog}</h4>
      <h3>{user.company}</h3>
      <h2>{user.name}</h2>
      <h5>{user.location}</h5>
      <img src={user.avatar} alt="profile pic" />
     </div>
    
     <Card user={userName} />
    </div>
  )
}

export default Header
