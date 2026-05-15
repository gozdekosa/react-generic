import SortIcon from "./SortIcon";

const DataTable = ({sortConfig, handleSort, processedUsers, columns }) => {
    return (
        <div>
            <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs bg-neutral-100 dark:bg-neutral-900 rounded-md border border-default border-neutral-200 dark:border-gray-700">
                <table className="w-full text-sm text-left rtl:text-right text-body">
                    <thead className="text-sm text-body bg-neutral-100 dark:bg-neutral-900 border-b rounded-md border-default border-neutral-200 dark:border-gray-700">
                        <tr>
                           {columns.map((col) => (
                            <th key={col.key} className="px-6 py-3 font-medium">
                                <button
                                onClick={() => handleSort(col.key)}
                                className="flex items-center gap-1"
                                >
                                {col.label}

                                <SortIcon
                                    active={sortConfig?.key === col.key}
                                    direction={sortConfig?.direction ?? undefined}
                                />
                                </button>
                            </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                    {processedUsers.map((row, index) => (
                        <tr key={index}>
                        {columns.map((col) => (
                            <td
                            key={String(col.key)}
                            className="px-6 py-4"
                            >
                            {String(row[col.key])}
                            </td>
                        ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;