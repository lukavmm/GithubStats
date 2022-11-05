import { useEffect, useState } from 'react';
import './Header.css';

function Header() {

  const [userName,setUserName] = useState('lukavmm');

  const [user,setUser] = useState({name: '', avatar:'', location:'', company: '',blog:''});

  function handleNameChange(name){
    setUserName(name); 
    console.log(userName);
  }

  function handleSearch(nick){
    setUser(nick);
    console.log(user);
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
        blog: data.blog
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

      <button type="button" onClick={handleSearch}>Pesquisar</button>
     
     </div>

     <div className="card">
      <h3>{user.blog}</h3>
      <h3>{user.company}</h3>
      <h2>{user.name}</h2>
      <h5>{user.location}</h5>
      <img src={user.avatar} alt="profile pic" />
     </div>
    

    </div>
  )
}

export default Header
