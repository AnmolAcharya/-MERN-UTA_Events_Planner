import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/ApartmentParties.jpg",
      title: "Apartment Party",
    },
    {
      id: 2,
      url: "/BirthdayParty.jpg",
      title: "Birthday Decor and Party",
    },
    {
      id: 3,
      url: "/CollegeParty.jpg",
      title: "College Dorm Party",
    },
    {
      id: 4,
      url: "/HomeBuffet.jpg",
      title: "Buffet Setup",
    },
    {
      id: 5,
      url: "/PartyWallpaper.jpg",
      title: "Club Events",
    },
    {
      id: 6,
      url: "/Wallpaper.jpg",
      title: "And many more!",
    },
  ];
  return (
    <>
      <div className="services container">
        <h2>OUR SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;

// import React from "react";

// const Services = () => {
//   const services = [
//     {
//       id: 1,
//       url: "/birthday.jpg",
//       title: "Birthday Planning",
//     },
//     {
//       id: 2,
//       url: "/anniversary.jpg",
//       title: "Anniversary Planning",
//     },
//     {
//       id: 3,
//       url: "/camping.jpg",
//       title: "Camping Trip Planning",
//     },
//     {
//       id: 4,
//       url: "/gamenight.jpg",
//       title: "Game Night Planning",
//     },
//     {
//       id: 5,
//       url: "/party.jpg",
//       title: "Party Planning",
//     },
//     {
//       id: 6,
//       url: "/wedding.jpg",
//       title: "Wedding Planning",
//     },
//   ];
//   return (
//     <>
//       <div className="services container">
//         <h2>OUR SERVICES</h2>
//         <div className="banner">
//           {services.map((element) => {
//             return (
//               <div className="item" key={element.id}>
//                 <h3>{element.title}</h3>
//                 <img src={element.url} alt={element.title} />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services;