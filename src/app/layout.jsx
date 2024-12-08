import './globals.css'
import { AppHeader } from '../components/AppHeader'

import '@fontsource-variable/montserrat'
import { Sidebar } from '@/components/Sidebar'
import { ReduxProvider } from '@/components/ReactProvider'
import { PlusButton } from '../components/PlusButton'
import { AddNewTask } from '@/components/AddNewTask'

export const metadata = {
  title: 'Daily Planner',
  description: 'A daily planner app enhanced with AI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full">
        <ReduxProvider>
            <Sidebar />
            <AppHeader />
            <PlusButton />
            <AddNewTask />
            <main className="p-4 pt-7">{children}</main>
        </ReduxProvider>
      </body>
    </html>
  )
}
