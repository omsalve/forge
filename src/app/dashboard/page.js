"use client";


import Sidebar from "../../components/Sidebar";
import GridWrapper from "../../components/GridWrapper";
import BentoCard from "../../components/BentoCard";
import LocationBar from "../../components/homepage-divs/locationbar";
import Greeting from "../../components/homepage-divs/greeting";

export default function Home() {
  const homeGrid = [
    "greeting greeting location location",
    "picture weight macro calorie",
    "picture water chatbot chatbot"
  ];

  const workoutGrid = [
    "today smallTop bigBox bigBox",
    "today smallBottom bigBox bigBox"
  ];

  const dietGrid = [
    "today mealLog chatBot chatBot",
    "today mealLog chatBot chatBot",
    "today smallBottom chatBot chatBot"
  ];

  return (
    <div className="flex flex-col text-white min-h-screen overflow-y-auto">
      
      {/* Top Section - Homepage */}
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-20 p-6 min-h-screen">
          <GridWrapper templateAreas={homeGrid} columns={4} rows="50px 1fr 1fr">
            <Greeting title="Welcome, Boss" style={{ gridArea: "greeting" }} />
            <LocationBar title="Location" style={{ gridArea: "location" }} />
            <BentoCard title="Your Picture" style={{ gridArea: "picture" }} />
            <BentoCard title="Weight Tracker" style={{ gridArea: "weight" }} />
            <BentoCard title="Macros" style={{ gridArea: "macro" }} />
            <BentoCard title="Calories" style={{ gridArea: "calorie" }} />
            <BentoCard title="Water Intake" style={{ gridArea: "water" }} />
            <BentoCard title="Ghostface Chat" style={{ gridArea: "chatbot" }} />
          </GridWrapper>
        </main>
      </div>

      {/* Bottom Section - Workout */}
      <section id="workout">
        <div className="flex">
          <main className="flex-1 ml-20 p-6 min-h-screen">
            <GridWrapper templateAreas={workoutGrid} columns={3} rows="1fr 1fr">
              <BentoCard title="Today’s Workout" style={{ gridArea: "today" }} />
              <BentoCard title="Top Small Box" style={{ gridArea: "smallTop" }} />
              <BentoCard title="Bottom Small Box" style={{ gridArea: "smallBottom" }} />
              <BentoCard title="Big Workout Box" style={{ gridArea: "bigBox" }} />
            </GridWrapper>
          </main>
        </div>
      </section>

      {/* Third Section - Another Workout Layout */}
      <section id="another">
        <div className="flex">
          <main className="flex-1 ml-20 p-6 min-h-screen">
            <GridWrapper templateAreas={dietGrid} columns={4} rows="50px 1fr 1fr">
              <BentoCard title="Today's Meals" style={{ gridArea: "today" }} />
              <BentoCard title="Meal Log" style={{ gridArea: "mealLog" }} />
              <BentoCard title="Another Bottom Small" style={{ gridArea: "smallBottom" }} />
              <BentoCard title="AI Suggested Meals" style={{ gridArea: "chatBot" }} />
            </GridWrapper>
          </main>
        </div>
      </section>
    </div>
  );
}
