import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
// import Main from "./nested-comments/Main";
// import Main from "./opt/Main";
import InfiniteScroll from "./infinite-scroll/InfiniteScroll";
import Page from "./pagination/Page";
import MultiSelect from "./multi-select/MultiSelect";
// import Main from "./modal/Main";
import Tictactoe from "./tic-tac-toe/Tictactoe";
import TodoList from "./todolists/TodoList";
import StopWatch from "./counter-timer/StopWatch";
import Accordian from "./Accordian/Accordian";
import Form from "./multi-select-form/Form";
import Calculator from "./calculator/Calculator";
import FormValidation from "./form-validation/FormValidation";
import DragAndDrop from "./drag-and-drop/DragAndDrop";
import Ratting from "./star-ratting/Ratting";
import Main from "./interactive_shapes/Main";

const BodyRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      {/* <RouterProvider router={BodyRouter} /> */}
      {/* <Main /> */}
      {/* <InfiniteScroll /> */}
      {/* <Page /> */}
      {/* <MultiSelect /> */}
      {/* <Main /> */}
      {/* <Tictactoe /> */}
      {/* <TodoList /> */}
      {/* <StopWatch /> */}
      {/* <Accordian /> */}
      {/* <Form /> */}
      {/* <Calculator /> */}
      {/* <FormValidation /> */}
      {/* <DragAndDrop /> */}
      {/* <Ratting /> */}
      <Main />
    </div>
  );
}

export default App;
