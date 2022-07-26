import "@/sass/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRouter } from "@/routes/routes";
import Layouts from "@/layouts/Layout";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {
            publicRouter.map((route,index) =>{
              const Layout = Layouts
              let Page = route.component
              console.log("th",Page)
              return(
                <Route key={index} path={route.path} element={<Layout><Page /></Layout>}></Route>
              )
            })
          }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
