
import AnalysisComponent from '@/components/AnalysisComponent'
import NavigatorComponent from '@/components/NavigatorComponent'
import QuestionsComponent from '@/components/QuestionsComponent'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='w-full min-h-screen flex flex-col bg-[#292e36]' >
        <AnalysisComponent />
        <QuestionsComponent />
        <NavigatorComponent />
    </main>
  )
}
