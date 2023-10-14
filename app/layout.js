import Navbar from '@/components/Navbar'
import './globals.css'



export const metadata = {
  title: 'Taalim School of Music',
  description: 'A music school based out of Kolkata, India',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
      <main className='overflow-hidden'>
      {children}
      </main>
           </body>
    </html>
  )
}
