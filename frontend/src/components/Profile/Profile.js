import React, { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { useAuth } from '../context/AuthContext';
import { jwtDecode as jwt_decode } from 'jwt-decode';

const Profile = () => {
    const {token} = useAuth() 
    const decoded = jwt_decode(token);
    const id = decoded.id
    const [profile, setProfile] = useState("")
    
    const getUser = gql`
    query GetUserById($id: ID!) {
        getUserById(id: $id) {
        name
        email
        }
    }
    `;
    const { loading, error, data } = useQuery(getUser, {
        variables: { id },
        skip: !id, // Skip query if no id is provided
    });

    useEffect(()=>{
        setProfile(data?.getUserById)
    }, [data])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <div className="bg-white overflow-hidden shadow rounded-lg border w-6/12 m-auto mt-4 mb-4">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        User Profile
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        This is some information about the user.
                    </p>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Full name
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {profile?.name}
                            </dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Email address
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {profile?.email}
                            </dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Phone number
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                NA
                            </dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Address
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                NA
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </>
    )
}

export default Profile;