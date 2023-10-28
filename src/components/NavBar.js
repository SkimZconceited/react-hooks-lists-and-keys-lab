import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  // console.log(links, 'navbar func')
  // console.log(links[0].split('').map((char, index) => index === 0 ? '#'+char : char).join(''))
  // This line of code gets the list array and maps it then in the a element we split the element in that index, then map the created array then collect the first element and then join the whole array again same happens in the text inside the a element
  let navElements = links.map((link, index) => {return <a key={index} href={link.split('').map((char, index) => index === 0 ? '#'+char : char).join('')}>{link.split('').map((char, index) => index === 0 ? char.toUpperCase() : char).join('')}</a>})
  // links.map((link, index) => <NavBarChild index = {index} link = {link}/>)
  return (
    <nav>
      {/* {links.map((link, index) => <NavBarChild index = {index} link = {link}/>)} */}
      {navElements}
    </nav>
  )
  // <nav><NavBarChild links = {links.map((link) => link)} /></nav>
}


// function NavBarChild(props) {
//   console.log(props.link, 'NavBarChild')
//   let ln = props.link;
//   let lnk = props.link.split('').map((char, index) => index === 0 ? char.toUpperCase() : char).join('');
//   let indx = props.index;

//   return <a key={indx} href={'#'+{ln}}>{lnk}</a>
// }


export default NavBar;
