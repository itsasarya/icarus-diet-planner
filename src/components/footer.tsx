type Props = {
  repoUrl?: string;
};

export default function Footer({ repoUrl }: Props) {
  const href = repoUrl ?? "https://github.com/itsasarya/icarus-diet-planner";

  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 bg-transparent py-4">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm text-neutral-600 dark:text-neutral-400">
        <span className="text-muted-foreground">
          This site is not affiliated with RocketWerkz or any of its
          subsidiaries.
        </span>
        <span className="mx-2">•</span>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          View source on GitHub
        </a>
      </div>
    </footer>
  );
}
