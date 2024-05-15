import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, changeStateTodo } from "./todeSlice";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
function App() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todosState);
  const ismRef = useRef();
  const familiyaRef = useRef();
  const yoshRef = useRef();
  const manzilRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (ismRef.current.value.trim() && familiyaRef.current.value.trim()) {
      const newTodo = {
        id: uuidv4(),
        ism: ismRef.current.value,
        familiya: familiyaRef.current.value,
        yosh: yoshRef.current.value,
        manzil: manzilRef.current.value,
        completed: false,
      };
      dispatch(addTodo(newTodo));
      ismRef.current.value = "";
      familiyaRef.current.value = "";
      yoshRef.current.value = "";
      manzilRef.current.value = "";
      toast.success(" Ma'lumotlaringiz kiritildi");
    } else {
      toast.error("Ma'lumotlaringizni kiriting");
    }
  };
  console.log(todos);
  return (
    <div className=" align-content  ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-1 w-full max-w-xs mx-auto bg-slate-200 p-3"
      >
        <label className="form-control w-full max-w-xs">
          <span className="label-text mb-2">Ism:</span>
          <input
            placeholder="Ismingizni kiriting"
            type="text"
            ref={ismRef}
            className=" input input-bordered input-primary w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <span className="label-text mb-2">Familiya:</span>
          <input
            placeholder="Familiyangizni kiriting"
            type="text"
            ref={familiyaRef}
            className="input input-bordered input-secondary w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <span className="label-text mb-2">Yoshingiz:</span>
          <input
            placeholder="Yoshingizni kiriting"
            type="number"
            ref={yoshRef}
            className=" input input-bordered input-accent  w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <span className="label-text mb-2">Manzilingiz:</span>
          <input
            placeholder="Manzilingizni kiriting"
            type="text"
            ref={manzilRef}
            className=" input input-bordered input-warning w-full max-w-xs"
          />
        </label>

        <button className="btn btn-primary mt-3 ">submit</button>
      </form>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3  mt-10  min-h-96 p-3 card gap-10">
        {todos.map((item) => {
          return (
            <li
              key={item.id}
              style={{ opacity: item.completed ? "0.5" : "1" }}
              className="card  bg-base-800 shadow-xl w-full max-w-xs bg-slate-300 p-3 h-full max-h-60"
            >
              <h4 className=" font-medium text-2xl">
                Ism: <span className=" font-bold ">{item.ism}</span>
              </h4>
              <h4 className=" font-medium text-2xl">
                Familiya: <span className=" font-bold ">{item.familiya} </span>{" "}
              </h4>
              <h4 className=" font-medium text-2xl">
                Yosh: <span className=" font-bold ">{item.yosh} </span>{" "}
              </h4>
              <h4 className=" font-medium text-2xl">
                Manzil: <span className=" font-bold ">{item.manzil} </span>{" "}
              </h4>
              <div className="flex gap-2  justify-center items-center mt-5">
                <button
                  className="btn  btn-error "
                  onClick={() => {
                    dispatch(removeTodo(item.id));
                    toast("Ma'lumot o'chirildi", {
                      style: { background: "red", color: "white" },
                      icon: "🗑",
                    });
                  }}
                >
                  delete
                </button>
                <button
                  className="btn btn-success  "
                  onClick={() => {
                    dispatch(changeStateTodo(item.id));
                  }}
                >
                  done
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
