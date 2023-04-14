import React, {useState, useEffect} from "react";
import Card from "./card";
import testimonialData from "../../fakeApiData/testimonials.json";

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Simulate fetching data from a backend server
                setTimeout(() => {
                    setTestimonials(testimonialData.testimonial);
                }, 1000);
            } catch (error) {
                setError("There was an error fetching the data. Please try again later.");
            }
        };
        fetchData();
    }, []);
    return(
        <section className="testimonials" id="testimonials">
            <p className="small">
                Testimonials
            </p>
            <h2>
                What Our Clients Say
            </h2>
            <div className="container">
                <div className="testimonial-cards">
                    {error ? (
                        <div className="error-message">{error}</div>
                    ) : (
                        <div className="teamContainer">
                            {testimonials &&
                                testimonials.map((testimonial) => (
                                    <Card
                                        key={testimonial.id}
                                        message={testimonial.message}
                                        name={testimonial.name}
                                        company={testimonial.company}
                                        image={testimonial.image}
                                    />
                                ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
export default Testimonials;
