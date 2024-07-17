import React from "react";

function Expertise() {
  return (
    <div className="Expert w-full h-full flex justify-center mb-16">
      <div className="excontainer w-[80vw] h-full">
        <h1 className="text-6xl font-[HolidayFree] mt-16 ml-10 m-6 text-white">
          Expertise
        </h1>
        <div className="cnt flex justify-center">
          <div className="progress w-[70vw] h-full p-10 text-white">
            <div className="twoinone flex w-full justify-between px-8">
              <div className="lang h-20 w-[27vw]  flex items-center m-4">
                <div className="langlogo w-16 h-16 flex justify-center items-center  m-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="60"
                    height="60"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#E65100"
                      d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
                    ></path>
                    <path
                      fill="#FF6D00"
                      d="M24 8L24 39.9 35.2 36.7 37.7 8z"
                    ></path>
                    <path
                      fill="#FFF"
                      d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
                    ></path>
                    <path
                      fill="#EEE"
                      d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
                    ></path>
                  </svg>
                </div>
                <div className="progressbars ">
                  <h3 className="text-lg font-sans ">HTML</h3>
                  <input
                    className="h-6 w-[20vw] rounded-[60px] bg-white border-0 ring-offset-2 ring-4  ring-[#1C1C1E] ring-inset border-white"
                    type="progress"
                  />
                </div>
              </div>
              <div className="lang h-20 w-[27vw]  flex items-center m-4">
                <div className="langlogo w-16 h-16 flex justify-center items-center  m-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#0277BD"
                      d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
                    ></path>
                    <path
                      fill="#039BE5"
                      d="M24 8L24 39.9 35.2 36.7 37.7 8z"
                    ></path>
                    <path
                      fill="#FFF"
                      d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
                    ></path>
                    <path
                      fill="#EEE"
                      d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
                    ></path>
                  </svg>
                </div>
                <div className="progressbars ">
                  <h3 className="text-lg font-sans">CSS</h3>
                  <input
                    className="h-6 w-[20vw] rounded-[60px] bg-white border-0 ring-offset-2 ring-4  ring-[#1C1C1E] ring-inset border-white"
                    type="progress"
                  />
                </div>
              </div>
            </div>
            <div className="twoinone flex w-full  justify-between px-8">
              <div className="lang h-20 w-[27vw]  flex items-center m-4">
                <div className="langlogo w-16 h-16 flex justify-center items-center  m-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                  >
                    <path fill="#f7df1e" d="M6,42V6h36v36H6z"></path>
                    <path
                      fill="#000001"
                      d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"
                    ></path>
                  </svg>
                </div>
                <div className="progressbars ">
                  <h3 className="text-lg font-sans">Javascript</h3>
                  <input
                    className="h-6 w-[20vw] rounded-[60px] bg-white border-0 ring-offset-2 ring-4  ring-[#1C1C1E] ring-inset border-white"
                    type="progress"
                  />
                </div>
              </div>
              <div className="lang h-20 w-[27vw] flex items-center m-4">
                <div className="langlogo w-16 h-16 flex justify-center items-center m-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#F44336"
                      d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"
                    ></path>
                    <path
                      fill="#F44336"
                      d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"
                    ></path>
                    <g>
                      <path
                        fill="#1565C0"
                        d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"
                      ></path>
                      <path
                        fill="#1565C0"
                        d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"
                      ></path>
                      <path
                        fill="#1565C0"
                        d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"
                      ></path>
                      <path
                        fill="#1565C0"
                        d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"
                      ></path>
                      <path
                        fill="#1565C0"
                        d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="progressbars ">
                  <h3 className="text-lg font-sans">Java</h3>
                  <input
                    className="h-6 w-[20vw] rounded-[60px] bg-white border-0 ring-offset-2 ring-4  ring-[#1C1C1E] ring-inset border-white"
                    type="progress"
                  />
                </div>
              </div>
            </div>
            <div className="twoinone flex w-full  justify-between px-8">
              <div className="lang h-20 w-[27vw]  flex items-center m-4">
                <div className="langlogo w-16 h-16 flex justify-center items-center  m-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#0277BD"
                      d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"
                    ></path>
                    <path
                      fill="#FFC107"
                      d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"
                    ></path>
                  </svg>
                </div>
                <div className="progressbars ">
                  <h3 className="text-lg font-sans">Python</h3>
                  <input
                    className="h-6 w-[20vw] rounded-[60px] bg-white border-0 ring-offset-2 ring-4  ring-[#1C1C1E] ring-inset border-white"
                    type="progress"
                  />
                </div>
              </div>
              <div className="lang h-20 w-[27vw]  flex items-center m-4">
                <div className="langlogo w-16 h-16 flex justify-center items-center  m-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#283593"
                      fill-rule="evenodd"
                      d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill="#5c6bc0"
                      fill-rule="evenodd"
                      d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill="#fff"
                      fill-rule="evenodd"
                      d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill="#3949ab"
                      fill-rule="evenodd"
                      d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="progressbars ">
                  <h3 className="text-lg font-sans">C</h3>
                  <input
                    className="h-6 w-[20vw] rounded-[60px] bg-white border-0 ring-offset-2 ring-4  ring-[#1C1C1E] ring-inset border-white"
                    type="progress"
                  />
                </div>
              </div>
            </div>
            <div className="twoinone flex w-full justify-between px-8">
              <div className="lang h-20 w-[27vw]  flex items-center m-4">
                <div className="langlogo w-16 h-16 flex justify-center items-center  m-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#00549d"
                      fill-rule="evenodd"
                      d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill="#0086d4"
                      fill-rule="evenodd"
                      d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill="#fff"
                      fill-rule="evenodd"
                      d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill="#0075c0"
                      fill-rule="evenodd"
                      d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill="#fff"
                      fill-rule="evenodd"
                      d="M31 21H33V27H31zM38 21H40V27H38z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill="#fff"
                      fill-rule="evenodd"
                      d="M29 23H35V25H29zM36 23H42V25H36z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="progressbars ">
                  <h3 className="text-lg font-sans">C++</h3>
                  <input
                    className="h-6 w-[20vw] rounded-[60px] bg-white border-0 ring-offset-2 ring-4  ring-[#1C1C1E] ring-inset border-white"
                    type="progress"
                  />
                </div>
              </div>
              <div className="lang h-20 w-[27vw]  flex items-center m-4">
                <div className="langlogo w-16 h-16 flex justify-center items-center m-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#F44336"
                      d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"
                    ></path>
                    <path
                      fill="#F44336"
                      d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"
                    ></path>
                    <g>
                      <path
                        fill="#1565C0"
                        d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"
                      ></path>
                      <path
                        fill="#1565C0"
                        d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"
                      ></path>
                      <path
                        fill="#1565C0"
                        d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"
                      ></path>
                      <path
                        fill="#1565C0"
                        d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"
                      ></path>
                      <path
                        fill="#1565C0"
                        d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="progressbars ">
                  <h3 className="text-lg font-sans">
                    Data Structures Using Java
                  </h3>
                  <input
                    className="h-6 w-[20vw] rounded-[60px] bg-white border-0 ring-offset-2 ring-4  ring-[#1C1C1E] ring-inset border-white"
                    type="progress"
                  />
                </div>
              </div>
            </div>
            <div className="twoinone flex w-full  justify-between px-8">
              <div className="lang h-20 w-[27vw]  flex items-center m-4">
                <div className="langlogo w-16 h-16 flex justify-center items-center m-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#80deea"
                      d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
                    ></path>
                    <path
                      fill="#80deea"
                      d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
                    ></path>
                    <path
                      fill="#80deea"
                      d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
                    ></path>
                    <circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                  </svg>
                </div>
                <div className="progressbars ">
                  <h3 className="text-lg font-sans">React Js</h3>
                  <input
                    className="h-6 w-[20vw] rounded-[60px] bg-white border-0 ring-offset-2 ring-4  ring-[#1C1C1E] ring-inset border-white"
                    type="progress"
                  />
                </div>
              </div>
              <div className="lang h-20 w-[27vw] flex items-center m-4">
                <div className="langlogo w-16 h-16 flex justify-center items-center  m-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#00acc1"
                      d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
                    ></path>
                  </svg>
                </div>
                <div className="progressbars ">
                  <h3 className="text-lg font-sans">Tailwind CSS</h3>
                  <input
                    className="h-6 w-[20vw] rounded-[60px] bg-white border-0 ring-offset-2 ring-4  ring-[#1C1C1E] ring-inset border-white"
                    type="progress"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
