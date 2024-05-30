import { Link } from 'react-router-dom'

export default function MustLogin() {
  return (
    <center>
    {" "}
    <div className="form notLoggedIn">
      <label>Morate biti ulogovani da biste pristupili ovoj stranici</label>
      <Link to={"/login"}>
        <center>
          <button className='button1'>Ulogujte se</button>
        </center>
      </Link>
    </div>
  </center>
  )
}
