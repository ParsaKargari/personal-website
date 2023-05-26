import React from "react";
import "./slide.css";

// Component for rendering a single box
function Box({ date, title, description }) {
  return (
    <div className="box">
      <h4>{date}</h4>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// Component for rendering a section
function Section({ title, boxes, isInverse }) {
  return (
    <section className={`col ${isInverse ? "inverse" : ""}`}>
      <header className="title">
        <h2>{title}</h2>
      </header>
      <div className="contents">
        {boxes.map((box, index) => (
          <Box key={index} {...box} />
        ))}
      </div>
    </section>
  );
}

export default function SlideFour() {
  const experience = [
    {
      date: "May 2023 - Present",
      title: "Undergraduate Researcher",
      description:
        "Conducting research on security problems in software development and analyzing programmer decision-making processes regarding importing external software packages. | Schulich School of Engineering",
    },
    {
      date: "May 2023 - Present",
      title: "Machine Learning Intern",
      description:
        "Developing a machine learning-based tilt alarm system for vehicles to detect tilting, prevent accidents, and provide real-time user alerts. | Battery Advancement",
    },
  ];

  const involvements = [
    {
      date: "May 2023 - Present",
      title: "Geomatics Software Lead",
      description:
        "Leading the Geomatics Software Subteam in designing the car's sensor system and camera system using Python programming language. | Relectric Team",
    },
    {
      date: "Sep 2022 - May 2023",
      title: "Geomatics Software Engineering Member",
      description:
        "Contributing to the Geomatics Software Subteam in designing the car's sensor system and camera system using Python programming language. | Relectric Team",
    },
    {
      date: "Sep 2022 - Present",
      title: "Software Engineering Member",
      description:
        "Part of the Robocup Software Engineering Subteam to develop machine learning and deep learning programs for the robots. | Alberta Collegiate Robotics",
    },
  ];

  // const volunteering = [
  //   {
  //     date: "Jun 2022 - Aug 2022",
  //     title: "Volunteer Staff",
  //     organization: "University of Calgary",
  //     description:
  //       "Part of a team that helped organize a campaign in response to the Covid-19. Organized and assisted as a team with some preventative measures for the public at the University of Calgary.",
  //   },
  //   {
  //     date: "May 2019 - Jun 2019",
  //     title: "Student Volunteer",
  //     organization: "Ramadan Aman",
  //     description: "A campaign that aims to distribute meals to the community.",
  //   },
  //   {
  //     date: "Apr 2019",
  //     title: "Student Volunteer",
  //     organization: "Senses Residential and Day Care for Special Needs",
  //     description: "Helped the staff members and students at Senses Dubai.",
  //   },
  // ];

  return (
    <div className="main-slide">
      <div className="top-placeholder"></div>
      <div className="main-slide-content">
        <div className="four-body">
          <div className="four-container">
            <main className="row bounce-effect">
              <Section title="EXPERIENCE" boxes={experience} />
              <Section
                title="INVOLVEMENTS"
                boxes={involvements}
                isInverse={true}
              />
              {/* <Section title="VOLUNTEERING" boxes={volunteering} /> */}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
