import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "Drawing room for family time",
    description:
      "Bedroom with a clean and comfortable design for your family. charming white a modern design. ",
    image: "/image/project3.jpg",
    link: "",
  },
  {
    id: 2,
    name: "Kitchen look modern and clean",
    description:
      "kitchen look modern, clean and comfortable design for your family. charming white a modern design. ",
    image: "/image/project2.jpg",
    link: "",
  },
  {
    id: 3,
    name: "Perfect living room for family time",
    description:
      " Drawing with a clean and comfortable design for your family. charming white a modern design.",
    image: "/image/project4.png",
    link: "",
  },
];

const page = () => {
  return (
    <div>
      <div className="bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover">
        <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white">
          Our Projects
        </h1>
      </div>

      <div className="container grid lg:grid-cols-2 gap-8 py-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-xl group"
          >
            <div>
              <Image
                src={project.image}
                width={480}
                height={380}
                alt=""
                className="w-full"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-white/90 dark:bg-black/40 flex flex-col items-center justify-end w-60 lg:w-96 gap-2 p-2 lg:p-12 text-sm lg:text-xl transition duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
              <h1 className="text-sm lg:text-2xl font-semibold">
                {project.name}
              </h1>
              <p className="py-1 lg:py-4">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
