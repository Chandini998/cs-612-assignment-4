import React from 'react'
import Post from './Post'

function Main(props) {

    if(props.posts[0] && props.posts[0].text === 'adult Labrador retriever') {
        props.posts.shift()
        props.posts.reverse()
    }

    return (
        <main>
            <div className="blog-container">
                {
                    props.posts.length > 0 ?
                        props.posts.map(post => {
                            return <Post postData={post} ></Post>
                        })
                        : ""
                }
            </div>
        </main>
    )
}

export default Main
