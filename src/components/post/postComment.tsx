import { ChangeEvent, useState, useRef } from "react";

const PostComment = () => {
  const [post, setPost] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Initial height
  const initialHeight = 40;

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setPost(value);

    // We Automatically adjust textarea height based on its content
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.max(
        initialHeight,
        textareaRef.current.scrollHeight
      )}px`;
    }
  };

  return (
    <div className="rounded-2xl relative w-full ">
      <textarea
        ref={textareaRef}
        name="post"
        className="resize-none w-full rounded-3xl p-2 pl-12 bg-gray-200 placeholder:text-gray-400 outline-none"
        placeholder="Write something ..."
        id="post"
        value={post}
        style={{ height: initialHeight + `px` }}
        onChange={handleInputChange}
      />
      <div className="absolute top-[6px] left-3">
        <img
          src="/me.jpg"
          className="w-7 h-7 rounded-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default PostComment;
