import RefreshIcon from '../assets/refresh.svg'

const ReloadButton = ({ name, onPress, isLoading }: { name: string, isLoading: boolean, onPress: () => void}) => {
  return (
    <button
      onClick={onPress}
      className="flex items-center justify-center gap-2.5 bg-button text-white w-full md:w-[204px] h-[56px] rounded-sm hover:bg-button-active ease-in-out cursor-pointer"
    >
      {name}
      <img className={`${isLoading ? 'rotate-90 ease-in-out' : ''}`} src={RefreshIcon} alt="" />
    </button>
  );
};

export { ReloadButton };