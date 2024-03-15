const Recipes = () => {
  return (
    <div className="col-span-2 border">
      <div className="md:grid md:grid-cols-2 border">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-8 pt-10">
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body space-y-6">
            <h2 className="card-title text-xl">Spaghetti Bolognese</h2>
            <p className="text-[#878787] text-lg">Classic Italian pasta dish with savory meat sauce.</p>
            <hr />
            <h2 className="card-title text-xl">Spaghetti Bolognese</h2>
            <ul className="text-[#878787] text-lg">
                <li>500g ground beef</li>
                <li>1 onion, chopped</li>
                <li>2 cloves garlic, minced</li>
            </ul>
            <hr />
            <div className="card-actions">
              <button className="btn  bg-[#0BE58A]">Want to Cook</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
