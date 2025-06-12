import Counter from "../component/counter";
import AuthComponent from "@/component/authcomponent";
import PostsList from "@/component/Postslist";
import UserList from "@/component/UserList";
import Header from "@/component/header";
import PostPage from "./post";
import BlogList from "./blog";

export default function Home() {
  return (
    <div>
      <h2>Simple Redux Counter</h2>
      <Header/>
      <Counter />
      <AuthComponent/>
      <UserList/>
      <PostsList/>
      <PostPage/>
      <BlogList/>
       
        
    </div>
  );
}
