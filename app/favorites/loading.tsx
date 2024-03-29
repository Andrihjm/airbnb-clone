import SkeletonCard from "../components/SkeletonCard";

const loadingFavotire = () => {
  return (
    <section className="container mx-auto px-5 mt-10 lg:px-10">
      <h2 className="text-3xl font-semibold tracking-tighter">
        Yoyur Favorite
      </h2>

      <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8 mt-8">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </section>
  );
};

export default loadingFavotire;
