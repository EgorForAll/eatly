// @flow
import * as React from 'react';
import {IUser} from "@/interfaces/user";
import styles from "./user-info.module.scss";

type TUserInfo = {
    user: IUser | null;
    width: number;
    height: number;
};

const UserInfo: React.FC<TUserInfo> = ({user, width, height}) => {

    const wrapperStyle = {
        width: `${width + 20}px`,
        height: `${height + 20}px`
    }

    return (
        <div className={styles.userInfo}>
            <div className={styles.avatar} style={wrapperStyle}>
                <img
                    src={user?.image}
                    alt={`avatar of ${user?.firstName}`}
                    width={width}
                    height={height}
                    sizes="(max-width=992px) 50px, 50px"
                />
            </div>
            <div className={styles.userNameWrapper}>
                <span className={styles.written}>Written by</span>
                <span className={styles.name}>
                    {user?.firstName} {user?.lastName}
                  </span>
            </div>
        </div>
    );
};

export default UserInfo;