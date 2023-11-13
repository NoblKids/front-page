"use client";
import Banner from "../components/FrontPage/Banner/Banner";
import Provide from "../components/FrontPage/Provide/index";
import Newsletter from "../components/FrontPage/Newsletter/Newsletter";
import Footer from "../components/FrontPage/Footer/Footer";

export default function Home() {


  return (
    <>
      <main>
        <Banner />
        <Provide />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
}

// export default function Home() {
//   return (
//     <div>
//         <div className="grid place-content-center h-screen">
//           <div className="flex flex-row justify-center mb-16">
//             <img src="./nobllogo.png" />
//             <h1 className="text-6xl font-medium ml-6"></h1>
//           </div>
//           <div className="">
//             <Link
//               className="text-white bg-sky-600 m-10 p-4 rounded-md"
//               href={"/business"}
//             >
//               For business
//             </Link>
//             <Link
//               className="text-white bg-sky-600 m-10 p-4 rounded-md"
//               href={"/user"}
//             >
//               For parents
//             </Link>
//           </div>
//         </div>
//     </div>
//   );
// }
