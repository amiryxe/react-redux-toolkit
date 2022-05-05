import './assets/styles/main.scss'
import PostList from './features/post/PostList'
import Header from './components/layout/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <PostList />
    </div>
  );
}

export default App;
