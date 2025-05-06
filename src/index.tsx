import {createRoot} from 'react-dom/client';
import {App} from '@/components/App';
import './styles/global.scss';
import {BrowserRouter, Route, Routes} from 'react-router';
import {LazyAbout} from '@/pages/about/about-page-lazy';
import {LazyShop} from '@/pages/shop/shop-page-lazy';
import {Suspense} from 'react';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}

const container = createRoot(root);

container.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          path="about"
          element={
            <Suspense fallback="LOAD....">
              <LazyAbout />
            </Suspense>
          }
        />
        <Route
          path="shop"
          element={
            <Suspense fallback="LOAD....">
              <LazyShop />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
