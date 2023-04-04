import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import styled from 'styled-components';


const NavUnlisted = styled.ul`

  display: flex;

  a {
    text-decoration: none;
  }

  li {
    color: red;
    margin: 0 0.8rem;
    font-size: 1.3rem;
    position: relative;
    list-style: none;
  }

  .current {
    li {
      border-bottom: 2px solid black;
    }
  }
`;



function NavBar(){
    return(
        <nav className = "navbar navbar-expand-lg navbar-dark bg-dark">
            <div className = 'container-fluid'>
                <Link to = "/" className = "navbar-brand">Basketball Stats Tracker</Link>

                <NavUnlisted>
                <NavLink to="/" className="current" exact>
                    <li>Home</li>
                
                </NavLink>
                <NavLink to="/teams" className="current" exact>
                    <li>Teams</li>
                
                </NavLink>
                <NavLink to="/players" className="current" exact>
                    <li>Players</li>
                
                </NavLink>
                <NavLink to="/games" className="current" exact>
                    <li>Games</li>
                </NavLink>

                </NavUnlisted>
                
            </div>
         </nav>
    );
}

export default NavBar;