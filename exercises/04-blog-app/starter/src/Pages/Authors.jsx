import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Avatar } from '../components/ui'

function Authors() {
     const {posts,categories,users} = useLoaderData()
    return (
        <div>
        {
         users.map(user => (
            <span key={user.id}>
<Avatar src={user.avatar}/>
<span>{user.name}</span>
            </span>
 

            ))
        }
        </div>
        
    )
}

export default Authors
