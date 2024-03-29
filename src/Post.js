import React from 'react'

export default function Post({post}) {
  return (
    <article className='post'>
        <h2>{post.title}</h2>
        <p className='postdate'>{post.month}</p>
        <p className='postBody'>{ (post.body) .length <=25 ? post.body : `${(post.body).slice(0,25)}...`}</p>

    </article>
  )
}
