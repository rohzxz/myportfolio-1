import "../styles/Experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool, MdWork } from "react-icons/md";
const style = { fontSize: "1.4em" };

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#2c5364">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2017"
          iconStyle={{ background: "#2c5364", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Maharshi Dayanand University, Ajmer, India
          </h3>

          <h4 style={style} className="vertical-timeline-element-subtitle">
            Bachelor's degree in Computer science
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2021"
          iconStyle={{ background: "#2c5364", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            SDH Institute, Singapore
          </h3>

          <h4 style={style} className="vertical-timeline-element-subtitle">
            Management and business tourism
          </h4>

          <p> Advance diploma </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2023"
          iconStyle={{ background: "#2c5364", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Scrimba, E-Learning
          </h3>

          <h4 style={style} className="vertical-timeline-element-subtitle">
            Front end developer career path
          </h4>

          <p> advance certificate </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2023"
          iconStyle={{ background: "#2c5364", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">Udemy,E-Learning</h3>

          <h4 className="vertical-timeline-element-subtitle">
            javaScript,HTML5,CSS3,React,react redux,redux toolkit, git and
            gitHub
          </h4>

          <p> advance certificate </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022- 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">
            Apple Technician Assist
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            stog.sp zoo,poland
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">
            Front end developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">poznan,poland</h4>
          <p>Non commercial experience</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Engineer - Twitch
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Helped the team launch 2 major features by working both in the front
            end and back end.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src="https://media1.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=ecf05e473556knb9ubjzuslhsj8pkxq8r0ugc1llwnm5s4i4&rid=giphy.gif&ct=g" />
      </div>
    </div>
  );
};

export default Experience;
