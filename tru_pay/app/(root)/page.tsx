import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import HeaderBox from '@/components/ui/HeaderBox'
import React from 'react'
import RightSideBar from '@/components/ui/RightSideBar';

const Home = () => {
   const loggedIn = { firstName: 'Sanduni', lastName: 'Lakshika', email: 'sandu@gmail.com' };
   return (
      <section className='home'>
         <div className="home-content">
            <header className="home-header">
               <HeaderBox
                  type="greeting"
                  title="Welcome"
                  user={loggedIn?.firstName || 'Guest'}
                  subtext="Access and manage your transactions"
               />
               <TotalBalanceBox
                  accounts={[]}
                  totalBanks={1}
                  totalCurrentBalance={5870.25}
               />
            </header>

            RECENT TRANSACTIONS
         </div>
         <RightSideBar
            user={loggedIn}
            transactions={[]}
            banks={[{ currentBalance: 123.50 }, { currentBalance: 586.80 }]}
         />
      </section>


   )
}

export default Home
