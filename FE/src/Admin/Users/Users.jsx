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


    return (
        <div className="flex home-shell-outside shell-Admin-manage">
            <Menu_Users />

            <div className="w-[100%] bg-gray-100 h-[87.7vh] ml-2 shell-2 rounded-md">
                <div className="conten_Users p-2">
                    <div className="shell_title_list_user h-8 flex ">
                        <h2 className='text-gray-600'>Tài khoản: {dataUser?.length}</h2>
                    </div>
                    <hr />
                    <div className="shell_list_Admin w-[100%] h-[81vh] rounded-md select-none ">

                        <table className=' w-[100%] rounded-md select-none text-center'>
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Ảnh</th>
                                    <th>Tên</th>
                                    <th>Email</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataUser?.map((items, index) => {
                                    return <tr key={index} className='hover:bg-gray-200'>
                                        <td>{index + 1}</td>
                                        <td>{<Image width={50} src={items.picture} />}</td>
                                        <td className='mt-3'>{items.name}</td>
                                        <td className='mt-3'>{items.email}</td>
                                        <td><p className='mt-3 text-center'>{items.isActive ? "active" : "false"}</p></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users