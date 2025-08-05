"use client";

import Sidebar from "../components/Sidebar";
import GridWrapper from "../components/GridWrapper";
import BentoCard from "../components/BentoCard";

export default function Home() {
  const gridAreas = [
    "greeting greeting location location",
    "picture weight macro calorie",
    "picture water chatbot chatbot"
  ];

  return (
    <div className="flex min-h-screen overflow-hidden">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1  ml-20 p-6">
        <GridWrapper templateAreas={gridAreas}
  // 👇 1st row = 50px, others = 1fr (expand to fit)
  columns={4}
  rows="50px 1fr 1fr">
          <BentoCard title="Your Picture" style={{ gridArea: "picture" }} />
          <BentoCard title="Weight Tracker" style={{ gridArea: "weight" }} />
          <BentoCard title="Macros" style={{ gridArea: "macro" }} />
          <BentoCard title="Calories" style={{ gridArea: "calorie" }} />
          <BentoCard title="Water Intake" style={{ gridArea: "water" }} />
          <BentoCard title="Ghostface Chat" style={{ gridArea: "chatbot" }} />
        </GridWrapper>
      </main>
    </div>
  );
}
