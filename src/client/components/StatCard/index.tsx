import { LucideIcon } from "lucide-react";

import { StatsContainer } from "./styles";

type StatCardProps = {
  title: string;
  scheme: "primary" | "success" | "warning" | "danger" | "info";
  value: string | number;
  icon: LucideIcon;
};

function StatCard({ scheme, value, title, icon: Icon }: StatCardProps) {
  return (
    <StatsContainer className={scheme}>
      <div className="iconContainer">
        <Icon />
      </div>
      <div>
        <p>{title}</p>
        <h1>{value}</h1>
      </div>
    </StatsContainer>
  );
}

export { StatCard };
