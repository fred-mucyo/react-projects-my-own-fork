import React from 'react'
import { useParams,useLoaderData } from 'react-router-dom'
import { Avatar , Card } from '../components/ui'

function AuthorDetails() {
    const {posts,users,categories} = useLoaderData()
    const {id} = useParams()
    const author = users.find(user => user.id === id)
    const postsToDisplay = posts.filter(post => post.authorId === id)

    return (
       <div>
{author.name}
<Avatar src={author.avatar}/>
{author.bio}

<Card>{

postsToDisplay.map(post => (
    <div>
{ <img src={post.coverImage}/>}
{post.title}
read time: {post.readTime}
    </div>
)
)
}
</Card>



        </div>
    )
}

export default AuthorDetails
