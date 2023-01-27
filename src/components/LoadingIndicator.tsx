export const LoadingIndicator = () => {
  return (
    <div className={`w-full h-full flex flex-col justify-center items-center`}>
      <div
        style={{ borderTopColor: "transparent" }}
        className="spinner w-8 h-8 border-4 border-solid rounded-full animate-spin transition-colors duration-500 border-primary"
      />
    </div>
  );
};
