interface LinearFiltersProps {
  /** Prop description. */
  propName?: string;
}

/** JSDoc description for the item. [Documentation]() */
export default function LinearFilters({ propName }: LinearFiltersProps) {
  return (
    <div>
      {propName}
      LinearFilters
    </div>
  );
}

LinearFilters.displayName = "LinearFilters";
