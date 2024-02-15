import { useEffect, useState } from "react";
import { fetchData } from "./../utilities/fetchData";

export default function GetData() {
  const [data, setData] = useState({ articles: [] });

  useEffect(() => {
    let ignore = false;

    async function startFetching() {
      try {
        const json = await fetchData();
        if (!ignore) {
          setData(json);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    startFetching();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      {/* main */}
      <main className="my-10 lg:my-14">
        <div className="container mx-auto grid grid-cols-12 gap-8">
          {/* left */}
          <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
            {/* news item */}

            {data.articles.map((article, index) => (
              <div
                key={index}
                className={
                  index === 0
                    ? "col-span-12 grid grid-cols-12 gap-4"
                    : "col-span-12 md:col-span-6 lg:col-span-4"
                }
              >
                {/* info */}
                <div className="col-span-12 lg:col-span-4">
                  <a href="#">
                    <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                      {article.title}
                    </h3>
                  </a>
                  <p className="text-base text-[#5C5955]">
                    {article.description}
                  </p>
                  <p className="mt-5 text-base text-[#5C5955]">1 hour ago</p>
                </div>
                {/* thumb */}

                <div
                  className={
                    index === 0
                      ? "col-span-12 lg:col-span-8"
                      : "col-span-12 md:col-span-6"
                  }
                >
                  <img
                    className="w-full"
                    src={
                      index === 0 ? "./assets/thumb_lg.png" : article.urlToImage
                    }
                    alt="news"
                  />
                </div>
              </div>
            ))}
            {/* news item ends */}
          </div>
          {/* right */}
          <div className="col-span-12 self-start xl:col-span-4">
            <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
              {/* news item */}
              {data.articles.map((article, index) => (
                <div key={index} className="col-span-12 mb-6 md:col-span-8">
                  {!index && (
                    <img
                      className="w-full"
                      src="./assets/thumb.png"
                      alt="thumb"
                    />
                  )}
                  {/* info */}
                  <div className="col-span-12 mt-6 md:col-span-4">
                    <a href="#">
                      <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                        {article.title}
                      </h3>
                    </a>
                    <p className="text-base text-[#292219]">
                      {article.description}
                    </p>
                    <p className="mt-5 text-base text-[#94908C]">25 Feb 2021</p>
                  </div>
                </div>
              ))}
            </div>
            {/* news item ends */}
          </div>
        </div>
      </main>
                    
    </>
  );
}
