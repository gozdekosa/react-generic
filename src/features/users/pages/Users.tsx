
import UserSearch from "../components/UserSearch";
import UserTable from "../components/UserTable";
import useUsers from "../hooks/useUsers";
import useUserTable from "../hooks/UseUserTable";

const User = () => {
    const { users } = useUsers();

    const {
        search,
        setSearch,
        sortConfig,
        handleSort,
        processedUsers,
        columns,
    } = useUserTable(users);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Users</h1>
            <UserSearch search={search} setSearch={setSearch} />
            <UserTable 
                sortConfig={sortConfig}
                handleSort={handleSort}
                processedUsers={processedUsers}
                columns={columns}
            />
        </div>
    );
}

export default User;