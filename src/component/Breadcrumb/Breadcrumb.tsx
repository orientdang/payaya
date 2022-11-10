export const Breadcrumb = () => (
  <div className='lt-breadcrumb'>
    <div className='breadcrumb-content'>
      <div className='container'>
        <div className='d-flex justify-content-between'>
          <div className='title'>
            <h1>Login</h1>
          </div>
          <ol className='breadcrumb align-self-center'>
            <li className='breadcrumb-item'>
              <a href='index.html'>Home</a>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              Login
            </li>
          </ol>
        </div>
      </div>
      {/* /.container */}
    </div>
    {/* /.breadcrumb-content */}
  </div>
);
