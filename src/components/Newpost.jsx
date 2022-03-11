import React from 'react';

const NewPost = () => {
    return(
        <div className='newpost-page'>
            <form className='newpost-form' onSubmit={async (e) => {
                e.preventDefault()
            }} action="">
                <label htmlFor="">Title</label>
                <input type="text" />
                <label htmlFor="">Post</label>
                <input type="text" />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default NewPost