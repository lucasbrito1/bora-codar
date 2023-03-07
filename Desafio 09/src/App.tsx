import Converter from "./components/Converter"

function App() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="bg-white md:w-[50rem] md:h-[43.25rem] w-[20rem] h-[32rem] drop-shadow-[0px_4px_32px_rgba(15,23,42,0.15)] rounded-2xl py-16 px-20">
        <Converter />
      </div>
    </div>
  )
}

export default App
