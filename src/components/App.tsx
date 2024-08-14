import BackgroundHeading from "./BackgroundHeading";
import Header from "./Header";
import Sidebar from "./Sidebar";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="flex justify-center items-center font-sans bg-[#96C9F4] min-h-screen flex-col p-4">
      <BackgroundHeading />
      <main className="relative w-full max-w-[800px] h-auto min-h-[500px] bg-white rounded-xl shadow-md grid grid-cols-1 md:grid-cols-[7fr_4fr] grid-rows-[auto_1fr] md:grid-rows-[59px_1fr] overflow-hidden">
        <Header />
        <TodoList />
        <Sidebar  />
      </main>
      <footer className="flex justify-between items-center w-full max-w-[972px] mt-8 px-12">
        <small className="text-sm opacity-30">
          &copy; 2024. Copyright by BrianPrado.
        </small>
      </footer>
    </div>
  );
}

export default App;
