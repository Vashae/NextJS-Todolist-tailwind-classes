import Createtodo from "./components/Createtodo";
import Todolist from "./components/Todolist";


export default function Home() {
  return (
  <>
  <div className="h-[100vh] flex justify-center items-center flex-col">
<Todolist/>
<Createtodo/>
</div>
  </>
  );
}
