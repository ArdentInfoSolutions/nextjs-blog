"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { fetchPosts } from '../features/posts/postsThunks';
import { Post } from "@/features/posts/postsSlice";
import Link from "next/link";


export default function Home() {
  const dispatch = useAppDispatch();
  const { posts, loading, error } = useAppSelector((state: RootState) => state.posts);
  const user = useAppSelector((state: RootState) => state.auth.user);


  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return (
    <div className="prose">
      <h1 className="p-4">Latest Blog Posts</h1>
      <ul>
        {posts.map((post: Post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            {user ? (
              <div className="flex w-full">
                <button className="btn btn-primary">Like</button>
                <button className="btn btn-active">Comment</button>
              </div>
            ) : (
              <div className="card-actions justify">
                  <Link href={'/login'} className="btn btn-active">Like</Link>
                <Link href={'/login'} className="btn btn-active">Comment</Link>
              </div>
            )}
            <div className="divider"></div>
          </div>
        ))}
      </ul>
    </div>
  );
}
