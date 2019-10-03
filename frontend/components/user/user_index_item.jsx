import React from 'react';
import { Link } from 'react-router-dom'


class UserIndexItem extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <div className="user_index">

                    <div>
                        <Link to={`/users/${this.props.user.id}`}>
                            <img className='user-splash' src={this.props.user.photoUrl} />
                        </Link>
                    </div>


                        <div className="user-words">
                            {this.props.user.username.slice(0, 16)}
                            
                            <div className="user-con">
                                <div className='user-icon'>
                                    <i className="fa fa-users" aria-hidden="true"> 1,337</i>
                                </div>

                                <div className='user-icon'>
                                    <i className="fa fa-headphones" aria-hidden="true"> 38</i>
                                </div>

                                <button className='user-button'>
                                    Follow
                                </button>
                            </div>
                        </div>


                </div>
            </div>
        );
    }
}

export default UserIndexItem;
