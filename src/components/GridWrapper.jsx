"use client";

export default function GridWrapper({
  children,
  templateAreas = [],
  columns = 4,
  rows = 3,
  className = "", // accept className
}) {
  const style = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows:
  Array.isArray(rows) ? rows.join(" ") :
  typeof rows === "string" ? rows :
  `repeat(${rows}, 1fr)`,
    gridTemplateAreas: templateAreas.map(row => `"${row}"`).join(" "),
  };

  return (
    <div
      style={style}
      className={` grid gap-1/16 min-h-500px rounded-2xl bg-grey backdrop-blur-md mt-20 mb-20 ml-5 mr-20 overflow-hidden no-scrollbar ${className}`}
    >
      {children}
    </div>
  );
}
