
import DataTable from "../../../shared/components/Datatable/Datatable";
import Search from "../../../shared/components/Datatable/Search";
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
            <Search search={search} setSearch={setSearch} />
            <DataTable 
                sortConfig={sortConfig}
                handleSort={handleSort}
                processedList={processedUsers}
                columns={columns}
            />
        </div>
    );
}

export default User;