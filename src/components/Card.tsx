import { useState } from 'react';
import TeamIcon from '../assets/team-icon.svg';
import { Match } from '../type/match_type';
import { MatchStatus } from './MatchStatus';
import UserAvatar from '../assets/avatar_global.svg';
import ChevronDown from '../assets/chevron-down.svg';

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
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col md:flex-row justify-between w-full gap-8 mt-8">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex gap-2">
              <div className="flex flex-col md:flex-row items-center gap-2 bg-[#101318] px-3 py-2 rounded-sm justify-between w-full">
                <div className="flex flex-row items-center text-white text-md gap-2 flex-nowrap w-full">
                  <img
                    className="md:h-[32px] md:w-[32px]"
                    src={UserAvatar}
                    alt=""
                  />
                  <div className="text-sm md:text-md break-all">
                    {homeTeam.players[0].username}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-md text-[#FAFAFA66]">Убийств:</span>{" "}
                  <span className="text-md">{homeTeam.players[0].kills}</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-2 bg-[#101318] px-3 py-2 rounded-sm justify-between w-full">
                <div className="flex items-center text-white text-md gap-2">
                  <img
                    className="md:h-[32px] md:w-[32px]"
                    src={UserAvatar}
                    alt=""
                  />
                  <div className="text-sm md:text-md break-all">
                    {homeTeam.players[1].username}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm md:text-md text-[#FAFAFA66]">
                    Убийств:
                  </span>{" "}
                  <span className="text-sm md:text-md break-all">
                    {homeTeam.players[1].kills}
                  </span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-2 bg-[#101318] px-3 py-2 rounded-sm justify-between w-full">
                <div className="flex items-center text-white text-md gap-2 ">
                  <img
                    className="md:h-[32px] md:w-[32px]"
                    src={UserAvatar}
                    alt=""
                  />
                  <div className="text-sm md:text-md break-all">
                    {homeTeam.players[2].username}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-md text-[#FAFAFA66]">Убийств:</span>{" "}
                  <span className="text-md">{homeTeam.players[2].kills}</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between md:justify-center bg-[#101318] px-3 py-2">
              <div className="flex gap-2 max-w-[264px] justify-center w-full">
                <div className="text-sm md:text-md text-[#FAFAFA66]">
                  Points:{" "}
                </div>
                <div className="text-sm md:text-md">{homeTeam.points}</div>
              </div>
              <div className="flex gap-2 max-w-[264px] justify-center w-full">
                <div className="text-sm md:text-md text-[#FAFAFA66]">
                  Место:{" "}
                </div>
                <div className="text-md">{homeTeam.place}</div>
              </div>
              <div className="flex gap-2 max-w-[264px] justify-center w-full">
                <div className="text-sm md:text-md text-[#FAFAFA66]">
                  Всего убийств:{" "}
                </div>
                <div className="text-sm md:text-md">{homeTeam.total_kills}</div>
              </div>
            </div>
          </div>

          <div className='flex md:hidden'>VS</div>

          <div className="flex flex-col gap-2 w-full">
            <div className="flex gap-2">
              <div className="flex flex-col md:flex-row items-center gap-2 bg-[#101318] px-3 py-2 rounded-sm justify-between w-full">
                <div className="flex items-center text-white text-md gap-2 ">
                  <img
                    className="md:h-[32px] md:w-[32px]"
                    src={UserAvatar}
                    alt=""
                  />
                  <div className="text-sm md:text-md break-all">
                    {awayTeam.players[0].username}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-md text-[#FAFAFA66]">Убийств:</span>{" "}
                  <span className="text-md">{awayTeam.players[0].kills}</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-2 bg-[#101318] px-3 py-2 rounded-sm justify-between w-full">
                <div className="flex items-center text-white text-md gap-2 ">
                  <img
                    className="md:h-[32px] md:w-[32px]"
                    src={UserAvatar}
                    alt=""
                  />
                  <div className="text-sm md:text-md break-all">
                    {awayTeam.players[1].username}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-md text-[#FAFAFA66]">Убийств:</span>{" "}
                  <span className="text-md">{awayTeam.players[1].kills}</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-2 bg-[#101318] px-3 py-2 rounded-sm justify-between w-full">
                <div className="flex items-center text-white text-md gap-2">
                  <img
                    className="md:h-[32px] md:w-[32px]"
                    src={UserAvatar}
                    alt=""
                  />
                  <div className="text-sm md:text-md break-all">
                    {awayTeam.players[2].username}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm md:text-md text-[#FAFAFA66]">
                    Убийств:
                  </span>{" "}
                  <span className="text-sm md:text-md">
                    {awayTeam.players[2].kills}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between md:justify-center bg-[#101318] px-3 py-2">
              <div className="flex gap-2 max-w-[264px] justify-center w-full">
                <div className="text-sm md:text-md text-[#FAFAFA66]">
                  Points:{" "}
                </div>
                <div className="text-sm md:text-md">{awayTeam.points}</div>
              </div>
              <div className="flex gap-2 max-w-[264px] justify-center w-full">
                <div className="text-sm md:text-md text-[#FAFAFA66]">
                  Место:{" "}
                </div>
                <div className="text-sm md:text-md">{awayTeam.place}</div>
              </div>
              <div className="flex gap-2 max-w-[264px] justify-center w-full">
                <div className="text-sm md:text-md text-[#FAFAFA66]">
                  Всего убийств:{" "}
                </div>
                <div className="text-sm md:text-md">{awayTeam.total_kills}</div>
              </div>
            </div>
          </div>
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

export {Card};