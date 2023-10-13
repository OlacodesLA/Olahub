import { ChangeEvent, useState, useRef } from "react";

const PostInput = () => {
  const [post, setPost] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Initial height
  const initialHeight = 90;

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
    <div className="rounded-2xl relative">
      <textarea
        ref={textareaRef}
        name="post"
        className="resize-none w-full rounded-t-2xl p-2 pl-16 pt-5 placeholder:text-gray-400 outline-none"
        placeholder="Write something ..."
        id="post"
        value={post}
        style={{ height: initialHeight + `px` }}
        onChange={handleInputChange}
      />
      <div className="absolute top-3 left-3">
        <img
          src="/me.jpg"
          className="w-10 h-10 rounded-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default PostInput;
