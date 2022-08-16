import './index.css';
import * as React from 'react';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import { QueryParamProvider } from 'use-query-params';

const root = createRoot(document.getElementById('root')!);

root.render(
  <BrowserRouter>
    <QueryParamProvider adapter={ReactRouter6Adapter}>
      <App />
    </QueryParamProvider>
  </BrowserRouter>
);
