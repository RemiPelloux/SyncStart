import React from "react";
import { Link } from "react-router-dom";
import FeatureCard from "./FeatureCard"; // Assuming you have a separate component for feature cards

function HomePage() {
    return (
        <div className="bg-gray-100 min-h-screen p-10">
            <div className="container mx-auto text-center">
                <h1 className="text-6xl font-bold text-gray-800 mb-8">SyncStart</h1>
                <p className="text-2xl mb-12">Transforming Employee Onboarding Into a Seamless Experience</p>

                {/* Feature Section */}
                <div className="grid md:grid-cols-3 gap-12 mb-16">
                    <FeatureCard

                        title="Effortless Integration"
                        description="Integrate SyncStart with your existing HR systems."
                        iconName="integration-icon.svg"
                    />
                    <FeatureCard
                        title="Interactive Training"
                        description="Engage new hires with interactive training modules, ensuring they are well-prepared and confident in their new roles."
                        iconName="training-icon.svg"
                    />
                    <FeatureCard
                        title="Comprehensive Task Management"
                        description="Streamline the management of onboarding tasks with automated tracking and reminders."
                        iconName="task-icon.svg"
                    />
                </div>

                {/* Testimonials Section */}
                <section className="testimonials mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">Hear From Our Users</h2>
                    <div className="flex flex-wrap justify-center gap-8">

                    </div>
                </section>

                {/* Call to Action */}
                <section className="cta mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
                    <p className="mb-6">Join the thousands of companies streamlining their onboarding process with SyncStart.</p>
                    <Link to="/register" className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out">
                        Sign Up Now
                    </Link>
                </section>
            </div>
        </div>
    );
}

export default HomePage;
