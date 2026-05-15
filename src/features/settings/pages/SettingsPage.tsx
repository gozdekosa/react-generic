import ThemeSelector from "../components/ThemeSelector"

const SettingsPage = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Settings</h1>
            <p>Here you can adjust your application settings.</p>
            <ThemeSelector />
        </div>
    )
}

export default SettingsPage