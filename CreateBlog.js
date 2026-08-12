import "../App.css";

function CreateBlog(){

return(

<div className="card">

<h1>Create Blog</h1>

<input type="text" placeholder="Blog Title"/>

<textarea placeholder="Write your blog here..."></textarea>

<button>Publish</button>

</div>

)

}

export default CreateBlog;