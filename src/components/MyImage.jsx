import React, { Children, useEffect, useState } from "react";

function MyImage({ source, divClasses, imageClasses, spinnerClasses }) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <div
        className={
          "flex justify-center items-center content-center " + divClasses
        }
      >
        <img
          style={loading ? { display: "none" } : { display: "block" }}
          src={source}
          className={imageClasses}
          alt=""
          onLoad={() => setLoading(false)}
        />
        <div
          className={
            "flex justify-center items-center content-center my-[50%] scale-[3] " +
            divClasses
          }
          style={loading ? { display: "block" } : { display: "none" }}
        >
          <div
            className={
              "mx-auto block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] " +
              spinnerClasses
            }
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyImage;
