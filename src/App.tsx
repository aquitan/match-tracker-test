
import { useEffect, useState } from 'react';
import './App.css'
import { Card, ErrorMessage, LoadingMessage, ReloadButton } from './components';
import axios from 'axios';
import { Match } from './type/match_type';

function App() {
	const [matches, setMatches] = useState<Match[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);

	useEffect(() => {
		getMatches()
	}, []);

	const getMatches = async () => {
		setIsLoading(true);
		setIsError(false);
		try {
			const response = await axios.get(
				"https://app.ftoyd.com/fronttemp-service/fronttemp"
			);

			setMatches(response.data.data.matches);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
			setIsError(true);
			setIsLoading(false);
		}
	}

  return (
    <div className="mx-auto pt-6 p-4 md:p-[42px]">
      <div className="flex flex-col md:flex-row justify-between items-center mb-5 w-full">
        <h1 className="font-bold text-2xl mb-3.5 md:mb-0 italic">
          Match Tracker
        </h1>
        <div className="flex flex-col-reverse md:flex-row items-center gap-3 w-full md:w-auto">
          {isError && <ErrorMessage />}
          {isLoading && <LoadingMessage />}
          <ReloadButton
            onPress={getMatches}
            isLoading={isLoading}
            name="Обновить"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {matches &&
          matches.map((match: Match) => {
            return <Card key={match.time} match={match} />;
          })}
      </div>
    </div>
  );
}

export default App
