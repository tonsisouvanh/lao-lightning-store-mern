function ThemedSuspense() {
  return (
    <div className="h-screen w-full p-6 text-lg font-medium text-gray-600 dark:bg-gray-900 dark:text-gray-400 flex items-center justify-center">
      <span className="loading loading-dots loading-lg"></span>
    </div>
  );
}

export default ThemedSuspense;
