import logo from './assets/Logo.svg'

export function App() {
 return (
   <div className="mx-auto max-w-6xl my-12 space-y-6 ">
      <img src={logo} alt="NLW Expert" />

      <form className="w-full mt-6">
         <input 
            type="text" 
            placeholder='Busque em suas notas...' 
            className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
         />
      </form>


      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 gap-4 auto-rows-[250px]">
         <div className="rounded-md bg-slate-700 p-5 space-y-3 overflow-hidden">
            <span className="text-sm font-medium text-slate-200">
               Adiconar nota
            </span>
            <p className="text-sm leading-6 text-slate-400">
               Grave uma nota em áudio que será convertida para texto automaticamente.
            </p>
         </div>

         <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative">
            <span className="text-sm font-medium text-slate-200">
               há 2 dias
            </span>
            <p className="text-sm leading-6 text-slate-400">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia exercitationem nam dolores enim ab inventore, ex, in autem qui delectus error vel quaerat. Praesentium dolore quidem itaque aspernatur laboriosam illum!
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia exercitationem nam dolores enim ab inventore, ex, in autem qui delectus error vel quaerat. Praesentium dolore quidem itaque aspernatur laboriosam illum!
            </p>

            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0"/>
         </div>

         <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden">
            <span className="text-sm font-medium text-slate-200">
               há 4 dias
            </span>
            <p className="text-sm leading-6 text-slate-400">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam corporis numquam eum dignissimos beatae sit ipsum consequatur amet quo sapiente, provident cumque voluptatum voluptatibus laboriosam ipsam laudantium ducimus soluta explicabo!
            </p>
         </div>

   

      </div>

   </div>

   
   
 )
}


