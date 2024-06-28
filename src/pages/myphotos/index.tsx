interface IMyPhotosProps {}
import Layout from "@/components/layout";
import { useUserAuth } from "@/context/userAuthContext";
import { useEffect, useState } from "react";
import { DocumentResponse, Post } from "@/types";
import { getPostByUserId } from "@/repository/post.service";
import { HeartIcon } from "lucide-react";

const MyPhotos = ({}: IMyPhotosProps) => {
  const { user } = useUserAuth();
  const [data, setData] = useState<DocumentResponse[]>([]);

  const getAllPost = async (id: string) => {
    try {
      const querySnapShot = await getPostByUserId(id);
      const tempArray: DocumentResponse[] = [];
      if (querySnapShot.size > 0) {
        querySnapShot.forEach((doc) => {
          const data = doc.data() as Post;
          const responseObj: DocumentResponse = {
            id: doc.id,
            ...data,
          };
          console.log(id);
          console.log("The response object is :", responseObj);
          tempArray.push(responseObj);
        });
        setData(tempArray);
      } else {
        console.log("No such document");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      getAllPost(user.uid);
    }
  }, []);


  const renderPost = () => {
    return data.map((item) => {
      return (
        <div key={item.photos[0].uuid} className="relative">
          <div className="absolute group transiton-all duration-200 bg-transparent hover:bg-slate-950 hover:bg-opacity-75 top-0 right-0 left-0 bottom-0 w-full h-full">
            <div className="flex flex-col justify-center items-center w-full h-full">
              <HeartIcon className="hidden group-hover:block fill-white" />
              <div className="hidden text-white group-hover:block">{item.likes} likes</div>
            </div>
          </div>
          <img src={`${item.photos[0].cdnUrl}/-/progressive/yes/-/scale_crop/300x300/center/`}/>
        </div>
      )

    })
  }
  return (
    <Layout>
      <div className="flex justify-center">
        <div className="border max-w-3xl w-full">
          <h3 className="bg-slate-800 text-white text-center text-lg p-2">
            My photos
          </h3>
          <div className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {data ? renderPost() : <div>...Loading</div>}

            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyPhotos;
