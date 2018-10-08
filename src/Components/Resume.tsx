import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './E';
import Skills from './Skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Matthew Iverson</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Minneapolis, MN</p>
            <h5>Phone</h5>
            <p>(715) 781-1591</p>
            <h5>Email</h5>
            <p>matthewiver@protonmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2002}
              endYear={2006}
              schoolName="Southwest Minnesota University"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
               />

               <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName="University of South Dakota"
                 schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              
              <h2>Skills</h2>
              <h3>Programming Langauges</h3>
              <Skills skill="CSS 3" progress={80} />
              <Skills skill="ECMAScript" progress={80} />
              <Skills skill="HTML 5" progress={100} />
              <Skills skill="Python" progress={40} />
              <Skills skill="SQL" progress={70} />
              <Skills skill="Typescript" progress={40} />
              <Skills skill="NodeJS" progress={40} />

              <h3>Programming Frameworks</h3>
              <Skills skill="Angular" progress={0} />
              <Skills skill="React" progress={60} />
              <Skills skill="Vue" progress={0} />

              <h3>Programming Tools</h3>
              <Skills skill="Babel" progress={60} />
              <Skills skill="Docker" progress={40} />
              <Skills skill="Git" progress={90} />
              <Skills skill="Prettier" progress={30} />
              <Skills skill="Jest" progress={10} />
              <Skills skill="Visual Studio Code" progress={30} />
              <Skills skill="Webpack" progress={30} />
              <Skills skill="Yarn" progress={90} />

              <h3> Pentration Testing</h3>
              <Skills skill="Lock Picking" progress={60} />
              <Skills skill="Linux Scripting" progress={35} />
              <Skills skill="C" progress={10} />
              <Skills skill="Wifi Tools" progress={10} />
              <Skills skill="Remote Access" progress={0} />
              <Skills skill="Information Gathering" progress={0} />

              <h3>Future Skills</h3>  
              <Skills skill="GO" progress={0} />
              <Skills skill="Ruby" progress={0} />
              <Skills skill="Java" progress={0} /> 
              <Skills skill="PHP" progress={0} />
            
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
