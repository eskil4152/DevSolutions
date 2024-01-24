"use client";

export default function Home() {
  return (
    <div className="container text-center mt-[10vh] mb-[10vh]">
      <div className="">
        <p className="text-4xl font-bold">Welcome to DevSolutions</p>
        <button className="border-2 border-black dark:border-white py-2 px-6 mt-2 rounded-full">
          Get Started
        </button>
      </div>

      <div className="mt-[10vh]">
        <p className="text-2xl font-bold mb-10">What we do</p>
        <div className="grid grid-rows-1 grid-cols-3 px-10 gap-10 min-h-[20vh]">
          <div className="border-2 border-black dark:border-white p-2">
            <p className="text-lg font-semibold">Web Solutions</p>
            <p>We can build your dream website</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem
              fugiat minus natus neque quibusdam quidem rem, sed? Accusantium,
              assumenda autem deserunt earum esse iste laudantium nihil nobis
              odit sequi?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem
              fugiat minus natus neque quibusdam quidem rem, sed? Accusantium,
              assumenda autem deserunt earum esse iste laudantium nihil nobis
              odit sequi?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem
              fugiat minus natus neque quibusdam quidem rem, sed? Accusantium,
              assumenda autem deserunt earum esse iste laudantium nihil nobis
              odit sequi?
            </p>
          </div>
          <div className="border-2 border-black dark:border-white p-2">
            <p className="text-lg font-semibold">API Integrations</p>
            <p>We can build APIs for you, or integrate them into your app</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus amet assumenda ex id non odit praesentium quos ut
              voluptates! Assumenda aut cumque eaque impedit officia provident
              repellendus similique voluptatibus voluptatum.
            </p>
          </div>
          <div className="border-2 border-black dark:border-white p-2">
            <p className="text-lg font-semibold">Software Development</p>
            <p>We can build you apps</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium adipisci asperiores assumenda cum distinctio error
              expedita illo inventore ipsa, magni minima perferendis porro quae
              recusandae rerum sed similique! Nisi, velit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
