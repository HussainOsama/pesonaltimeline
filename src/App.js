import logo from "./img/logo.svg";
import "./css/App.css";
import EventLeft from "./components/EventLeft";
import data from "./js/data.js";

function App() {
  return (
    <section class="page-section" id="about">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">حسين أسامة محمد أسد</h2>
          <h3 class="section-subheading text-muted">
            أهلاً و سهلا بكم في صفحتي
          </h3>
        </div>
        <ul class="timeline">
          {data.map((data) => (
            <EventLeft
              period={data.period}
              title={data.title}
              description={data.description}
              img={data.img}
              dir={data.dir}
            />
          ))}

          <li class="timeline-inverted">
            <div class="timeline-image">
              <h4>
                To Be
                <br />
                Continue
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default App;
