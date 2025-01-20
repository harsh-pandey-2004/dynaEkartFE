import React from "react";
import { FaRegCalendarAlt, FaGripfire } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { LuNotebookPen } from "react-icons/lu";

const SingleBlog = () => {
  return (
    <section className="container mx-auto py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-full bg-white border shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex justify-center p-4">
          <img
            src="https://images.unsplash.com/photo-1616410011236-7a42121dd981?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="py-6 px-6 w-full md:w-1/2 hover:shadow-xl transition-all duration-300 ease-in-out">
          <h1 className="font-extrabold text-3xl mb-4 hover:text-blue-600 cursor-pointer transition-colors duration-200 ease-in">
            iPhone 15 Rear Camera Design Will Be Available
          </h1>
          <div className="flex items-center space-x-3 mb-3">
            <FaRegCalendarAlt className="text-blue-600" />
            <p className="text-lg text-gray-500">Date : Jan-01, 2025</p>
          </div>
          <div className="flex items-center space-x-3 mb-3">
            <LuNotebookPen className="text-green-600" />
            <p className="text-lg">Author : Gumshooda G</p>
          </div>
          <div className="flex items-center space-x-3 mb-3">
            <BiCategory className="text-yellow-600" />
            <p className="text-lg">Category : Technology</p>
          </div>
          <div className="flex items-center space-x-3 mb-4">
            <FaGripfire className="text-red-600" />
            <p className="text-lg">Featured : Popular Post</p>
          </div>
        </div>
      </div>
      <div className="text-justify p-2 mt-6 text-lg">
        <span className="font-bold text-xl"> Description :</span> Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Nam molestiae, voluptatem
        molestias, pariatur delectus placeat minus ab sed aut tenetur alias sunt
        perferendis, id totam ea natus eveniet. Suscipit eaque tenetur maiores
        eveniet sunt nam facilis corporis ipsum. Assumenda quisquam minima
        voluptates error sapiente alias optio eius, illo quaerat numquam
        voluptas similique quas exercitationem explicabo aspernatur
        necessitatibus vitae, nostrum consectetur ex suscipit modi. Sint
        aspernatur veniam nihil dignissimos autem rerum! Obcaecati voluptatem,
        ab deserunt odit reiciendis molestias officia porro harum in, inventore
        corporis? Deserunt id culpa esse eaque velit necessitatibus praesentium
        quis. Distinctio, consectetur. Non consequuntur ab odio asperiores aut,
        ipsum veritatis incidunt enim error. Blanditiis delectus modi unde
        aperiam necessitatibus? Placeat, repellendus odio magnam mollitia est
        excepturi similique, labore voluptas modi doloremque earum saepe dolor,
        accusantium asperiores cupiditate nam. Aut consequatur, ratione quas
        dolore doloribus voluptatum amet voluptatibus sint animi, fuga
        necessitatibus ex perferendis illo nemo totam, sit labore voluptate
        adipisci nostrum. Eligendi doloribus hic aliquid quam molestiae at?
        Sequi ipsa voluptatibus, quis maiores repellendus omnis id veritatis
        nostrum laudantium deleniti! Tempore veritatis unde iusto suscipit
        consectetur! Ducimus consequuntur, dolorem aspernatur sapiente debitis
        quaerat cupiditate quos officiis ut sint expedita libero quis sit in
        officia voluptas, et nam, quod magnam odio aut non! Magni accusantium
        quos quas tenetur autem. Illum pariatur inventore accusantium illo
        aliquam cupiditate impedit molestiae facere, voluptates fugiat error,
        cumque libero veritatis ipsa possimus omnis. Ullam minima maiores fuga
        placeat commodi quos alias pariatur at aperiam veritatis explicabo,
        perspiciatis iure sit eius quisquam natus. Facilis, tempore?
      </div>
    </section>
  );
};

export default SingleBlog;
