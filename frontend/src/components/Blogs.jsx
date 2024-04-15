import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BlogDetails";

export default function Blogs() {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="p-8">
      {loading ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-xl sm:text-2xl md:text-3xl">Loading</p>
        </div>
      ) : posts.length === 0 ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-xl sm:text-2xl md:text-3xl">No Blogs Found !</p>
        </div>
      ) : (
        <div className="grid h-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8  ">
          {posts.map((post) => (
            <div className="gap-y-2 h-full" key={post.id}>
              <BlogDetails post={post} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
