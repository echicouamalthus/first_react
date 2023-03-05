
const List = (props) => {
 
    const blogs = props.blogs
    const titre = props.titre

    return ( 
        <div className="List">
            <h2 className="titre-principale">{titre}</h2>
            {
                blogs.map( (blog) => (
                    <div className="blog" key={blog.id}>
                        <a href="" className="blog-title">{blog.title}</a>
                        <h6 className="blog-body">{blog.body}</h6>
                        <small className="blog-description-date">Publier le {blog.date}</small>
                        <p className="blog-author">Plubier par {blog.author}</p>
                    </div>
                ))
            }
        </div>
     );
}
 
export default List;