export default function ImageGrid(props) {
  return (
    <div className="my-container bg-red-500 container mx-auto">
          <span className="bg-white">
            <img src="assets/full-team-on-desk.jpg" alt="" />
          </span>
          <span className="bg-white">
            <img
              src="assets/team-prof.jpg"
              alt=""
            />
          </span>
          <span className="bg-white">
            <img
              src="assets/team-at-rear-end-of-table.jpg"
              alt=""
            />
          </span>
          <span className="bg-white  flex justify-center">
            <a className="inline-block w-full" href="#">
              <img
                src="/assets/team-rear-of-the-table.jpg"
                alt=""
              />
            </a>
          </span>
          <span className="bg-white flex justify-center">
            <img src="assets/full-team-standing.jpg" class="m-auto" alt="" />
          </span>
        </div>  );
}
