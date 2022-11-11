import { useEffect, useState } from 'react';
import './Card.css';

function Card(props){
    console.log(props);
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch(`https://api.github.com/users/${props.user}/repos`)
        .then(response => response.json())
        .then(data => setRepositories(data))
    },[props.user])

    return(
        <div className='container-repo'>
            <ul>
                {repositories.map(repository => {
                    return(
                        <li key={repository.id}>
                            <h3><a href={repository.html_url}>{repository.name}</a></h3>
                            <p>{repository.description}</p>
                        </li>
                    )
                })}
            </ul>
            
        </div>
    )
}
export default Card