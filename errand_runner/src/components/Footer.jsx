import {Link} from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      {/* <Link to=""><img src="#" alt="github link" target="_blank"/></Link> */}
      <a href="https://github.com/er812" target="_blank" rel="noopener noreferrer">
          <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="GitHub" />
        </a>
    </div>
  )
}

export default Footer

//add github icon and link to github
//mkae it a different color