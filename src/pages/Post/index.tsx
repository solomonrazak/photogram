import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
interface ICreatePostProps {

}

const CreatePost = ({}: ICreatePostProps) => {
  return (
    <Layout>
      <div className="flex justify-center">
        <div className="border max-w-3xl w-full">
          <h3 className="bg-slate-800 text-white text-center text-lg p-2">Create Post</h3>
          <div className="p-8">
            <form>
               <div className="flex flex-col">
                <Label className="mb-4" htmlFor="caption">Photo Caption</Label>
                <Textarea className="mb-8" id="caption" placeholder="what's in your photo"></Textarea>
                <div>
                  <Label className="mb-4" htmlFor="photo">Photos</Label>
                </div>
                
               </div>
               <Button className="mt-8 w-32">Post</Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CreatePost;