import { ArrowUp, ArrowDown, ArrowUpDown } from "lucide-react";

type SortIconProps = {
    active: boolean;
    direction: "asc" | "desc" | null;
};

const SortIcon = ({ active, direction }: SortIconProps) => {
    if (!active) {
        return <ArrowUpDown size={16} />;
    }

    return direction === "asc" ? (
        <ArrowUp size={16} />
    ) : (
        <ArrowDown size={16} />
    );
};

export default SortIcon;