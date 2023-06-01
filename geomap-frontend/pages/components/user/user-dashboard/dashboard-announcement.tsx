import React from 'react';
import UserDashboardParagraph from '../content/dashboard-paragraph';

function UserAnnouncement() {
  const divGenerator = () => {
    const divs = [];
    const numPost = 10; // Number of posts
    const dummyPost =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt eget mauris ac tristique. Sed ut scelerisque mauris. Nunc mollis varius elit, in scelerisque nunc consequat at. Vivamus dignissim orci a nisi bibendum, eu scelerisque tortor pretium. Proin commodo nisi sit amet velit egestas, a scelerisque velit dapibus. Donec laoreet felis vel sapien commodo pretium.';
    const maxHeight = 500;
    for (let i = 0; i < numPost; i++) {
      divs.push(
        <div
          key={i}
          className="bg-black flex flex-col items-center space-y-2 max-md:w-4/5 h-80 md:w-11/12 md:h-96 p-6 m-4"
        >
          {i + 1}
          <div className="bg-white w-11/12">Title</div>
          <div className="w-11/12 bg-white">
            <UserDashboardParagraph content={dummyPost} maxHeight={maxHeight} />
          </div>
        </div>
      );
    }
    return divs;
  };

  return (
    <div className="bg-red-500 relative h-auto top-20 -z-50 flex flex-col items-center lg:w-10/12 left-40 mx-2 md:w-9/12 md:mx-4 sm:w-9/12 max-sm:left-0 max-sm:w-screen">
      {divGenerator()}
    </div>
  );
}

export default UserAnnouncement;
