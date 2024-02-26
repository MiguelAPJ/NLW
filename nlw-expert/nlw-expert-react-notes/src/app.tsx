import { ChangeEvent, useState } from 'react'
import logo from './assets/Logo.svg'
import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'



interface Note {
   id: string
   date: Date
   content: string
}

export function App() {
   const [search,setSearch] = useState('')

   const [notes, setNotes] = useState<Note[]>(() => {
      const notesOnStorage = localStorage.getItem('notes')

      if (notesOnStorage) {
         return JSON.parse(notesOnStorage )
      }

      return []
   })     


   function onNoteCreated(content: string) {
      const newNote = {
         id: crypto.randomUUID(), // Essa função gera um ID unico 
         date:new Date(),
         content,
      }

      const notesArray = [newNote, ...notes]
      setNotes(notesArray)

      localStorage.setItem('notes', JSON.stringify(notesArray)) // Função para transformar um array em JSON

   }

   //funcao para exlcuir uma nota
   function onNoteRemove(id: string) {
      const notesarray = notes.filter(note => {
         return note.id != id
      })

      setNotes(notesarray)

      localStorage.setItem('notes', JSON.stringify(notesarray))
   }

   //funcao para fazer busca nas notas
   function handlerSearch(event: ChangeEvent<HTMLInputElement>) {
      const query = event.target.value

      setSearch(query)
   }
   
   // codigo q faz a busca e o .toLocaleLowerCase serve para ignorar letra maiuscula e minuscula
   const filteredNotes = search != ''
      ? notes.filter(note => note.content.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
      : notes




 return (
   <div className="mx-auto max-w-6xl my-12 space-y-6 px-5">
      <img src={logo} alt="NLW Expert" />

      <form className="w-full mt-6">
         <input 
            type="text" 
            placeholder='Busque em suas notas...' 
            className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
            onChange={handlerSearch}
         />
      </form>


      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[250px]">
        
         <NewNoteCard onNoteCreated={onNoteCreated} />

         {filteredNotes.map(note => {
            return <NoteCard key={note.id} note={note} onNoteRemove={onNoteRemove} />
         })}

       
 
      </div>

   </div>

   
   
 )
}

 
