import { useMemo } from 'react';

const MatchStatus = ({type, }: {type: string}) => {

	const matchType = useMemo(() => {
		if (type === "Ongoing") {
      return "bg-[#43AD28]";
    } else if (type === "Finished") {
      return "bg-[#EB0237]";
    } else {
      return "bg-[#EB6402]";
    }
	}, [type])

	return (
    <div
      className={`${matchType} text-center rounded-sm min-w-[70px] text-sm py-1 px-2 md:text-md md:min-w-[97px] md:py-1.5 md:px-5 flex items-center justify-center`}
    >
      {type === "Ongoing" && "Live"}
      {type === "Finished" && "Finished"}
      {type === "Scheduled" && "Match preparing"}
    </div>
  );
}

export { MatchStatus };