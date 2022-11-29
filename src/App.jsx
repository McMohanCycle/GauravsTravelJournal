import { useState } from "react";
import data from "./assets/data";
import { Card, Header } from "./components";

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleMode = () => {
    setIsDark(!isDark);
  };
  const cards = data.map((data) => (
    <Card key={data.id} data={data} isDark={isDark} />
  ));
  return (
    <div>
      <Header isDark={isDark} toggleMode={toggleMode} />
      <div className={isDark ? "main-container dark" : "main-container"}>
        {cards}
      </div>
    </div>
  );
}

export default App;
