"use client";

import Sidebar from "../../components/Sidebar";
import GridWrapper from "../../components/GridWrapper";
import BentoCard from "../../components/BentoCard";

export default function WorkoutPage() {
  const gridAreas = [
    "today smallTop bigBox",
    "today smallBottom bigBox"
  ];

  return (
    <div className="flex min-h-screen max-h-[700px] bg-black text-white overflow-hidden">
      <Sidebar />
      <main className="flex-1 ml-20 p-6">
        <GridWrapper
          templateAreas={gridAreas}
          columns={3}
          rows="1fr 1fr"
        >
          <BentoCard title="Today’s Workout" style={{ gridArea: "today" }} />
          <BentoCard title="Top Small Box" style={{ gridArea: "smallTop" }} />
          <BentoCard title="Bottom Small Box" style={{ gridArea: "smallBottom" }} />
          <BentoCard title="Big Workout Box" style={{ gridArea: "bigBox" }} />
        </GridWrapper>
      </main>
    </div>
  );
}
