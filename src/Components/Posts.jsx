import MyButton from "./UI/MyButton/MyButton";

function Posts(props) {
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {props.postsList.map((post) => (
          <li key={post.id} className="card horizontal row">
            <span className="card-title col s2">{post.title}</span>
            <div className="card-stacked">
              <p className="card-content">{post.description}</p>
              <div className="card-action">
                <MyButton
                  style={{ bacgroundColor: "white" }}
                  onClick={() => props.removePost(post)}
                >
                  Удалить
                </MyButton>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
