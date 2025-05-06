import {createRoot} from 'react-dom/client';
import {App} from '@/app/App';
import './styles/global.scss';
import {BrowserRouter, Route, Routes} from 'react-router';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}

const container = createRoot(root);

container.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
    </Routes>
  </BrowserRouter>
);
