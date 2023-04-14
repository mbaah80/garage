import React, {useState, useEffect} from "react";
import Card from "./card";
import teamdata from "../../fakeApiData/teams.json";

const Team = () => {
    const [team, setTeam] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Simulate fetching data from a backend server
                setTimeout(() => {
                    setTeam(teamdata.team);
                }, 1000);
            } catch (error) {
                setError("There was an error fetching the data. Please try again later.");
            }
        };
        fetchData();
    }, []);

    return(
        <section className="team" id="team">
            <p className="small">Team</p>
            <h2 className="team-heading">
                Our Team
            </h2>
            {error ? (
                <div className="error-message">{error}</div>
            ) : (
                <div className="teamContainer">
                    {team &&
                        team.map((team) => (
                            <Card
                                key={team.id}
                                name={team.name}
                                position={team.position}
                                image={team.image}
                            />
                        ))}
                </div>
            )}
        </section>
    )
}
export default Team;
