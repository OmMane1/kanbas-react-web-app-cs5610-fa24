import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="images\reactjs.webp" alt="description of image" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </Link>

            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course"><img src="images\Python-logo-notext.svg.png" alt="description of image" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/2345/Home">
              CS2345 Introduction to Python
            </Link>

            <p className="wd-dashboard-course-title">
              Fundamental of Python programming
            </p>
            <Link to="/Kanbas/Courses/2345/Home"> Go </Link>
          </div> </div>
        <div className="wd-dashboard-course"> <img src="images/Software Engineering.webp"alt="description of image" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1356/Home">
              CS1356 Software Engineering
            </Link>

            <p className="wd-dashboard-course-title">
              Introduction to software development programs
            </p>
            <Link to="/Kanbas/Courses/1356/Home"> Go </Link>
          </div> </div>
          <div className="wd-dashboard-course"> <img src="images\DSA.png"alt="description of image" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1400/Home">
              CS1400 Data Structure and Algorithms
            </Link>

            <p className="wd-dashboard-course-title">
              Introduction to Data Structure and Algorithms
            </p>
            <Link to="/Kanbas/Courses/1400/Home"> Go </Link>
          </div> </div>
          <div className="wd-dashboard-course"> <img src="images\nlp.png" alt="description of image" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1792/Home">
              CS1792 Natural Language Processing
            </Link>

            <p className="wd-dashboard-course-title">
              Introduction to Natural Language Processing
            </p>
            <Link to="/Kanbas/Courses/1792/Home"> Go </Link>
          </div> </div>
          <div className="wd-dashboard-course"> <img src="images\toc.png"alt="description of image" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1060/Home">
              CS1060 Theory of Computation
            </Link>

            <p className="wd-dashboard-course-title">
              Theory of Computation
            </p>
            <Link to="/Kanbas/Courses/1060/Home"> Go </Link>
          </div> </div>
          <div className="wd-dashboard-course"> <img src="images\discrete-math.webp"alt="description of image" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/2820/Home">
              CS2820 Discrete Mathematics
            </Link>

            <p className="wd-dashboard-course-title">
              Introduction to Discrete Mathematics
            </p>
            <Link to="/Kanbas/Courses/2820/Home"> Go </Link>
          </div> </div>
      </div>
    </div>
  );
}
