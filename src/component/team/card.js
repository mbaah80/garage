import react from "react";

const Card = ({name, position, image}) => {
    return(
        <div className="team-card">
            <div className="team-card-img">
                <img src={image} alt="Team Member Name"/>
            </div>
            <div className="team-card-info">
                <h2>
                    {name}
                </h2>
                <p>
                    {position}
                </p>
                <div className="team-card-social">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    )
}
export default Card;
