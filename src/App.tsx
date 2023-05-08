import { useState } from "react";
import ListGroup from "./assets/ListGroup";
import Alert from "./components/Alert";
import { Button } from "./components/Button";

function App() {
  let items = ["Iraq", "Germany", "Brazil", "Noraway", "UAE"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisiblity] = useState(false);
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert
          onClose={() => {
            setAlertVisiblity(false);
          }}
        >
          My Alert
        </Alert>
      )}

      <Button color="primary" onClick={() => setAlertVisiblity(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
