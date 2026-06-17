
 
 export function MemberCard({persona, index}) {
  return (
    <>
      <div className={`relative ${index % 2 !== 0 ? "mt-16" : ""}`}>
        <img className="w-full h-56 object-cover md:w-full md:h-115" src={persona.imagen} alt={persona.nombre} />
        <h2 className="mt-1 font-bold text-sm md:text-xl ">{persona.nombre} {persona.apellido}</h2>
        <p className="absolute text-xs uppercase  font-medium top-0 right-[-18px]  [writing-mode:vertical-rl] text-gray-600 md:text-xl md:right-[-26px]">{persona.rol}</p>
      </div>
    </>
  )
}
export default MemberCard