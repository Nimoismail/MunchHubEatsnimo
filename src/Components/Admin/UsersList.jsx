import React from 'react'
import { useUserAuth } from '../../utils/UserAuthContext'

const UsersList = () => {
  const { users  } = useUserAuth();
  return (
    <React.Fragment>
<section className='mx-auto max-w-6xl '>
                <div>
                    <div className='flex items-center justify-between mb-6'>
                        <h1 className='font-bold'>Restaurants list</h1>
                        <button className='py-2 text-gray-100 px-2 text-sm bg-yellow-400 rounded-md'>Create user</button>
                    </div>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-100 uppercase bg-gray-950 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Password
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Type
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Activity
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Edit user
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map(user => (        
                                        <tr key={user.user_id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {user.user_name}
                                            </th>
                                            <td class="px-6 py-4">
                                                {user.email}
                                            </td>
                                            <td class="px-6 py-4">
                                                {user.password}
                                            </td>
                                            <td class="px-6 py-4 line-clamp-1 w-40">
                                                {user.type}
                                            </td>
                                            <td class="px-6 py-4 line-clamp-1 w-40">
                                                {user.activity}
                                            </td>
                                            <td class="px-6 py-4 line-clamp-1 w-40">
                                                {user.blocked}
                                            </td>
                                            <td class="px-6 py-4">
                                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            </td>
                                        </tr>
                                    ))
                                }            
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
    </React.Fragment>
  )
}

export default UsersList