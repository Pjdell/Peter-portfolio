import '../styles/Projects.css';

function Projects() {

  const asset = (path) => `${process.env.PUBLIC_URL}${path}`;

  const projects = [
    
    {
      title: "School Management System for International Academy Manila",
      image: asset('/IAM.png'),
      description: "Enhanced usability and accessibility of the portal, improving the experience for students and staff across devices while maintaining  quality and design consistency."
    },
    {
      title: "Multi-Criteria Decision Support System",
      image: asset('/inprogress.jpg'),
      description: "Designed to assist higher education institutions in faculty hiring and teaching load allocation. "
    },

    {
      title: "TUA Marketplace",
      image: asset('/tua.jpg'),
      description: "Collaborated in a team to develop a campus marketplace using React.js, PHP, and MySQL,featuring AI-based product recommendations and buyer-seller messaging."
 
    },

    {
      title: "Pasig Garbage Tracking System",
      image: asset('/garbage.jpg'),
      description: " Enabled users to track garbage trucks within their location (Pasig City), improving community waste management efficiency."
    },
                                        

    {
      title: "Pasig Garbage Tracking System (Map Integration)",
      image: asset('/map.jpg'),
      description: "Integrated OpenStreetMap API and React Leaflet for real-time location tracking."
    },

       
  ];

  const loopedProjects = [...projects, ...projects];

  return (

    <section id="projects" className="projects-section">

      <h2 className="projects-title">
        PROJECTS
      </h2>

      <div
        className="carousel"
        mask="true"
        style={{ "--items": projects.length }}
      >

        <div className="carousel-track">
          {loopedProjects.map((project, index) => (

            <article
              key={`${project.title}-${index}`}
            >

              <img
                src={project.image}
                alt={project.title}
              />

              <h2>{project.title}</h2>

              <div>

                <p>{project.description}</p>

              </div>

            </article>

          ))}
        </div>

      </div>

    </section>
  );
}

export default Projects;