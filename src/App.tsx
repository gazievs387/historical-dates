import { HistoricalDates } from "components/HistoricalDates";
import "styles/App.scss"
import { Tour } from "./Tour";


function App() {
    return (
        <Tour>
            <main>
                <HistoricalDates />
            </main>
        </Tour>
    )
}


export default App;