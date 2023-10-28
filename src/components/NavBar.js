import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  let navElements = links.map((link, index) => {return <a key={index} href={link.split('').map((char, index) => index === 0 ? '#'+char : char).join('')}>{link.split('').map((char, index) => index === 0 ? char.toUpperCase() : char).join('')}</a>})

  return (
    <nav>
      {navElements}
    </nav>
  )
}

export default NavBar;
