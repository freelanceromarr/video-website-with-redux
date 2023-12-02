import Image from 'next/image'
import Tags from './components/Tags'
import Videos from './components/grid/Videos'

export default function Home() {
  return (
    <main >
       <Tags/>
       <Videos/>
    </main>
  )
}
