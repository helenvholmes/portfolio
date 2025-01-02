interface FlipReelProps {
  className?: string;
  logos?: string[];
}

export default function FlipReel({ className, logos }: FlipReelProps) {
  return (
    <div>
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        fill="currentColor"
        className={className}
      >
        {logos &&
          logos.map((logo, index) => <path d={logo} key={index}></path>)}
      </svg>
    </div>
  );
}

FlipReel.displayName = "FlipReel";
