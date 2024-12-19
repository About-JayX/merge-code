export const Link = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <a
    href="https://t.me/MINIDOGE_MEMES_RAIDS"
    target="_blank"
    rel="noopener noreferrer"
    className={`cursor-pointer ${className}`}
  >
    {children}
  </a>
); 