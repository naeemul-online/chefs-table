import bgImage from '../../assets/Images/banner.png'
const Banner = () => {
  return (
    <div>
      <div className="card card-side justify-center  bg-no-repeat bg-cover bg-center h-[650px] mt-12" style={{ backgroundImage: `url(${bgImage})`}}>
        <div className="card-body items-center p-52 text-[#fff] text-center">
          <h2 className="card-title text-5xl">Discover an exceptional cooking <br /> class tailored for you!</h2>
          <p className='text-lg font-light'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br />problems to become an exceptionally well world-class Programmer.</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary text-black bg-green-400 border-none">Explore Now</button>
            <button className="btn bg-none">Our Feedback</button>
          </div>
        </div>
      </div>
      <img src="bg" alt="" />
    </div>
  );
};

export default Banner;
