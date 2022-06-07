/*Edit as you need. I gave the basic example here. If you not find your solution, let me a reply*/
import React, {useState} from "react";

const YourComponent = () => {
  const [checked, setChecked] = useState(false);
  const selectStyle = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };`enter code here`
  return (
    <>
      <div className="px-20 my-10">
        <h1>Show / Hide Animation with pure CSS</h1>

        <label class="trigger">
          <input
            type="checkbox"
            class="checkbox checkbox--red"
            onClick={(e) => {
              selectStyle(e);
            }}
          />{" "}
          Show additional information
          <div
            className={
              checked
                ? "opacity-100 transition-opacity duration-1000 ease-out"
                : "opacity-0 transition-opacity duration-1000 ease-out"
            }
          >
            <span class="block mt-2 py-2 px-3 border border-susty rounded ">
              Hey there, I'm fading in/out with pure CSS. How cool is that?!
            </span>
          </div>
        </label>
      </div>
    </>
  );
};

export default YourComponent;