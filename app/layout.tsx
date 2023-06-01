import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import ClienOnlyComponent from './components/ClienOnlyComponent'
import RegisterModal from './components/Modals/RegisterModal'
import ToasterProvide from './Providers/ToasterProvide'
import LoginModal from './components/Modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import RentModal from './components/Modals/RentModal'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'A clone of Airbnb',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClienOnlyComponent>
          <ToasterProvide />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClienOnlyComponent> 
        {children}
      </body>
    </html>
  )
}
