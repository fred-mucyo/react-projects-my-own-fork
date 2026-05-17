import React from 'react'
import { useParams,useLoaderData, Form } from 'react-router-dom'
import { Card, Avatar } from '../components/ui'
import { Heading } from 'lucide-react'


function CategoriesDetail() {

    const {id} = useParams()
    const {posts,categories,users} = useLoaderData()
    // console.log(id)
const category = categories.find(cat => cat.id === id)


    const postToDetailToDisplay = posts.filter(post => post.categoryId === id)
    return (

        <div> 
          {category.name}
            {postToDetailToDisplay.map(post => {
                const authorInfo = users.find(author => author.id === post.authorId)
                const categoryBadge = categories.find(cat => cat.id === post.categoryId)
 return ( <div> 
      
  
  <Card key={post.id}>
             <img src={post.coverImage}/>
            <div>{post.slug}</div>
            <div>{authorInfo.name}</div>
            <Avatar src={authorInfo.avatar}></Avatar>
            <div> Read time:{post.readTime}</div>
            
</Card>
            </div>)})
            
            
            }
        </div>
    )
}

export default CategoriesDetail
