export const Landing = () => (
  <>
    <>
      <header className='tl-header db-header'>
        <div className='side-menu-content'>
          <span className='tl-toggler'>
            <i className='fa fa-bars' aria-hidden='true' />
          </span>
          <div className='side-menu'>
            <ul className='global-list'>
              <li>
                <span className='heading nb'>Main</span>
              </li>
              <li className='active'>
                <a href='dashboard.html'>
                  <span>
                    <i className='fa fa-tachometer' aria-hidden='true' />
                  </span>{' '}
                  Dashboard
                </a>
              </li>
              <li>
                <a href='messages.html'>
                  <span>
                    <i className='fa fa-comment-o' aria-hidden='true' />
                  </span>{' '}
                  Message
                </a>
              </li>
              <li>
                <span className='heading'>Listing</span>
              </li>
              <li>
                <a href='my-properties.html'>
                  <span>
                    <i className='fa fa-home' aria-hidden='true' />
                  </span>{' '}
                  My Properties
                </a>
              </li>
              <li>
                <a href='my-favorites.html'>
                  <span>
                    <i className='fa fa-heart-o' aria-hidden='true' />
                  </span>{' '}
                  My Favorities
                </a>
              </li>
              <li>
                <a href='my-reviews.html'>
                  <span>
                    <i className='fa fa-star-o' aria-hidden='true' />
                  </span>{' '}
                  Reviews
                </a>
              </li>
              <li>
                <span className='heading'>Agents</span>
              </li>
              <li>
                <a href='all-agents.html'>
                  <span>
                    <i className='fa fa-user-o' aria-hidden='true' />
                  </span>{' '}
                  All Agents
                </a>
              </li>
              <li>
                <a href='add-agent.html'>
                  <span>
                    <i className='fa fa-user-plus' aria-hidden='true' />
                  </span>{' '}
                  Add New Agents
                </a>
              </li>
              <li>
                <span className='heading'>Account</span>
              </li>
              <li>
                <a href='edit-profile.html'>
                  <span>
                    <i className='fa fa-user' aria-hidden='true' />
                  </span>{' '}
                  My Profile
                </a>
              </li>
              <li>
                <a href='packages.html'>
                  <span>
                    <i className='fa fa-briefcase' aria-hidden='true' />
                  </span>{' '}
                  My Packages
                </a>
              </li>
              <li>
                <a href='social-accounts.html'>
                  <span>
                    <i className='fa fa-briefcase' aria-hidden='true' />
                  </span>{' '}
                  Social Accounts
                </a>
              </li>
              <li>
                <a href='dashboard.html'>
                  <span>
                    <i className='fa fa-sign-out' aria-hidden='true' />
                  </span>{' '}
                  Logout
                </a>
              </li>
            </ul>
          </div>
          {/* sidebar */}
        </div>
        <div className='tl-menu menu-absolute menu-sticky'>
          <nav className='navbar navbar-expand-lg p-0'>
            <div className='container-fluid'>
              <a className='navbar-brand' href='index.html'>
                <img src='assets/images/logo-white.png' alt='Logo' className='img-fluid logo-lg' />
                <img src='assets/images/logo-sm.png' alt='Logo' className='img-fluid logo-sm' />
              </a>
              <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarNav'
                aria-controls='navbarNav'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon'>
                  <i className='fa fa-align-justify' />
                </span>
              </button>
              <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav'>
                  <li className='tl-dropdown'>
                    <a href='#'>Home</a>
                    <ul className='tl-dropdown-menu'>
                      <li>
                        <a href='index.html'>Home V-1</a>
                      </li>
                      <li>
                        <a href='index1.html'>Home V-2</a>
                      </li>
                      <li>
                        <a href='dashboard.html'>Home Dashboard</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='about.html'>About</a>
                  </li>
                  <li>
                    <a href='property.html'>Service</a>
                  </li>
                  <li className='tl-dropdown'>
                    <a href='#'>Pages</a>
                    <ul className='tl-dropdown-menu'>
                      <li>
                        <a href='team.html'>Agents</a>
                      </li>
                      <li>
                        <a href='blog-list.html'>Blog List View</a>
                      </li>
                      <li>
                        <a href='blog-list.html'>Blog List View</a>
                      </li>
                      <li>
                        <a href='blog-details.html'>Blog Details</a>
                      </li>
                      <li>
                        <a href='agent-details.html'>Agent Details</a>
                      </li>
                      <li>
                        <a href='property-submit.html'>Property Submit</a>
                      </li>
                      <li>
                        <a href='property-details.html'>Property Details</a>
                      </li>
                      <li>
                        <a href='login.html'>Login</a>
                      </li>
                      <li>
                        <a href='sign-up.html'>Sign Up</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='blog.html'>Blog</a>
                  </li>
                  <li>
                    <a href='contact.html'>Contact</a>
                  </li>
                </ul>
              </div>
              <div className='right-content'>
                <form className='tl-search-form align-self-center' role='search' action='#'>
                  <input type='search' className='form-control' placeholder='Search here...' />
                  <button type='submit' id='search-submit' className='btn'>
                    <i className='fa fa-search' />
                  </button>
                </form>
                <div className='tl-search'>
                  <div className='search-icon'>
                    <i className='fa fa-search' aria-hidden='true' />
                  </div>
                  <div className='search-form text-center open-search'>
                    <div className='close-search'>
                      <span>
                        <i className='fa fa-times-circle' aria-hidden='true' />
                      </span>
                    </div>
                    <form action='#' id='search' method='get'>
                      <input
                        id='inputhead'
                        name='search'
                        type='text'
                        placeholder='Enter keyword...'
                      />
                      <button type='submit'>
                        <i className='fa fa-search' aria-hidden='true' />
                      </button>
                    </form>
                    {/* /form */}
                  </div>
                  {/* /s form */}
                </div>
                {/* /.tl-search */}
                <div className='tl-user-option align-self-center'>
                  <ul className='global-list d-flex align-self-center'>
                    <li>
                      <a href='#'>
                        <i className='fa fa-th-large' aria-hidden='true' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-envelope-o' aria-hidden='true' /> <span>3</span>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-bell-o' aria-hidden='true' />
                      </a>
                    </li>
                  </ul>
                  <div className='tl-user align-self-center'>
                    <div className='author dropdown'>
                      <a
                        href='#'
                        className='dropdown-toggle'
                        type='button'
                        id='tl-dropdown'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        <img
                          className='img-fluid'
                          src='assets/images/others/author2.png'
                          alt='Image'
                        />
                      </a>
                      <div className='dropdown-menu' aria-labelledby='tl-dropdown'>
                        <a className='dropdown-item' href='edit-profile.html'>
                          {' '}
                          Profile
                        </a>
                        <a className='dropdown-item' href='#'>
                          My Wallet
                        </a>
                        <a className='dropdown-item' href='#'>
                          Settings
                        </a>
                        <a className='dropdown-item' href='#'>
                          Lock screen
                        </a>
                        <div className='dropdown-divider' />
                        <a className='dropdown-item text-danger' href='login.html'>
                          {' '}
                          Logout
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.tl-user-option */}
              </div>
            </div>
            {/* /.container */}
          </nav>
          {/* /.navbar */}
        </div>
        {/* /.tl-menu */}
      </header>
      {/* /.tl-header */}
      <div className='tl-section'>
        <div className='tl-dashboard bg-color'>
          <div className='container-fluid p-0'>
            <div className='main'>
              <div className='row'>
                <div className='col-sm-6 col-md-3'>
                  <div className='db-box box-1'>
                    <div className='db-box-icon'>
                      <i className='fa fa-th-large' aria-hidden='true' />
                    </div>
                    <div className='db-box-inner'>
                      <span>Property Sale</span>
                      <span className='tl-border'>
                        <img src='assets/images/db/border.png' alt='Image' className='img-fluid' />
                      </span>
                      <h3>7069</h3>
                      <span className='rating'>43%</span>
                    </div>
                  </div>
                </div>
                {/* db-box */}
                <div className='col-sm-6 col-md-3'>
                  <div className='db-box box-2'>
                    <div className='db-box-icon'>
                      <i className='fa fa-eye' aria-hidden='true' />
                    </div>
                    <div className='db-box-inner'>
                      <span>Property View</span>
                      <span className='tl-border'>
                        <img src='assets/images/db/border.png' alt='Image' className='img-fluid' />
                      </span>
                      <h3>22,000</h3>
                      <span className='rating'>25%</span>
                    </div>
                  </div>
                </div>
                {/* db-box */}
                <div className='col-sm-6 col-md-3'>
                  <div className='db-box box-3'>
                    <div className='db-box-icon'>
                      <i className='fa fa-bars' aria-hidden='true' />
                    </div>
                    <div className='db-box-inner'>
                      <span>Property Listed</span>
                      <span className='tl-border'>
                        <img src='assets/images/db/border.png' alt='Image' className='img-fluid' />
                      </span>
                      <h3>200</h3>
                      <span className='rating'>30%</span>
                    </div>
                  </div>
                </div>
                {/* db-box */}
                <div className='col-sm-6 col-md-3'>
                  <div className='db-box box-4'>
                    <div className='db-box-icon'>
                      <i className='fa fa-globe' aria-hidden='true' />
                    </div>
                    <div className='db-box-inner'>
                      <span>Total View</span>
                      <span className='tl-border'>
                        <img src='assets/images/db/border.png' alt='Image' className='img-fluid' />
                      </span>
                      <h3>10,369</h3>
                      <span className='rating'>90%</span>
                    </div>
                  </div>
                </div>
                {/* db-box */}
              </div>
              <div className='price-boxes'>
                <ul className='global-list'>
                  <li>
                    $125.33k <small>Sales</small>
                  </li>
                  <li>
                    5300+ <small>Products</small>
                  </li>
                  <li>
                    1,058k <small>Visits</small>
                  </li>
                  <li>
                    $66.55k <small>Shopping</small>
                  </li>
                </ul>
              </div>
              {/* price-boxes */}
              <div className='row'>
                <div className='col-lg-8'>
                  <div className='bg-white sub-section'>
                    <div className='ds-header d-flex justify-content-between'>
                      <div className='title'>
                        <h1>View Statistics</h1>
                      </div>
                      <div className='statistics-header'>
                        <select name='' id='select-chart'>
                          <option value='thirty'>Last 30 Days</option>
                          <option value='oneyear'>Last 1 Year</option>
                        </select>
                      </div>
                    </div>
                    <div className='view-statistics'>
                      <div className='statistics-content'>
                        <canvas id='oneYear' className='lt-chart oneyear' />
                        <canvas id='thirtyDays' className='lt-chart thirty' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='widget'>
                    <div className='ds-header d-flex justify-content-between'>
                      <div className='title'>
                        <h1>Featured Properties</h1>
                      </div>
                    </div>
                    <div className='featured-slider'>
                      <div className='property'>
                        <div className='thumb'>
                          <img
                            src='assets/images/property/sm-slider-2.jpg'
                            alt='Image'
                            className='img-fluid'
                          />
                          <div className='overlay'>
                            <div className='property-status'>
                              <a href='#'>Hot</a>
                              <a href='#'>Rent</a>
                            </div>
                            <div className='lt-price'>
                              <span>$570,600</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /.property */}
                      <div className='property'>
                        <div className='thumb'>
                          <img
                            src='assets/images/property/sm-slider-2.jpg'
                            alt='Image'
                            className='img-fluid'
                          />
                          <div className='overlay'>
                            <div className='property-status'>
                              <a href='#'>Hot</a>
                              <a href='#'>Rent</a>
                            </div>
                            <div className='lt-price'>
                              <span>$570,600</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /.property */}
                    </div>
                    {/* /.featured-slider */}
                  </div>
                  {/* /.widget */}
                </div>
              </div>
              {/* /.row */}
              <div className='lt-section'>
                <div className='section-content property-content'>
                  <div className='row'>
                    <div className='col-md-6 col-lg-3'>
                      <div className='property'>
                        <div className='thumb'>
                          <img
                            src='assets/images/property/1.jpg'
                            alt='Image'
                            className='img-fluid'
                          />
                          <div className='overlay'>
                            <div className='property-status'>
                              <a href='#'>Rent</a>
                            </div>
                            <div className='icons'>
                              <ul className='global-list'>
                                <li>
                                  <a href='property-details.html'>
                                    <i className='fa fa-eye' aria-hidden='true' />
                                  </a>
                                </li>
                                <li>
                                  <a href='assets/images/property/2.jpg' className='lt-popup'>
                                    <i className='fa fa-search' aria-hidden='true' />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className='d-flex map-location justify-content-between'>
                              <div className='left-content'>
                                <span className='map-icon'>
                                  <i className='fa fa-map-marker' aria-hidden='true' />
                                </span>
                                <span>8514 W. Pennington St</span>
                              </div>
                              <div className='heart-iocn'>
                                <a href='#'>
                                  <i className='fa fa-heart' aria-hidden='true' />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='property-info'>
                          <div className='info-top'>
                            <h2>
                              <a href='property-details.html'>
                                The Quest Strom Architects modern house
                              </a>
                            </h2>
                            <div className='meta'>
                              <ul className='global-list'>
                                <li>
                                  <span>
                                    <img
                                      src='assets/images/others/icon7.png'
                                      alt='Image'
                                      className='img-fluid'
                                    />
                                  </span>
                                  6 Badroom
                                </li>
                                <li>
                                  <span>
                                    <img
                                      src='assets/images/others/icon8.png'
                                      alt='Image'
                                      className='img-fluid'
                                    />
                                  </span>
                                  6 Bathroom
                                </li>
                                <li>
                                  <span>
                                    <img
                                      src='assets/images/others/icon9.png'
                                      alt='Image'
                                      className='img-fluid'
                                    />
                                  </span>
                                  6000 Sf.
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className='property-footer d-flex justify-content-between'>
                            <div className='author d-flex'>
                              <span className='author-thumb'>
                                <img
                                  src='assets/images/others/author1.png'
                                  alt='Image'
                                  className='img-fluid'
                                />
                              </span>
                              <span className='align-self-center'>Anricia Socibalia</span>
                            </div>
                            {/* /.author */}
                            <div className='price align-self-center'>
                              <h3>$4,500/m</h3>
                            </div>
                          </div>
                          {/* /.property-footer */}
                        </div>
                        {/* /.property-info */}
                      </div>
                      {/* /.property */}
                    </div>
                    <div className='col-md-6 col-lg-3'>
                      <div className='property'>
                        <div className='thumb'>
                          <img
                            src='assets/images/property/2.jpg'
                            alt='Image'
                            className='img-fluid'
                          />
                          <div className='overlay'>
                            <div className='property-status'>
                              <a href='#'>Rent</a>
                            </div>
                            <div className='icons'>
                              <ul className='global-list'>
                                <li>
                                  <a href='property-details.html'>
                                    <i className='fa fa-eye' aria-hidden='true' />
                                  </a>
                                </li>
                                <li>
                                  <a href='assets/images/property/2.jpg' className='lt-popup'>
                                    <i className='fa fa-search' aria-hidden='true' />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className='d-flex map-location justify-content-between'>
                              <div className='left-content'>
                                <span className='map-icon'>
                                  <i className='fa fa-map-marker' aria-hidden='true' />
                                </span>
                                <span>8205 Myers Dr</span>
                              </div>
                              <div className='heart-iocn'>
                                <a href='#'>
                                  <i className='fa fa-heart' aria-hidden='true' />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='property-info'>
                          <div className='info-top'>
                            <h2>
                              <a href='property-details.html'>
                                Dramatically e-enable e-business results
                              </a>
                            </h2>
                            <div className='meta'>
                              <ul className='global-list'>
                                <li>
                                  <span>
                                    <img
                                      src='assets/images/others/icon7.png'
                                      alt='Image'
                                      className='img-fluid'
                                    />
                                  </span>
                                  6 Badroom
                                </li>
                                <li>
                                  <span>
                                    <img
                                      src='assets/images/others/icon8.png'
                                      alt='Image'
                                      className='img-fluid'
                                    />
                                  </span>
                                  6 Bathroom
                                </li>
                                <li>
                                  <span>
                                    <img
                                      src='assets/images/others/icon9.png'
                                      alt='Image'
                                      className='img-fluid'
                                    />
                                  </span>
                                  6000 Sf.
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className='property-footer d-flex justify-content-between'>
                            <div className='author d-flex'>
                              <span className='author-thumb'>
                                <img
                                  src='assets/images/others/author1.png'
                                  alt='Image'
                                  className='img-fluid'
                                />
                              </span>
                              <span className='align-self-center'>Anricia Socibalia</span>
                            </div>
                            {/* /.author */}
                            <div className='price align-self-center'>
                              <h3>$4,500/m</h3>
                            </div>
                          </div>
                          {/* /.property-footer */}
                        </div>
                        {/* /.property-info */}
                      </div>
                      {/* /.property */}
                    </div>
                    <div className='col-md-6 col-lg-3'>
                      <div className='property'>
                        <div className='thumb'>
                          <img
                            src='assets/images/property/3.jpg'
                            alt='Image'
                            className='img-fluid'
                          />
                          <div className='overlay'>
                            <div className='property-status'>
                              <a href='#'>Rent</a>
                            </div>
                            <div className='icons'>
                              <ul className='global-list'>
                                <li>
                                  <a href='property-details.html'>
                                    <i className='fa fa-eye' aria-hidden='true' />
                                  </a>
                                </li>
                                <li>
                                  <a href='assets/images/property/2.jpg' className='lt-popup'>
                                    <i className='fa fa-search' aria-hidden='true' />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className='d-flex map-location justify-content-between'>
                              <div className='left-content'>
                                <span className='map-icon'>
                                  <i className='fa fa-map-marker' aria-hidden='true' />
                                </span>
                                <span>7070 strong Ave. VA 22015</span>
                              </div>
                              <div className='heart-iocn'>
                                <a href='#'>
                                  <i className='fa fa-heart' aria-hidden='true' />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='property-info'>
                          <div className='info-top'>
                            <h2>
                              <a href='property-details.html'>
                                Synergistically mesh go forward potentialities
                              </a>
                            </h2>
                            <div className='meta'>
                              <ul className='global-list'>
                                <li>
                                  <span>
                                    <img
                                      src='assets/images/others/icon7.png'
                                      alt='Image'
                                      className='img-fluid'
                                    />
                                  </span>
                                  6 Badroom
                                </li>
                                <li>
                                  <span>
                                    <img
                                      src='assets/images/others/icon8.png'
                                      alt='Image'
                                      className='img-fluid'
                                    />
                                  </span>
                                  6 Bathroom
                                </li>
                                <li>
                                  <span>
                                    <img
                                      src='assets/images/others/icon9.png'
                                      alt='Image'
                                      className='img-fluid'
                                    />
                                  </span>
                                  6000 Sf.
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className='property-footer d-flex justify-content-between'>
                            <div className='author d-flex'>
                              <span className='author-thumb'>
                                <img
                                  src='assets/images/others/author1.png'
                                  alt='Image'
                                  className='img-fluid'
                                />
                              </span>
                              <span className='align-self-center'>Anricia Socibalia</span>
                            </div>
                            {/* /.author */}
                            <div className='price align-self-center'>
                              <h3>$4,500/m</h3>
                            </div>
                          </div>
                          {/* /.property-footer */}
                        </div>
                        {/* /.property-info */}
                      </div>
                      {/* /.property */}
                    </div>
                    <div className='col-md-6 col-lg-3'>
                      <div className='property'>
                        <div className='thumb'>
                          <img
                            src='assets/images/property/4.jpg'
                            alt='Image'
                            className='img-fluid'
                          />
                          <div className='overlay'>
                            <div className='property-status'>
                              <a href='#'>Rent</a>
                            </div>
                            <div className='icons'>
                              <ul className='global-list'>
                                <li>
                                  <a href='property-details.html'>
                                    <i className='fa fa-eye' aria-hidden='true' />
                                  </a>
                                </li>
                                <li>
                                  <a href='assets/images/property/2.jpg' className='lt-popup'>
                                    <i className='fa fa-search' aria-hidden='true' />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className='d-flex map-location justify-content-between'>
                              <div className='left-content'>
                                <span className='map-icon'>
                                  <i className='fa fa-map-marker' aria-hidden='true' />
                                </span>
                                <span>7462 Meadow Street</span>
                              </div>
                              <div className='heart-iocn'>
                                <a href='#'>
                                  <i className='fa fa-heart' aria-hidden='true' />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='property-info'>
                          <div className='info-top'>
                            <h2>
                              <a href='property-details.html'>Compellingly empower goal-oriented</a>
                            </h2>
                            <div className='meta'>
                              <ul className='global-list'>
                                <li>
                                  <span>
                                    <img
                                      src='assets/images/others/icon7.png'
                                      alt='Image'
                                      className='img-fluid'
                                    />
                                  </span>
                                  6 Badroom
                                </li>
                                <li>
                                  <span>
                                    <img
                                      src='assets/images/others/icon8.png'
                                      alt='Image'
                                      className='img-fluid'
                                    />
                                  </span>
                                  6 Bathroom
                                </li>
                                <li>
                                  <span>
                                    <img
                                      src='assets/images/others/icon9.png'
                                      alt='Image'
                                      className='img-fluid'
                                    />
                                  </span>
                                  6000 Sf.
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className='property-footer d-flex justify-content-between'>
                            <div className='author d-flex'>
                              <span className='author-thumb'>
                                <img
                                  src='assets/images/others/author1.png'
                                  alt='Image'
                                  className='img-fluid'
                                />
                              </span>
                              <span className='align-self-center'>Anricia Socibalia</span>
                            </div>
                            {/* /.author */}
                            <div className='price align-self-center'>
                              <h3>$4,500/m</h3>
                            </div>
                          </div>
                          {/* /.property-footer */}
                        </div>
                        {/* /.property-info */}
                      </div>
                      {/* /.property */}
                    </div>
                  </div>
                  {/* /.row */}
                </div>
                {/* /.section-content */}
              </div>
              {/* /.lt-section */}
              <div className='row'>
                <div className='col-md-6'>
                  <div className='bg-white sub-section'>
                    <div className='ds-header d-flex justify-content-between'>
                      <div className='title'>
                        <h1>Recent Listing</h1>
                      </div>
                      <div className='more-icon align-self-center'>
                        <a href='#'>
                          <i className='fa fa-ellipsis-h' aria-hidden='true' />
                        </a>
                      </div>
                    </div>
                    {/* /.ds-header */}
                    <div className='recent-listing'>
                      <ul className='global-list'>
                        <li>
                          <div className='d-flex'>
                            <div className='thumb'>
                              <img
                                src='assets/images/db/list1.png'
                                alt='Image'
                                className='img-fluid'
                              />
                            </div>
                            <div className='info align-self-center'>
                              <h2>
                                <a href='#'>Energistically whiteboard business paradigms.</a>
                              </h2>
                              <div className='d-flex map-location justify-content-between'>
                                <div className='left-content'>
                                  <span className='map-icon'>
                                    <i className='fa fa-map-marker' aria-hidden='true' />
                                  </span>
                                  <span>550 East, BA North Limia.</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='details align-self-center'>
                            <a href='#'>
                              Details <i className='fa fa-angle-right' aria-hidden='true' />
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className='d-flex'>
                            <div className='thumb'>
                              <img
                                src='assets/images/db/list1.png'
                                alt='Image'
                                className='img-fluid'
                              />
                            </div>
                            <div className='info align-self-center'>
                              <h2>
                                <a href='#'>Energistically whiteboard business paradigms.</a>
                              </h2>
                              <div className='d-flex map-location justify-content-between'>
                                <div className='left-content'>
                                  <span className='map-icon'>
                                    <i className='fa fa-map-marker' aria-hidden='true' />
                                  </span>
                                  <span>550 East, BA North Limia.</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='details align-self-center'>
                            <a href='#'>
                              Details <i className='fa fa-angle-right' aria-hidden='true' />
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className='d-flex'>
                            <div className='thumb'>
                              <img
                                src='assets/images/db/list1.png'
                                alt='Image'
                                className='img-fluid'
                              />
                            </div>
                            <div className='info align-self-center'>
                              <h2>
                                <a href='#'>Energistically whiteboard business paradigms.</a>
                              </h2>
                              <div className='d-flex map-location justify-content-between'>
                                <div className='left-content'>
                                  <span className='map-icon'>
                                    <i className='fa fa-map-marker' aria-hidden='true' />
                                  </span>
                                  <span>550 East, BA North Limia.</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='details align-self-center'>
                            <a href='#'>
                              Details <i className='fa fa-angle-right' aria-hidden='true' />
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className='d-flex'>
                            <div className='thumb'>
                              <img
                                src='assets/images/db/list1.png'
                                alt='Image'
                                className='img-fluid'
                              />
                            </div>
                            <div className='info align-self-center'>
                              <h2>
                                <a href='#'>Energistically whiteboard business paradigms.</a>
                              </h2>
                              <div className='d-flex map-location justify-content-between'>
                                <div className='left-content'>
                                  <span className='map-icon'>
                                    <i className='fa fa-map-marker' aria-hidden='true' />
                                  </span>
                                  <span>550 East, BA North Limia.</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='details align-self-center'>
                            <a href='#'>
                              Details <i className='fa fa-angle-right' aria-hidden='true' />
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* /.recent-listing */}
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='rating-review bg-white sub-section'>
                    <div className='ds-header d-flex justify-content-between'>
                      <div className='title'>
                        <h1>Ratings &amp; Reviews</h1>
                      </div>
                    </div>
                    {/* /.ds-header */}
                    <div className='rating-review-inner'>
                      <div className='rating'>
                        <ol>
                          <li>
                            <div className='progress'>
                              <div
                                className='progress-bar'
                                role='progressbar'
                                style={{ width: '70%' }}
                                aria-valuenow={70}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <span>70%</span>
                          </li>
                          <li>
                            <div className='progress'>
                              <div
                                className='progress-bar'
                                role='progressbar'
                                style={{ width: '54%' }}
                                aria-valuenow={54}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <span>54%</span>
                          </li>
                          <li>
                            <div className='progress'>
                              <div
                                className='progress-bar'
                                role='progressbar'
                                style={{ width: '44%' }}
                                aria-valuenow={44}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <span>99%</span>
                          </li>
                          <li>
                            <div className='progress'>
                              <div
                                className='progress-bar'
                                role='progressbar'
                                style={{ width: '0%' }}
                                aria-valuenow={0}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <span>0%</span>
                          </li>
                          <li>
                            <div className='progress'>
                              <div
                                className='progress-bar'
                                role='progressbar'
                                style={{ width: '0%' }}
                                aria-valuenow={0}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <span>0%</span>
                          </li>
                        </ol>
                      </div>
                      <div className='review'>
                        <div className='d-flex'>
                          <div className='rating-number'>
                            <span>4.70</span>
                          </div>
                          <div className='rating-star'>
                            <span className='title'>Overall rating</span>
                            <div className='d-flex'>
                              <ul className='global-list stars'>
                                <li>
                                  <i className='fa fa-star-o' aria-hidden='true' />
                                </li>
                                <li>
                                  <i className='fa fa-star-o' aria-hidden='true' />
                                </li>
                                <li>
                                  <i className='fa fa-star-o' aria-hidden='true' />
                                </li>
                                <li>
                                  <i className='fa fa-star-o' aria-hidden='true' />
                                </li>
                                <li>
                                  <i className='fa fa-star-o' aria-hidden='true' />
                                </li>
                              </ul>
                              <span>based on all ratings</span>
                            </div>
                          </div>
                        </div>
                        <div className='rating-parcent'>
                          <ul className='global-list'>
                            <li>
                              Value <span>88%</span>
                            </li>
                            <li>
                              Quality <span>100%</span>
                            </li>
                            <li>
                              Service <span>100%</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* /.rating-review-inner */}
                    <div className='lt-comments-area'>
                      <h3>1 Review</h3>
                      <ul className='comment-list global-list'>
                        <li className='media'>
                          <div className='commenter-avatar'>
                            <a href='#'>
                              <img
                                className='img-fluid'
                                src='assets/images/others/author2.png'
                                alt='Image'
                              />
                            </a>
                          </div>
                          <div className='comment-box media-body'>
                            <div className='comment-meta'>
                              <span className='title'>
                                <a href='#' className='url'>
                                  Angelina Ammy
                                </a>
                              </span>
                              <div className='d-flex float-right'>
                                <div className='rating-star'>
                                  <ul className='global-list stars'>
                                    <li>
                                      <i className='fa fa-star-o' aria-hidden='true' />
                                    </li>
                                    <li>
                                      <i className='fa fa-star-o' aria-hidden='true' />
                                    </li>
                                    <li>
                                      <i className='fa fa-star-o' aria-hidden='true' />
                                    </li>
                                    <li>
                                      <i className='fa fa-star-o' aria-hidden='true' />
                                    </li>
                                    <li>
                                      <i className='fa fa-star-o' aria-hidden='true' />
                                    </li>
                                  </ul>
                                </div>
                                <span className='lt-reply'>
                                  <a href='#'>
                                    <i className='fa fa-reply' aria-hidden='true' /> Reply
                                  </a>
                                </span>
                              </div>
                            </div>
                            <div className='comment-content'>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                istry Ipsum hsben the standard dummy.
                              </p>
                            </div>
                            <span className='lt-date'>2 day ago</span>
                          </div>
                          {/* /.comment-box */}
                        </li>
                      </ul>
                    </div>
                    {/* /.lt-comments-area */}
                  </div>
                </div>
              </div>
              {/* /.row */}
              <div className='bg-white sub-section project-table-content'>
                <div className='ds-header d-flex justify-content-between'>
                  <div className='title'>
                    <h1>Project of the Month</h1>
                  </div>
                  <div className='more-icon align-self-center'>
                    <a href='#'>
                      <i className='fa fa-ellipsis-h' aria-hidden='true' />
                    </a>
                  </div>
                </div>
                {/* /.ds-header */}
                <table className='table project-table'>
                  <thead>
                    <tr>
                      <th scope='col'>
                        <span>
                          <i className='fa fa-square-o' aria-hidden='true' />
                        </span>
                        ID No
                      </th>
                      <th scope='col'>Team Lead</th>
                      <th scope='col'>Project</th>
                      <th scope='col'>Team</th>
                      <th scope='col'>Status</th>
                      <th scope='col'>Week</th>
                      <th scope='col'>Budget</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope='row' className='tl-checkbox'>
                        <div className='form-group'>
                          <input type='checkbox' name='tnc' id='tnc' />
                          <label htmlFor='tnc'># 000195</label>
                        </div>
                      </th>
                      <td className='tl-member'>
                        <div className='member d-flex'>
                          <div className='thumb'>
                            <img
                              src='assets/images/others/author2.png'
                              alt='Image'
                              className='img-fluid'
                            />
                          </div>
                          <div className='info align-self-center'>
                            <span className='title'>David Smith</span>
                            <a href='#'>david-smith@gmail.com</a>
                          </div>
                        </div>
                        {/* /.member */}
                      </td>
                      <td className='tl-project'>Mannaa Real Estate</td>
                      <td>
                        <div className='team-list d-flex'>
                          <ul className='global-list d-flex'>
                            <li>Sa</li>
                            <li>Ms</li>
                            <li>Al</li>
                          </ul>
                          <div className='add-item'>
                            <a href='#'>
                              <i className='fa fa-plus' aria-hidden='true' />
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className='color'>
                          <span />
                        </div>
                      </td>
                      <td>40</td>
                      <td>$100k</td>
                    </tr>
                    <tr>
                      <th scope='row' className='tl-checkbox'>
                        <div className='form-group'>
                          <input type='checkbox' name='tnc1' id='tnc1' />
                          <label htmlFor='tnc1'># 000195</label>
                        </div>
                      </th>
                      <td className='tl-member'>
                        <div className='member d-flex'>
                          <div className='thumb'>
                            <img
                              src='assets/images/others/author2.png'
                              alt='Image'
                              className='img-fluid'
                            />
                          </div>
                          <div className='info align-self-center'>
                            <span className='title'>David Smith</span>
                            <a href='#'>david-smith@gmail.com</a>
                          </div>
                        </div>
                        {/* /.member */}
                      </td>
                      <td className='tl-project'>Mannaa Real Estate</td>
                      <td>
                        <div className='team-list d-flex'>
                          <ul className='global-list d-flex'>
                            <li>Sa</li>
                            <li>Ms</li>
                            <li>Al</li>
                          </ul>
                          <div className='add-item'>
                            <a href='#'>
                              <i className='fa fa-plus' aria-hidden='true' />
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className='color color-1'>
                          <span />
                        </div>
                      </td>
                      <td>40</td>
                      <td>$100k</td>
                    </tr>
                    <tr>
                      <th scope='row' className='tl-checkbox'>
                        <div className='form-group'>
                          <input type='checkbox' name='tnc2' id='tnc2' />
                          <label htmlFor='tnc2'># 000195</label>
                        </div>
                      </th>
                      <td className='tl-member'>
                        <div className='member d-flex'>
                          <div className='thumb'>
                            <img
                              src='assets/images/others/author2.png'
                              alt='Image'
                              className='img-fluid'
                            />
                          </div>
                          <div className='info align-self-center'>
                            <span className='title'>David Smith</span>
                            <a href='#'>david-smith@gmail.com</a>
                          </div>
                        </div>
                        {/* /.member */}
                      </td>
                      <td className='tl-project'>Mannaa Real Estate</td>
                      <td>
                        <div className='team-list d-flex'>
                          <ul className='global-list d-flex'>
                            <li>Sa</li>
                            <li>Ms</li>
                            <li>Al</li>
                          </ul>
                          <div className='add-item'>
                            <a href='#'>
                              <i className='fa fa-plus' aria-hidden='true' />
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className='color color-2'>
                          <span />
                        </div>
                      </td>
                      <td>40</td>
                      <td>$100k</td>
                    </tr>
                    <tr>
                      <th scope='row' className='tl-checkbox'>
                        <div className='form-group'>
                          <input type='checkbox' name='tnc3' id='tnc3' />
                          <label htmlFor='tnc3'># 000195</label>
                        </div>
                      </th>
                      <td className='tl-member'>
                        <div className='member d-flex'>
                          <div className='thumb'>
                            <img
                              src='assets/images/others/author2.png'
                              alt='Image'
                              className='img-fluid'
                            />
                          </div>
                          <div className='info align-self-center'>
                            <span className='title'>David Smith</span>
                            <a href='#'>david-smith@gmail.com</a>
                          </div>
                        </div>
                        {/* /.member */}
                      </td>
                      <td className='tl-project'>Mannaa Real Estate</td>
                      <td>
                        <div className='team-list d-flex'>
                          <ul className='global-list d-flex'>
                            <li>Sa</li>
                            <li>Ms</li>
                            <li>Al</li>
                          </ul>
                          <div className='add-item'>
                            <a href='#'>
                              <i className='fa fa-plus' aria-hidden='true' />
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className='color color-3'>
                          <span />
                        </div>
                      </td>
                      <td>40</td>
                      <td>$100k</td>
                    </tr>
                    <tr>
                      <th scope='row'>
                        <div className='form-group'>
                          <input type='checkbox' name='tnc4' id='tnc4' />
                          <label htmlFor='tnc4'># 000195</label>
                        </div>
                      </th>
                      <td className='tl-member'>
                        <div className='member d-flex'>
                          <div className='thumb'>
                            <img
                              src='assets/images/others/author2.png'
                              alt='Image'
                              className='img-fluid'
                            />
                          </div>
                          <div className='info align-self-center'>
                            <span className='title'>David Smith</span>
                            <a href='#'>david-smith@gmail.com</a>
                          </div>
                        </div>
                        {/* /.member */}
                      </td>
                      <td className='tl-project'>Mannaa Real Estate</td>
                      <td>
                        <div className='team-list d-flex'>
                          <ul className='global-list d-flex'>
                            <li>Sa</li>
                            <li>Ms</li>
                            <li>Al</li>
                          </ul>
                          <div className='add-item'>
                            <a href='#'>
                              <i className='fa fa-plus' aria-hidden='true' />
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className='color'>
                          <span />
                        </div>
                      </td>
                      <td>40</td>
                      <td>$100k</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* /.sub-section */}
              <div className='row bottom-content'>
                <div className='col-lg-6'>
                  <div className='bg-white sub-section'>
                    <div className='ds-header d-flex justify-content-between'>
                      <div className='title'>
                        <h1>Monthly Price Change</h1>
                      </div>
                      <div className='more-icon align-self-center'>
                        <a href='#'>
                          <i className='fa fa-ellipsis-h' aria-hidden='true' />
                        </a>
                      </div>
                    </div>
                    {/* /.ds-header */}
                    <div className='monthly-price-change'>
                      <div className='monthly-price-body'>
                        <canvas id='monthlyPrice' />
                      </div>
                    </div>
                    {/* monthly-price-change */}
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='bg-white sub-section'>
                        <div className='ds-header d-flex justify-content-between'>
                          <div className='title'>
                            <h1>Top Author</h1>
                          </div>
                          <div className='more-icon align-self-center'>
                            <a href='#'>
                              <i className='fa fa-ellipsis-h' aria-hidden='true' />
                            </a>
                          </div>
                        </div>
                        {/* /.ds-header */}
                        <div className='top-author text-center'>
                          <div className='thumb'>
                            <img
                              src='assets/images/db/top-author.png'
                              alt='Image'
                              className='img-fluid'
                            />
                          </div>
                          <div className='author-info'>
                            <span className='title'>David Smith</span>
                            <span>Broker</span>
                            <p>
                              Interactively impact reliable ROI vis-a-vis e-business e-business.
                            </p>
                            <div className='author-social'>
                              <ul className='global-list'>
                                <li>
                                  <a href='#' className='facebook'>
                                    <i className='fa fa-facebook' />
                                  </a>
                                </li>
                                <li>
                                  <a href='#' className='twitter'>
                                    <i className='fa fa-twitter' />
                                  </a>
                                </li>
                                <li>
                                  <a href='#' className='instagram'>
                                    <i className='fa fa-instagram' />
                                  </a>
                                </li>
                                <li>
                                  <a href='#' className='dribbble'>
                                    <i className='fa fa-dribbble' aria-hidden='true' />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='bg-white sub-section'>
                        <div className='ds-header d-flex justify-content-between'>
                          <div className='title'>
                            <h1>
                              <i className='fa fa-comments' aria-hidden='true' /> Live Chat
                            </h1>
                          </div>
                          <div className='more-icon align-self-center'>
                            <a href='#'>
                              <i className='fa fa-ellipsis-h' aria-hidden='true' />
                            </a>
                          </div>
                        </div>
                        {/* /.ds-header */}
                        <div className='chat-conversation'>
                          <div className='live-chat'>
                            <div className='live-chat-body'>
                              <p>You're Chatting With Jassia</p>
                              <div className='single-message'>
                                <div className='profile-picture'>
                                  <img
                                    src='assets/images/db/messages/9.png'
                                    alt='Profile Picture'
                                  />
                                </div>
                                <div className='user-massage'>
                                  <span className='user-name'>Jassia Deo</span>
                                  <p>
                                    <span className='color'>It’s Great opportunity to work.</span>
                                  </p>
                                  <span className='m-time'>8:00 am</span>
                                </div>
                              </div>
                              <div className='single-message self-message text-right'>
                                <div className='user-massage'>
                                  <span className='user-name'>Sowat Ahsan</span>
                                  <p>
                                    <span className='color'>It’s Great opportunity to work.</span>
                                  </p>
                                  <span className='m-time'>8:00 am</span>
                                </div>
                              </div>
                              <div className='single-message'>
                                <div className='profile-picture'>
                                  <img
                                    src='assets/images/db/messages/9.png'
                                    alt='Profile Picture'
                                  />
                                </div>
                                <div className='user-massage'>
                                  <span className='user-name'>Jassia Deo</span>
                                  <p>
                                    <span className='color'>It’s Great opportunity to work.</span>
                                  </p>
                                  <span className='m-time'>8:00 am</span>
                                </div>
                              </div>
                              <p className='text-right'>Jassia is typing</p>
                            </div>
                            <div className='live-chat-footer'>
                              <div className='send-message'>
                                <form action='#' className='lt-form'>
                                  <div className='form-group mb-0'>
                                    <input
                                      type='text'
                                      className='form-control'
                                      placeholder='Type Your Message'
                                    />
                                    <input type='submit' defaultValue='Send' />
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /.chat-conversation */}
                      </div>
                    </div>
                  </div>
                  {/* /.row */}
                </div>
              </div>
              {/* /.row */}
              <div className='copy-right text-center'>
                <span>
                  <a href='#'>Erfassen</a> © 2020 Developed by Vecuro
                </span>
              </div>
            </div>
            {/* main */}
          </div>
        </div>
        {/* dashboard */}
      </div>
      {/* tl-dashboard */}
    </>
  </>
);
