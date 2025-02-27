import React from 'react';
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';
import App from './App';

describe("Primary App page", () => {
    beforeEach(() => {
        render(<App />);
    })

    test("Header rendered", () => {
        const header = screen.getByText("Pokemon Type Info");
        expect(header).toBeInTheDocument();
    });

    test("Type Selection rendered", () => {
        const typeSelectComp = screen.getByTestId("PokeTypeSelection")
        expect(typeSelectComp).toBeInTheDocument();
    })
});