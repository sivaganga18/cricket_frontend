import React from "react";
import DashboardLayout from "../screenCompoments/dashbord/DashboardLayout";

export default function DashbordScreen() {
  const totalTeams = 10;
  const totalPlayers = 150;
  const soldPlayers = 80;
  const unsoldPlayers = totalPlayers - soldPlayers;
  return (
    <DashboardLayout
      totalTeams={totalTeams}
      totalPlayers={totalPlayers}
      soldPlayers={soldPlayers}
      unsoldPlayers={unsoldPlayers}
    />
  );
}
