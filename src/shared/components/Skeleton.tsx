const Skeleton = () => {
  return (
    <div className="animate-pulse space-y-2">
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/3"></div>
    </div>
  );
};

export default Skeleton;