import BannerCard from "./BannerCard";

export default function AppBanner() {
  return (
    <article className="flex flex-col justify-between flex-grow">
      <div className="grid grid-cols-2 gap-7">
        <div>
          <BannerCard
            headText="Head"
            bottomText="lorem ipsum is more this dsjg dshje dsjgd dsjgda dsgdsbdsj dsjhdsjgds "
            topColor="bg-blue-500"
            bottomColor="bg-blue-600"
          />
        </div>
        <div>
          <BannerCard
            headText="Head"
            bottomText="lorem ipsum is more this dsjg dshje dsjgd dsjgda dsgdsbdsj dsjhdsjgds "
            topColor="bg-blue-500"
            bottomColor="bg-blue-600"
          />
        </div>
      </div>
      <div className="w-full text-center">
        <h1>What you get</h1>
      </div>
      <div className="grid grid-cols-2 gap-7">
        <div>
          <BannerCard
            headText="Head"
            bottomText="lorem ipsum is more this dsjg dshje dsjgd dsjgda dsgdsbdsj dsjhdsjgds "
            topColor="bg-blue-500"
            bottomColor="bg-blue-600"
          />
        </div>
        <div>
          <BannerCard
            headText="Head"
            bottomText="lorem ipsum is more this dsjg dshje dsjgd dsjgda dsgdsbdsj dsjhdsjgds "
            topColor="bg-blue-500"
            bottomColor="bg-blue-600"
          />
        </div>
      </div>
    </article>
  );
}
