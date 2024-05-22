
import { useEffect, useState } from 'react'
import './App.css'
import Jobboard from './components/Jobboard'
function App() {

  const [ids,setIds] = useState([])
  
  useEffect(() => { 
    const getIds = async () => {
      try {
        const res = await fetch("https://hacker-news.firebaseio.com/v0/jobstories.json")
        if (!res.ok) {
          console.log("Something went wrong")
        }
        const data = await res.json()
        setIds(data)
      } catch (error) {
        console.log(error)
      }
    }
    getIds()
  }, [])

  return (
    <main className='main'>
      <Jobboard ids={ids} />
     
    </main>
  )
}

export default App
