import './App.css';
import UpvotesList from '~/components/UpvotesList/index.jsx';
import { UpvoteContext } from '~/UpvoteContext.jsx';
import { useContext } from 'react';

function App() {
    const {
        data: { upvoteLists },
    } = useContext(UpvoteContext);
    return (
        <>
            {upvoteLists.map((upvoteList) => {
                return <UpvotesList key={upvoteList.id} id={upvoteList.id} />;
            })}
            <button
                onClick={() => {
                    window.sessionStorage.clear();
                    window.location.reload();
                }}
            >
                Clear Session
            </button>
        </>
    );
}

export default App;
