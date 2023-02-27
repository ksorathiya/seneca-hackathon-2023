export default function ImageGrid(props) {
  return (
    <div className="my-container bg-red-500 container mx-auto">
          <span className="bg-white">
            <img src="assets/full-team-on-desk.jpg" alt="" />
          </span>
          <span className="bg-white">
            <img
              src="assets/design-jam-step-background.jpg"
              alt=""
            />
          </span>
          <span className="bg-white">
            <img
              src="assets/design-jam-step-background.jpg"
              alt=""
            />
          </span>
          <span className="bg-white">
            <a className="inline-block w-full" href="#">
              <img
                src="assets/design-jam-step-background.jpg"
                alt=""
              />
            </a>
          </span>
          <span className="bg-white">
            <img src="assets/full-team-standing.jpg" class="m-auto" alt="" />
          </span>
        </div>  );
}
