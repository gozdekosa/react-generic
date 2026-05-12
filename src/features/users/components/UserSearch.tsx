type Props = {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const UserSearch = ({ search, setSearch }: Props) => {
   return (
        <input
        type="text"
        placeholder="Kullanıcı ara..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-neutral-primary border border-default border-neutral-200 placeholder:text-placeholder text-body focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
   );
};

export default UserSearch;