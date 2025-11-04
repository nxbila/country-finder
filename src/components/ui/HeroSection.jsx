
import { TiArrowRightThick } from "react-icons/ti";

export const HeroSection = () => {
    return (
        <main className="hero-section main">
        <div className = "container grid grid-two-cols">
            <div className="hero-content">
                <h1 className="heading-xl">Your Gateway to Countries Across the Globe</h1>
                <p className= "paragraph">Whether you're a curious learner or planning your next adventure,
                     our platform lets you discover details about every country. 
                    Let's explore this planet one nation at a time!</p>
                    <button className="btn btn-darken btn-inline bg-white-box">Discover now 
                        <TiArrowRightThick />
                    </button>
            </div>
            <div className="hero-image">
                <img src = "/images/world.jpg" alt = "world image" className="banner-image" />
            </div>
        </div>
    </main>
    )
}