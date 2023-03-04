import Goals from "./components/Goals"
import NpsGeneral from "./components/NpsGeneral"
import Sales from "./components/Sales"
import SalesWeek from "./components/SalesWeek"

function App() {
  return (
    <div className="flex justify-center">
      <div className='px-[123px] py-[112px] grid grid-cols-[296px_351px_1fr] gap-x-8'>
        <NpsGeneral />
        <Sales />
        <Goals />
        <div className="mt-14">
          <SalesWeek />
        </div>
      </div>
    </div>
  )
}

export default App
