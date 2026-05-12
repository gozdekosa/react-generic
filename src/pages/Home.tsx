const Home = () => {
    return (        
        <>
        <div className="p-4 border-1 border-default border-dashed rounded-base border-gray-200">
            <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="flex items-center justify-center h-24 rounded bg-neutral-primary-soft border-default border-gray-200">
                    <p className="text-sm text-body">A</p>
                </div>
                <div className="flex items-center justify-center h-24 rounded bg-neutral-primary-soft border-default border-gray-200">
                    <p className="text-sm text-body">B</p>
                </div>
                <div className="flex items-center justify-center h-24 rounded bg-neutral-primary-soft border-default border-gray-200">
                    <p className="text-sm text-body">C</p>
                </div>
            </div>
        </div>
        </> 
    )   
}

export default Home