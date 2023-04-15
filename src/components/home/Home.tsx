import BookTable from "./bookTable/BookTable";
import HomeHeader from "./HomeHeader";

const Home = (): JSX.Element => {
  return (
    <div className="w-full h-full grid place-items-center">
      <HomeHeader />
      <BookTable />
    </div>
  );
};

export default Home;
