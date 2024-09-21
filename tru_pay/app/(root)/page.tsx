import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import HeaderBox from '@/components/ui/HeaderBox'
import React from 'react'
import RightSideBar from '@/components/ui/RightSideBar';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
   const loggedIn = await getLoggedInUser();
   const accounts = await getAccounts({
      userId: loggedIn.$id
   })

   if (!accounts) return;

   const appwriteItemId = (id as string) || accounts?.data
   [0]?.appwriteItemId;

   const account = await getAccount({ appwriteItemId });

   const accountsData = accounts?.data;



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
                  accounts={accountsData}
                  totalBanks={account?.totalBanks}
                  totalCurrentBalance={accounts?.totalCurrentBalance}
               />
            </header>

            RECENT TRANSACTIONS
         </div>
         <RightSideBar
            user={loggedIn}
            transactions={accounts?.transactions}
            banks={accountsData?.slice(0, 2)}
         />
      </section>


   )
}

export default Home
