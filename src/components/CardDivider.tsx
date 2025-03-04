const CardDivider = () => {
	return (
    <div
      className="
					flex
					relative
					items-center
					justify-center
					lg:hidden
					text-devider
					before:h-[1px]
					before:w-[40%]
					before:left-0
					before:bg-devider
					before:absolute
					after:h-[1px]
					after:w-[40%]
					after:right-0
					after:bg-devider
					after:absolute
					"
    >
      <div className="overflow-hidden">VS</div>
    </div>
  );
}

export { CardDivider };