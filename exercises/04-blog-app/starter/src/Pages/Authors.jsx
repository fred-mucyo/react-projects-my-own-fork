import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { Avatar } from '../components/ui';

function Authors() {

const { posts, users, categories } = useLoaderData();


    return (
        <div>
            {
                users.map(user => (
                    <div> 

                    <div>{user.name}</div>
                    <Avatar src={user.avatar}/>
                    </div>
                    
                ))
            }

        </div>
       
    )
}

export default Authors
