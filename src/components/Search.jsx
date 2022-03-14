import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { fetchQueryResults } from "../api";

const Search = (props) => {
    const { setIsLoading, setSearchResults } = props;

    const [queryString, setQueryString] = useState('')

      return <form id="search" onSubmit={async (event) => {
        event.preventDefault()
        setIsLoading(true)
        try{
         const results = await fetchQueryResults({ queryString});
         setSearchResults(results);

        }
        catch(error){
          console.error(error)
        }
        finally{
          setIsLoading(false)
        }
      }}>
          <fieldset>
      <label htmlFor="keywords">Query</label>
      <input
        id="keywords"
        type="text"
        placeholder="enter keywords..."
        value={queryString}
        onChange={(e)=>{setQueryString(e.target.value)}} />
    </fieldset>

    <button>SEARCH</button>
  </form>
}


//const [posts, setPosts] = useState([]);
//const [searchTerm, setSearchTerm] = useState('');

// function postMatches(post, text) {
  // return true if any of the fields you want to check against include the text
  // strings have an .includes() method 
// }

// const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
// const postsToDisplay = searchTerm.length ? filteredPosts : posts;

// then, in our jsx below... map over postsToDisplay instead of posts

export default Search;
