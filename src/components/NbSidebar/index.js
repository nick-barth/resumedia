import React from "react";
import { NavLink } from "react-router-dom";
import { User } from "react-feather";
import { Plus } from "react-feather";
import burstLogo from "../../assets/images/burst-icon.png";
import "./style.scss";

const Sidebar = ({ teams, selectedTeam }) => {
  const id = selectedTeam && selectedTeam.id ? selectedTeam.id : null;
  return (
    <aside className="sidebar">
      <div className="sidebar__burst-logo">
        <img src={burstLogo} alt="logo" />
      </div>
      <div className="sidebar__links">
        {teams && teams.length > 0
          ? teams.map(team => (
              <NavLink
                className={`sidebar__link ${team.id === id &&
                  "sidebar__link--active"}`}
                key={team.id}
                to={`/dashboard/overview/${team.id}`}
              >
                <div className="sidebar__logo-container">
                  <img
                    className="sidebar__logo"
                    src={
                      team.logo
                        ? team.logo.url
                        : "https://firebasestorage.googleapis.com/v0/b/esportscms-2ba43.appspot.com/o/images%2Fdefault.jpg?alt=media&token=248af029-714b-4843-9b34-c558be2a9793"
                    }
                    alt={team.name}
                  />
                </div>
                {team.name}
              </NavLink>
            ))
          : null}
        <NavLink
          className="sidebar__link"
          key={"create"}
          to={`/dashboard/create`}
          activeClassName="sidebar__link--active"
        >
          <div className="sidebar__logo-container">
            <Plus className="sidebar__logo" />
          </div>
          Create
        </NavLink>
        <NavLink
          className="sidebar__link sidebar__link--bottom"
          key={"account"}
          to={`/dashboard/account`}
          activeClassName="sidebar__link--active"
        >
          <div className="sidebar__logo-container">
            <User className="sidebar__logo" />
          </div>
          Account
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
