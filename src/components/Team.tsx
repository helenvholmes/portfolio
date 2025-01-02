import Label from "./Label";

export interface TeamProps {
  members?: {
    name?: string;
    role?: string;
  }[];
  year?: string;
}

/** JSDoc description for the item. [Documentation]() */
export default function Team({ members, year }: TeamProps) {
  return (
    <div>
      {members &&
        members.map((item, index) => (
          <span className="flex gap-1" key={index}>
            <Label>{item.role}:</Label> {item.name}
            <br />
          </span>
        ))}
      <span className="text-sm italic">{year}</span>
    </div>
  );
}

Team.displayName = "Team";
