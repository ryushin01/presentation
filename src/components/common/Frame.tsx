export default function Frame({ aspectRatio = "inherit", children }) {
  return (
    <span className={`_frame 
    ${aspectRatio === "inherit"
      ? "h-full"
      : aspectRatio === "square"
        ? "aspect-square"
        : "aspect-video"
    }`}>
      {children}
    </span>
  );
}