import React from 'react'
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import { get_SessionStorage } from '../../Services/Api';

const NotFound = () => {
    const exists_user = get_SessionStorage("user.profile");

    return (
        <div className="">
            {!exists_user ? <Result
                status="403"
                title="403"
                subTitle="Sorry, you are not authorized to access this page."
                extra={<Link to={``}><Button type="">Back Home</Button></Link>}
            />
                :
                <Result
                    status="403"
                    title="403"
                    subTitle="Sorry, you are not authorized to access this page."
                    extra={<Link to={`${window.location.origin+"/youtube.com"}`}><Button type="">Back Home</Button></Link>}
                />
            }
        </div>

    )
}

export default NotFound