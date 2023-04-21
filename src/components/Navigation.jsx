import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { searchText } from '../features/common/commonSlice';
import { useDispatch } from 'react-redux';

function Navigation(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSearch=(e)=>{
    const {value}=e.target;
    if(value.length > 3){
      dispatch(searchText(value));
      navigate(`/search?${value}`);
    }
  }

    return (
  <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Netflix Clone</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/browse/movie">Movie</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/browse/tv">Tv</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/browsebygenre/movie/Action/28">Browse By Genre</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>           
          </ul>
        </li>
        <input type="text" name='search' onChange={handleSearch}/>
      </ul>      
    </div>
  </div>
</nav>
    );
}

export default Navigation;