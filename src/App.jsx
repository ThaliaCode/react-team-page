import MemberCard from "./components/MemberCard"
import { team } from "./data/team";
function App() {
  

  return (
    <>
    <main className="flex flex-col justify-center items-center bg-[#ffffff] min-h-screen">
    <header>
      <h1 className="font-bold text-2xl mt-9">The creative crew 💡 </h1>
    </header>
    <section className="m-9">
      <h2 className="font-bold text-xl">Who we are</h2>
      <p>We are team of creatively diverse driven innovative 
        individuals working in various locations  from the world
      </p>
    </section>
    <section className="mt-1 grid grid-cols-2 gap-x-6 gap-y-12 px-6">
      {team.map((persona, index) => (
        <MemberCard key={index} persona={persona}  index={index}  />
      ))}
      </section>
      </main>
    </>
  )
}

export default App;
