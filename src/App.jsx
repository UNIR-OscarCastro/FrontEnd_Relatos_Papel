import UserListView from './views/UserListView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Relatos de Papel</h1>
        <p>Front end creado en React para Proyecto transversal Relatos de papel - MISSI Unir 2025-2026</p>
      </header>
      <div className="bg-light min-vh-100">
      <UserListView />
     </div>
    </div>
  )
}

export default App

