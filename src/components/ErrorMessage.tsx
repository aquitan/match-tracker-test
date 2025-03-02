import ErrorIcon from '../assets/error-icon.svg';

const ErrorMessage = () => {
	return (
    <div className="flex items-center gap-2.5 bg-error-bg px-6 py-4 rounded-sm">
      <img src={ErrorIcon} alt="" />
      <p>Ошибка: не удалось загрузить информацию</p>
    </div>
  );
}

export { ErrorMessage };