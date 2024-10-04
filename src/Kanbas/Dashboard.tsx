import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
    <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
    <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
    <div id="wd-dashboard-courses" className="row">
      <div className="row row-cols-1 row-cols-md-5 g-4">
        <div className="wd-dashboard-course col" style={{ width: "270px" , margin: "35px 0" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <img src="/images/reactjs.webp" width="100%" height={160}/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                   CS1234 React JS
                </h5>
                <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "270px", margin: "35px 0" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/2345/Home">
              <img src="/images/Python-logo-notext.svg.png" width="100%" height={160}/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                   CS2345 Introduction to Python
                </h5>
                <p className="wd-dashboard-course-title card-text">
                    Fundamental of Python Programming
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "270px", margin: "35px 0" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1356/Home"> 
          <img src="images/Software Engineering.webp"alt="CS1356 Software Engineering"width="100%" height={160} />
          <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
              CS1356 Software Engineering </h5>
            <p className="wd-dashboard-course-title">
              Introduction to software development programs
            </p>
            <button className="btn btn-primary"> Go </button>
            </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "270px", margin: "35px 0" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1400/Home">
                  <img src="images\DSA.png"alt="CS1400 Data Structure and Algorithms" width="100%" height={160} />           
                     <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                    CS1400 Data Structure and Algorithms
                </h5>
                <p className="wd-dashboard-course-title card-text">
                    CS1400 Data Structure and Algorithms
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "270px", margin: "35px 0" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1792/Home">
                  <img src="images\nlp.png" alt="CS1792 Natural Language Processing" width="100%" height={160} />
                  <div className="card-body">

                  <h5 className="wd-dashboard-course-title card-title">
                    CS1792 Natural Language Processing
                </h5>
                <p className="wd-dashboard-course-title card-text">
                    Introduction to Natural Language Processing
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>


        <div className="wd-dashboard-course col" style={{ width: "270px", margin: "35px 0" }}>
    <div className="card rounded-3 overflow-hidden">
      <Link className="wd-dashboard-course-link text-decoration-none text-dark"
            to="/Kanbas/Courses/1060/Home">
            <img src="images\toc.png"alt="CS1060 Theory of Computation" width="100%" height={160} />
            <div className="card-body">

            <h5 className="wd-dashboard-course-title card-title">
                CS1060 Theory of Computation
            </h5>
          <p className="wd-dashboard-course-title card-text">
            Theory of Computation
        </p>
          <button className="btn btn-primary"> Go </button>
        </div>
      </Link>
    </div>
  </div>

  <div className="wd-dashboard-course col" style={{ width: "270px", margin: "35px 0" }}>
    <div className="card rounded-3 overflow-hidden">
      <Link className="wd-dashboard-course-link text-decoration-none text-dark"
            to="/Kanbas/Courses/2820/Home">
            <img src="images\discrete-math.webp"alt=" CS2820 Discrete Mathematics" width="100%" height={160} />
            <div className="card-body">

            <h5 className="wd-dashboard-course-title card-title">
                CS2820 Discrete Mathematics
            </h5>
          <p className="wd-dashboard-course-title card-text">
            Introduction to Discrete Mathematics
        </p>
          <button className="btn btn-primary"> Go </button>
        </div>
      </Link>
    </div>
  </div>



          
          </div>

      </div>
    </div>
  );
}
