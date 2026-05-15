import DataTable from "../../../shared/components/Datatable/Datatable";
import Search from "../../../shared/components/Datatable/Search";
import usePosts from "../hooks/usePosts";
import usePostTable from "../hooks/UsePostTable";

const PostList = () => {
    const { posts,loading, lastPostRef } = usePosts();

    const {
        search,
        setSearch,
        sortConfig,
        handleSort,
        processedPosts,
        columns,
    } = usePostTable(posts);

  return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Posts</h1>
            <Search search={search} setSearch={setSearch} />
            <DataTable
                sortConfig={sortConfig}
                handleSort={handleSort}
                processedList={processedPosts}
                columns={columns}
            />
            <div ref={lastPostRef} className="h-10" />

            {loading && <p>Loading...</p>}
        </div>

  );
};

export default PostList;