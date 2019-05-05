import React, { Component} from 'react';
import './IronManProjects.css';

import projects from '../../localData/localData';
class IronManProjects extends Component {
  constructor(){
    super();
    this.listOfProjects = this.listOfProjects.bind(this);
  }

  listOfProjects(){
    var list = projects["robert"].map( project => {
        console.log('fdvdfbadbd',project)
        return (
          <div className="project">
            <div className="project-banner">
              <img src={require("../../images/" + project["banner"])} />
            </div>
            <div className="project-info">
              <h1>{project["title"]}</h1>
              <h3>Year: {project["year"]}</h3>
              <h3>Length: {project["length"]}</h3>
              <h3>Box Office: {project["box-office"]}</h3>
              <p>{project["short-desc"]}</p>
            </div>
          </div>
        )
      }
    )
    return list;
  }
  render(){
    return (
      <section className="ironman-projects-container">
        {this.listOfProjects()}
      </section>
    );
  }
}

export default IronManProjects;