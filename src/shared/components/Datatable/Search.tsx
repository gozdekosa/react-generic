type Props = {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const Search = ({ search, setSearch }: Props) => {
   return (
        <input
        type="text"
        placeholder="Kullanıcı ara..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-neutral-100 dark:bg-neutral-900 mb-4 border rounded-md border-default border-neutral-200 dark:border-gray-700 placeholder:text-placeholder text-body focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
   );
};

export default Search;