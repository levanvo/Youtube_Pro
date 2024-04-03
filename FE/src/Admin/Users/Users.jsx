import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Menu_Users from './Menu_Users';
import { get_SessionStorage, instance } from '../../Services/Api';
import { Image } from 'antd';

const Users = () => {
    const dispatch = useDispatch();
    const { dataUser } = useSelector((state) => state.Info_users).dataUser; // data getted.
    const { tokenUser } = get_SessionStorage("user.profile");

    useEffect(() => {
        const fetch = async () => {
            const { data } = await instance.get("/all-User", {
                headers: {
                    Authorization: tokenUser,
                },
            });
            dispatch({ type: "fetch-User", payload: data })
        };
        fetch();
    }, []);

    console.log("dataUser: ", dataUser)

    return (
        <div className="flex home-shell-outside shell-users-manage">
            <Menu_Users />

            <div className="w-[100%] bg-gray-100 h-[87.7vh] ml-2 shell-2 rounded-md">
                <div className="conten_Users p-2">
                    <div className="shell_title_list_user h-8 flex ">
                        <h2 className='text-gray-600'>Tài khoản: {dataUser?.length}</h2>
                    </div>
                    <hr />
                    <div className="shell_list_user w-[100%] h-[81vh] rounded-md select-none ">
                        {dataUser?.map((items, index) => {
                            return <div key={index} className="one_one-user flex m-2 cursor-pointer bg-gray-200 hover:bg-gray-300 ">
                                <div className="flex space-x-20 w-[60vw] ">
                                    <Image width={50} src={items.picture} />
                                    <p className='mt-3'>{items.name}</p>
                                    <p className='mt-3'>{items.email}</p>
                                </div>
                                <div className="float-right">
                                    <p className='mt-3 text-center'>{items.isActive ? "active" : "false"}</p>
                                </div>
                            </div>
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users