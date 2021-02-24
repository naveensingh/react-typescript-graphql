import { render } from '@testing-library/react';
import App from './App';
import {BrowserRouter} from "react-router-dom";

describe('App', () => {
    test('renders!', () => {
        const app = render(<BrowserRouter><App /></BrowserRouter>);
        expect(app.findByTestId('app')).toBeDefined();
    });
});
