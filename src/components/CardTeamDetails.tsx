import { Team } from '../type/match_type';
import UserAvatar from "../assets/avatar_global.svg";


const CardTeamDetails = ({team}:{team: Team}) => {
	return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex gap-2">
        <div className="flex flex-col xl:flex-row items-center gap-2 bg-[#101318] px-3 py-2 rounded-sm justify-between w-full">
          <div className="flex flex-row items-center justify-center text-white text-base gap-2 flex-nowrap w-full">
            <img className="md:h-[32px] md:w-[32px]" src={UserAvatar} alt="" />
            <div className="text-sm md:text-base break-all">
              {team.players[0].username}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs md:text-sm text-[#FAFAFA66]">Убийств:</span>{" "}
            <span className="text-sm md:text-base">{team.players[0].kills}</span>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center gap-2 bg-[#101318] px-3 py-2 rounded-sm justify-between w-full">
          <div className="flex items-center text-white text-base gap-2">
            <img className="md:h-[32px] md:w-[32px]" src={UserAvatar} alt="" />
            <div className="text-sm md:text-base break-all">
              {team.players[1].username}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs md:text-sm text-[#FAFAFA66]">
              Убийств:
            </span>{" "}
            <span className="text-sm md:text-base break-all">
              {team.players[1].kills}
            </span>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center gap-2 bg-[#101318] px-3 py-2 rounded-sm justify-between w-full">
          <div className="flex items-center text-white text-base gap-2 ">
            <img className="md:h-[32px] md:w-[32px]" src={UserAvatar} alt="" />
            <div className="text-sm md:text-base break-all">
              {team.players[2].username}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs md:text-sm text-[#FAFAFA66]">
              Убийств:
            </span>{" "}
            <span className="text-sm md:text-base">{team.players[2].kills}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between md:justify-center bg-[#101318] px-3 py-2">
        <div className="flex gap-2 max-w-[264px] justify-center w-full">
          <div className="text-xs md:text-sm text-[#FAFAFA66]">Points: </div>
          <div className="text-sm md:text-base">+{team.points}</div>
        </div>
        <div className="flex gap-2 max-w-[264px] justify-center w-full">
          <div className="text-xs md:text-sm text-[#FAFAFA66]">Место: </div>
          <div className="text-sm md:text-base">{team.place}</div>
        </div>
        <div className="flex gap-2 max-w-[264px] justify-center w-full">
          <div className="text-xs md:text-sm text-[#FAFAFA66]">
            Всего убийств:{" "}
          </div>
          <div className="text-sm md:text-base">{team.total_kills}</div>
        </div>
      </div>
    </div>
  );
}

export { CardTeamDetails }