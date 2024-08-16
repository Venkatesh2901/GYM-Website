import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>Top Workout Sessions</h1>
        <p>
           Experience the best workout sessions designed to help you reach your fitness goals. 
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>

      <div className="wrapper">
        <h1>Featured Bootcamps</h1>
        <p>
          Our bootcamps offer an intense and rewarding experience. Join us for a series of high-energy workouts that challenge you to push your limits and achieve new personal bests.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Strength and Conditioning</h4>
            <p>
              Build muscle and increase endurance with our targeted strength and conditioning bootcamp, designed to enhance overall fitness.
            </p>
          </div>

          <div>
            <h4>HIIT (High-Intensity Interval Training)</h4>
            <p>
              Burn calories and improve cardiovascular health with our HIIT bootcamp, featuring short bursts of intense activity followed by recovery periods.
            </p>
          </div>

          <div>
            <h4>Yoga and Flexibility</h4>
            <p>
              Improve flexibility and reduce stress with our yoga-focused bootcamp, combining strength, balance, and mindfulness practices.
            </p>
          </div>

          <div>
            <h4>Cardio Blast</h4>
            <p>
              Get your heart pumping with our cardio-intensive bootcamp, designed to boost endurance and burn fat.
            </p>
          </div>

          <div>
            <h4>Core Strength</h4>
            <p>
              Focus on your core muscles with our specialized bootcamp, aimed at improving stability, balance, and overall core strength.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
