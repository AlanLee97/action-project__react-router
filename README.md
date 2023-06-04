# 实现React-Router简单版
## 目标
1. 两个组件
   - Router
   - Route
     - props: 
       - path 路径
       - element react元素
       - component react组件（element和component二选一）
2. 三个hooks
   - useHistory
   - useLocation
   - useNavigate


## 使用示例
```js
import {
  Router,
  Route,
  useHistory,
  useLocation,
  useNavigate
} from './router'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/a" element={<CpnA />} />
        <Route path="/b" element={<CpnB />} />
        <Route path="/c" component={CpnC} />
        <Route path="/d" component={CpnD} />
        <Route path="/" component={Home} />
      </Router>
    </div>
  );
}

function Home(props = {}) {
  const history = useHistory();
  const location = useLocation();
  const navigate = useNavigate();
  console.log('test hooks', {
    history,
    location
  });
  const toPage = (path) => {
    // props.history.push(path);
    // history.push(path);
    navigate(path);
  }
  return (
    <section>
      <div className='cpn--home-btn-wrapper'>
        <button onClick={() => toPage('/a')}>to /a</button>
        <button onClick={() => toPage('/b')}>to /b</button>
        <button onClick={() => toPage('/c')}>to /c</button>
        <button onClick={() => toPage('/d')}>to /d</button>
      </div>
    </section>
  )
}

function CpnA(props = {}) {
  return (
    <section>
      <h2>Cpn A</h2>
      <button onClick={() => {props.history.push('/b')}}>to B</button>
    </section>
  )
}

function CpnB(props = {}) {
  console.log('CpnB props', props);
  return (
    <section>
      <h2>Cpn B</h2>
      <button onClick={() => {props.history.push('/a')}}>to A</button>
    </section>
  )
}

function CpnC(props = {}) {
  console.log('CpnC props', props);
  return (
    <section>
      <h2>Cpn C</h2>
      <button onClick={() => {props.history.push('/d')}}>to D</button>
    </section>
  )
}

function CpnD(props = {}) {
  console.log('CpnD props', props);
  return (
    <section>
      <h2>Cpn D</h2>
      <button onClick={() => {props.history.push('/c')}}>to C</button>
    </section>
  )
}
```
