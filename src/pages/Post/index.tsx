import FileUploader from "@/components/fileUploader";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useUserAuth } from "@/context/userAuthContext";
import { useState } from "react";
import { FileEntry, PhotoMeta } from "@/types";
import { Post } from "@/types";
interface ICreatePostProps {}

const CreatePost = ({}: ICreatePostProps) => {

  const {user} = useUserAuth();

  const [fileEntry, setFileEntry] = useState<FileEntry>({
    files: [],

  })
  const [post, setPost] = useState<Post>({
    caption: "",
    photos: [],
    likes: 0,
    userlikes: [],
    userId: null,
    date: new Date(),
  })

  const handleSubmit = async(e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Upload file entry: ", fileEntry.files);
    console.log("The create post is: ", post);
    const photoMeta: PhotoMeta[] = fileEntry.files.map((file) => {
      return {cdnUrl: file.cdnUrl, uuid: file.uuid}

    })

  }
  return (
    <Layout>
      <div className="flex justify-center">
        <div className="border max-w-3xl w-full">
          <h3 className="bg-slate-800 text-white text-center text-lg p-2">
            Create Post
          </h3>
          <div className="p-8">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <Label className="mb-4" htmlFor="caption">
                  Photo Caption
                </Label>
                <Textarea
                  className="mb-8"
                  id="caption"
                  value={post.caption}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {setPost({...post, caption: e.target.value})}}
                  placeholder="what's in your photo"
                ></Textarea>
                <div>
                  <Label className="mb-4" htmlFor="photo">
                    Photos
                  </Label>
                </div>
              </div>
              <FileUploader fileEntry={fileEntry} onChange={setFileEntry}/>
              <Button className="mt-8 w-32">Post</Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreatePost;
