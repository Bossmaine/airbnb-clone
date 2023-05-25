import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import ClienOnlyComponent from './components/ClienOnlyComponent'
import Modal from './components/Modals/Modal'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'A clone of Airbnb',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClienOnlyComponent>
          <Modal />
          <Navbar />
        </ClienOnlyComponent> 
        {children}
      </body>
    </html>
  )
}
