export default function LoadingSpinner({ size = 'md', fullscreen = false }) {
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4'
  };
  
  const spinner = (
    <div className={`${sizes[size]} border-blue-200 border-t-blue-600 rounded-full animate-spin`}></div>
  );
  
  if (fullscreen) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
        {spinner}
      </div>
    );
  }
  
  return (
    <div className="flex items-center justify-center p-8">
      {spinner}
    </div>
  );
}
