import Banner from "../components/Banner";
import Highlights from "../components/Highlights";

export default function Home() {
  let sampleProp2 =
    "This sample data is passed from Home to Highlights component.";

  let bannerData = {
    title: "Zuitt Booking System B146",
    description: "View and book a course from our catalog!",
    buttonText: "View Our Courses",
    destination: "/courses",
  };

  return (
    <>
      <Banner bannerProp={bannerData} />
      <Highlights highlightsProp={sampleProp2} />
    </>
  );
}
