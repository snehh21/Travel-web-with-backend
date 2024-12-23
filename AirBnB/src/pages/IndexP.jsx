export default function IndexP() {
  return (
    <div>
      {/* Stylish Search Section */}
      <div className="container mt-4">
        <div className="row search-section">
          {/* Check-In */}
          <div className="col-md-3 search-column">
            <h6 className="search-heading">Check-In</h6>
          </div>

          {/* Check-Out */}
          <div className="col-md-3 search-column">
            <h6 className="search-heading">Check-Out</h6>
          </div>

          {/* Guests */}
          <div className="col-md-3 search-column">
            <h6 className="search-heading">Guests</h6>
          </div>

          {/* Search Button */}
          <div className="col-md-3 search-column">
            <button className="search-button">Search</button>
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div className="container mt-4">
        <div className="row">
          <div className="container d-flex">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="card" style={{ width: '18rem' }}>
                <img
                  className="card-img-top"
                  src="./src/image/img1.avif" // Replace with your image URL
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Cozy Apartment</h5>
                  <p className="card-text">
                    A comfortable and cozy apartment perfect for short stays. Located in the heart of the city.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="card" style={{ width: '18rem' }}>
                <img
                  className="card-img-top"
                  src="./src/image/kumarakom.jpg" // Replace with your image URL
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Beachfront Villa</h5>
                  <p className="card-text">
                    Stunning beachfront villa with incredible ocean views. Perfect for a relaxing vacation.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="card" style={{ width: '18rem' }}>
                <img
                  className="card-img-top"
                  src="./src/image/img3.avif" // Replace with your image URL
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Luxury Penthouse</h5>
                  <p className="card-text">
                    A luxurious penthouse with modern amenities and breathtaking views. Perfect for a premium experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
