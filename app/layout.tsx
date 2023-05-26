import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import ClienOnlyComponent from './components/ClienOnlyComponent'
import RegisterModal from './components/Modals/RegisterModal'
import ToasterProvide from './Providers/ToasterProvide'

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
          <ToasterProvide />
          <RegisterModal />
          <Navbar />
        </ClienOnlyComponent> 
        {children}
      </body>
    </html>
  )
}
