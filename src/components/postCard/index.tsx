import React from 'react';
import { useUserAuth } from '@/context/userAuthContext';
import { DocumentResponse } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import image7 from "@/assets/images/image7.jpg";

interface IPostCardProps{
    data: DocumentResponse;
}

const PostCard: React.FC<IPostCardProps> = ({data}) => {
    const {user} = useUserAuth();
  return (
    <div>
        <Card className='mb-6'>
            <CardHeader className="flex flex-col p-3">
                <CardTitle className="text-sm text-center flex justify-start items-center">
                    <span className="mr-2">
                        <img src={image7} className="w-10 h-10 rounded-full borer-2 border-slate-800 object-cover"/>
                    </span>
                    <span>Guest_user</span>
                </CardTitle>
            </CardHeader>
            <CardContent className='p-0'>
                <img  src={data.photos ? data.photos[0].cdnUrl : ""}/>

            </CardContent>
        </Card>
    </div>
  )
}

export default PostCard