import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import HeaderBox from '@/components/ui/HeaderBox'
import React from 'react'
import RightSideBar from '@/components/ui/RightSideBar';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async () => {
   const loggedIn = await getLoggedInUser();
   return (
      <section className='home'>
         <div className="home-content">
            <header className="home-header">
               <HeaderBox
                  type="greeting"
                  title="Welcome"
                  user={loggedIn?.name || 'Guest'}
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
