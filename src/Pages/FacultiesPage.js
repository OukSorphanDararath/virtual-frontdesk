import React from "react";
import Card from "../components/Card";

const FacultiesPage = () => {
  const facultiesData = [
    {
      title: "Faculty of Business & Economic",
      image:
        "https://media.licdn.com/dms/image/D5612AQEvQU5DTiGRqw/article-cover_image-shrink_720_1280/0/1679896039793?e=2147483647&v=beta&t=2gERJ83GKjVDsiVTRtBiIpWTjsnGQPknygdCFJr0NAU",
    },
    {
      title: "Faculty of Education",
      image:
        "https://t3.ftcdn.net/jpg/05/75/22/58/360_F_575225818_PQ2ZPHFw51yCcmieutB5bT843nPAPzo3.jpg",
    },
    {
      title: "Faculty of Mathematic Science and Engineering",
      image:
        "https://www.rocketlawyer.com/binaries/content/gallery/guide-hero-images/GB/video-recording-break-the-law.jpg",
    },
    {
      title: "Faculty of Arts, Letters, and Humanities",
      image:
        "https://media.licdn.com/dms/image/D5612AQEvQU5DTiGRqw/article-cover_image-shrink_720_1280/0/1679896039793?e=2147483647&v=beta&t=2gERJ83GKjVDsiVTRtBiIpWTjsnGQPknygdCFJr0NAU",
    },
    {
      title: "Faculty of Law and Public Affairs",
      image:
        "https://t3.ftcdn.net/jpg/05/75/22/58/360_F_575225818_PQ2ZPHFw51yCcmieutB5bT843nPAPzo3.jpg",
    },
    {
      title: "Faculty of Communication & Media Arts",
      image:
        "https://www.rocketlawyer.com/binaries/content/gallery/guide-hero-images/GB/video-recording-break-the-law.jpg",
    },
    {
      title: "Faculty of Social Science and International Relations",
      image:
        "https://media.licdn.com/dms/image/D5612AQEvQU5DTiGRqw/article-cover_image-shrink_720_1280/0/1679896039793?e=2147483647&v=beta&t=2gERJ83GKjVDsiVTRtBiIpWTjsnGQPknygdCFJr0NAU",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-semibold my-8">Faculties</h1>
      <div className="absolute left-0 right-0 flex overflow-x-auto no-scrollbar pl-10 py-4 flex-nowrap ">
        {facultiesData.map((item) => (
          <Card className={"relative mr-5"}>
            <img
              className="object-cover w-full h-full"
              alt={item?.title}
              src={item?.image}
            />
            <div className="absolute bottom-0 w-full h-full flex items-end bg-gradient-to-t from-black/90 from-5% to-transparent to-50%">
              <div className="p-6 h-2/6 flex items-center w-full">
                <h1 className="p-2 rounded text-2xl font-semibold">
                  {item?.title}
                </h1>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FacultiesPage;
