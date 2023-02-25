import React, { useState, useEffect } from 'react'
import axios from 'axios'

const example_data = [
  {
    userId: 1,
    id: 1,
    title: 'test title 1',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
  },
  {
    userId: 1,
    id: 2,
    title: 'test title 2',
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
  }
]

const API_HOST_URL = 'https://jsonplaceholder.typicode.com/posts';

const Posts = () => {
  const [postList, setPostList] = useState(example_data)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const renderGrid = () => {
    return (
      <div>
        <button type="button" style={{marginBottom:'1rem'}} className='btn btn-primary' onClick={createPost}>Create Post</button>
        {postList.length > 0 &&
          postList.map(post => {
            return (
              <div key={post.id} style={{ marginBottom : '1rem' }}>
                <div className='card' key={post.id}>
                  <div className='card-header'>{post.title}</div>
                  <div className='card-body'>{post.body}</div>
                </div>
              </div>
            )
          })}
      </div>
    )
  }

  const createPost = () => {
    const payload = {
      userId : 1,
      title : 'new post',
      body : 'new post body',
    }

    setLoading(true)
    axios.post(API_HOST_URL, payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      setPostList([...postList, res.data])
      setLoading(false)
    })
    .catch(err => {
      setError(err)
      console.log(err)
    })
  }
  
  const fetchPostsWithAxios = () => {
    setLoading(true)
    axios.get(API_HOST_URL)
      .then(res => res.data)
      .then(data => {
        setPostList(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
        console.log(err)
        setLoading(false)
      })
  }

  const fetchPosts = () => {
    setLoading(true)
    fetch(API_HOST_URL)
    .then(res => res.json())
    .then(data => {
        setPostList(data)
        setLoading(false)
      })
    .catch(err => {
        setError(err)
        setLoading(false)
      })
  }
  
  useEffect(() => {
    //fetchPosts();
    //fetchPostsWithAxios();
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  if (postList) {
    return renderGrid()
  }

  return <div>Nothing to show yet</div>
}

export default Posts
