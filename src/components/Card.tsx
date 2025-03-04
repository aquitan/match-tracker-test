import { useState } from "react";
import { Match } from "../type/match_type";
import ChevronDown from "../assets/chevron-down.svg";
import { CardTeamDetails } from "./CardTeamDetails";
import { CardDivider } from "./CardDivider";
import { CardHeader } from "./CardHeader";

const Card = ({ match }: { match: Match }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { awayTeam, homeTeam } = match;

  return (
    <div
      onClick={() => setIsOpen((prev) => !prev)}
      className="[&:nth-child(3n)]:bg-[linear-gradient(90deg,#0A0E12_0%,#0F1318_50%)]
		[&:nth-child(1n)]:bg-[linear-gradient(90deg,#0F1318_0%,#0A0E12_50%)]
		[&:nth-child(2n)]:bg-[linear-gradient(90deg,#0B0F13_0%,#0F1318_30%, #0A0E12_60%)] p-2 md:px-[36px] md:-[16px] cursor-pointer"
    >
      <CardHeader match={match} isOpen={isOpen} />
      {isOpen && (
        <div className="flex flex-col lg:flex-row justify-between w-full gap-8 mt-8">
          <CardTeamDetails team={homeTeam} />
          <CardDivider />
          <CardTeamDetails team={awayTeam} />
        </div>
      )}
      <div className="flex md:hidden items-center justify-center w-full">
        <img
          className={`${isOpen ? "rotate-180" : "rotate-0"} w-8 h-8`}
          src={ChevronDown}
          alt=""
        />
      </div>
    </div>
  );
};

export { Card };
