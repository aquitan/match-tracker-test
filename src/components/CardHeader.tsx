import { Match } from '../type/match_type';
import TeamIcon from "../assets/team-icon.svg";
import { MatchStatus } from "./matchStatus/MatchStatus";
import ChevronDown from "../assets/chevron-down.svg";


const CardHeader = ({match, isOpen}:{match:Match, isOpen: boolean}) => {
	return (
    <div className="w-full rounded-sm flex items-center justify-between gap-4">
      <div className="flex items-center gap-1.5 md:gap-3.5">
        <img
          className="w-7 h-7 md:w-[48px] md:h-[48px]"
          src={TeamIcon}
          alt=""
        />
        <div className="text-sm md:text-md">{match.homeTeam.name}</div>
      </div>
      <div className="flex flex-col justify-center items-center gap-1">
        <div className="text-xl flex items-center justify-center gap-1">
          {match.homeScore} : {match.awayScore}
        </div>
        <MatchStatus type={match.status} />
      </div>
      <div className="flex items-center gap-1.5 md:gap-3.5">
        <div className="text-sm md:text-md">{match.awayTeam.name}</div>
        <img
          className="w-7 h-7 md:w-[48px] md:h-[48px]"
          src={TeamIcon}
          alt=""
        />
        <div className="hidden md:flex items-center justify-center">
          <img
            className={`${isOpen ? "rotate-180" : "rotate-0"} w-8 h-8`}
            src={ChevronDown}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export {CardHeader};