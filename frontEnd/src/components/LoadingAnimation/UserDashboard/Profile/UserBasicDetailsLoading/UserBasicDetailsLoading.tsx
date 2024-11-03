import './UserBasicDetailsLoading.scss';

const UserBasicDetailsLoading = () => {
    return (
        <div className="profile-basic-loading-container">
            <div className="image">
                <div className="img-loading"></div>
                <div className="img-button"></div>
            </div>

            <div className="user-details">
                {Array.from({length: 3}).map((_,i)=>(
                    <div key={i} className="input-group">
                        <div className="label"></div>
                        <div className="input-field"></div>
                    </div>
                ))}   
            </div>
        </div>
    )
}

export default UserBasicDetailsLoading;
