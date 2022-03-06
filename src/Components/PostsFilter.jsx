import MyInput from "./UI/MyInput/MyInput";
import MySort from "./UI/MySort/MySort";

function PostsFilter({ filter, setFilter }) {
  return (
    <>
      <MyInput
        placeholder="Поиск..."
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySort
        value={filter.sort}
        defaultValue="По умолчанию"
        options={[
          { value: "title", name: "По заголовку" },
          { value: "description", name: "По содержанию" },
        ]}
        onChange={(sortPosts) => setFilter({ ...filter, sort: sortPosts })}
      />
    </>
  );
}

export default PostsFilter;
