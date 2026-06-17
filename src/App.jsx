import MemberCard from "./components/MemberCard"
import { team } from "./data/team";
function App() {
  

  return (
    <>
    <main className="flex flex-col justify-center items-center bg-[#ffffff] min-h-screen">
    <header className="md:flex md:justify-between md:items-start md:gap-75">
      <h1 className="font-bold text-2xl mt-9 md:text-5xl  ">The creative crew  </h1>
    
    <section className="m-9 md:w-90 ">
      <h2 className="font-bold text-xl md:text-3xl ">Who we are</h2>
      <p className="text-xl">We are team of creatively diverse driven innovative 
        individuals working in various locations  from the world
      </p>
    </section>
  
    </header>
    <section className="mt-1 grid grid-cols-2 gap-x-6 gap-y-12 px-6  md:grid md:grid-cols-3  md:gap-x-20 md:gap-y-28  md:px-12">
      {team.map((persona, index) => (
        <MemberCard key={index} persona={persona}  index={index}  />
      ))}
      </section>
      </main>
    </>
  )
}

export default App;
