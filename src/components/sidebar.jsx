import React from 'react'
import './sidebar.css';
import { Outlet, Link } from 'react-router-dom';
import vector from '../img/vector.svg';
import group8 from '../img/group-8.png';
import vector1 from '../img/vector-1.svg';
import group52 from '../img/group-52.png';
import group from '../img/group.png';
import expanded from '../img/expanded.png';
import vector2 from '../img/vector-2.svg';
import vector3 from '../img/vector-3.svg';

const sidebar = () => {
  return (
    <div className='desktop'>
    <div className="overlap-2">
          <div className="rectangle-wrapper">
            <div className="rectangle-2" />
          </div>
          <p className="ankit">
            <span className="text-wrapper-3">A</span>
            <span className="text-wrapper-4">nkit</span>
          </p>
          <div className="group-2">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="vector-wrapper">
                  <img className="vector" alt="Vector" src={vector} />
                </div>
           <Link className='nav-link' to='/home'>   <div className="home">HOME</div></Link> 
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-group-2">
                <div className="img-wrapper">
                  <img className="group-3" alt="Group" src={group8} />
                </div>
                <Link className='nav-link' to='/about'> <div className="about">ABOUT</div></Link>
              </div>
            </div>
            <div className="div-wrapper">
              <div className="overlap-group-2">
                <div className="img-wrapper">
                  <img className="vector-2" alt="Vector" src={vector1} />
                </div>
                <Link className='nav-link' to='/service'> <div className="services">SERVICES</div></Link>
              </div>
            </div>
            <div className="group-4">
              <div className="overlap-group-2">
                <div className="overlap-group-3">
                  <img className="group-5" alt="Group" src={group52} />
                </div>
                <Link className='nav-link' to='/experience'><div className="experience">EXPERIENCE</div></Link>
              </div>
            </div>
            <div className="group-6">
              <div className="overlap-group-2">
                <div className="overlap-group-3">
                  <img className="group-5" alt="Group" src={group} />
                </div>
                <Link className='nav-link' to='/education'> <div className="education">EDUCATION</div></Link>
              </div>
            </div>
            <div className="group-7">
              <div className="overlap-group-2">
                <div className="overlap-group-3">
                  <img className="expanded" alt="Expanded" src={expanded} />
                </div>
                <Link className='nav-link' to='/skills'>  <div className="text-wrapper-5">SKILLS</div></Link>
              </div>
            </div>
            <div className="group-8">
              <div className="overlap-group-2">
                <div className="overlap-group-3">
                  <img className="vector-3" alt="Vector" src={vector2} />
                </div>
                <Link className='nav-link' to='/portfolio'>  <div className="text-wrapper-5">PORTFOLIO</div></Link>
              </div>
            </div>
            <div className="group-9">
              <div className="overlap-group-2">
                <div className="overlap-group-3">
                  <img className="vector-4" alt="Vector" src={vector3}/>
                </div>
                <Link className='nav-link' to='/contact'>   <div className="text-wrapper-5">CONTACT</div></Link>
              </div>
            </div>
          </div>
        </div>
        <Outlet/>
        </div>
  )
}

export default sidebar