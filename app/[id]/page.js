import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import Link from "next/link";

async function getTodo(id) {
  const docRef = doc(db, "Todos", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return null;
  }
  return docSnap.data();
}

export default async function TodoPage({ params }) {
  const { id } = params;
  const todo = await getTodo(id);

  if (!todo) {
    return <div>Todo not found</div>;
  }

  return (
    <div>
      <h1>Title: {todo.Title}</h1>
      <p>Detail: {todo.Detail}</p>
      <Link href="/">
      <button className="mt-4 border-white-700 border-4">GO BACK</button>
      </Link>
    </div>
    
  );
}


