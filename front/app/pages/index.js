const Home = (props) => {
  return (
    <div>
      <h2>
          POSTの一覧
        </h2>
        <table>
          <thead></thead>
          {props.posts.map((post) =>
          <tbody>
            <tr>
              <td>{post.id}.</td>
              <td>{post.title}</td>
            </tr>
          </tbody>
          )}
        </table>
    </div>
  )
}

export const getStaticProps = async () => {
  // URLはlocalhostではなくapiとなる
  const response = await fetch("http://api:3000/posts", {method: "GET"});
  const json = await response.json();

  return {
    props: {
      posts: json
    },
  };
}

export default Home;