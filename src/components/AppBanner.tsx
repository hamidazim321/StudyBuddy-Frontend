import BannerCard from "./BannerCard";

export default function AppBanner() {
  return (
    <article className="flex flex-col justify-between flex-grow">
      <div className="grid grid-cols-2 gap-7">
        <div>
          <BannerCard
            headText="Goals"
            bottomText="Set goals for the future to keep you motivated and evaluate your progress"
            topColor="bg-sky-400"
            bottomColor="bg-sky-500"
          />
        </div>
        <div>
          <BannerCard
            headText="Sessions"
            bottomText="Track your daily study sessions for each subject and take control"
            topColor="bg-pink-700"
            bottomColor="bg-pink-800"
          />
        </div>
      </div>
      <div className="w-full text-center">
        <h1 className="font-extrabold text-3xl p-4">Study Smart</h1>
      </div>
      <div className="grid grid-cols-2 gap-7">
        <div>
          <BannerCard
            headText="Analysis"
            bottomText="See analysis of your progress for all engagements or selected groups"
            topColor="bg-red-600"
            bottomColor="bg-red-700"
          />
        </div>
        <div>
          <BannerCard
            headText="Visuals"
            bottomText="See visualizations of your activities in bar charts, line charts and many more"
            topColor="bg-purple-600"
            bottomColor="bg-purple-700"
          />
        </div>
      </div>
    </article>
  );
}
