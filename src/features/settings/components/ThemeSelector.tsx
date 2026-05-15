import useTheme from "../../../shared/hooks/useTheme";

const ThemeSelector = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="w-full max-w-md rounded-xl border border-neutral-200 bg-white p-5 mt-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <div className="flex items-center justify-between">
                
                <div>
                <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">
                    Theme
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Choose your preferred appearance
                </p>
                </div>

                <button
                onClick={toggleTheme}
                className="relative inline-flex items-center rounded-full px-4 py-2 text-xs font-medium transition
                bg-neutral-100 text-neutral-800 hover:bg-neutral-200
                dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700"
                >
                {theme === "light" ? "🌙 Dark" : "☀️ Light"}
                </button>

            </div>
        </div>
    )
}

export default ThemeSelector