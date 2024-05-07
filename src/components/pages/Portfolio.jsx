export default function Portfolio() {
  return (
    <div>
      <h1>Xydra's Portfolio</h1>
      <div className="card-container row row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
        {/* Adjust the number of columns based on the viewport size */}
        <div className="col mb-4">
          <div className="card">
            <div className="card-body">Test 1</div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <div className="card-body">Test 2</div>
          </div>
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>
  );
}
