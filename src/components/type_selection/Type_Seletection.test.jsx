import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';
import TypeSelection from './Type_Selection';

describe("Type Selection Tests", () => {
    beforeEach(() => {
        render(<TypeSelection />);
    })

    test("Select is present", () => {
        const select = screen.getByRole("combobox");
        expect(select).toBeInTheDocument();
    });

    test("Label is present", () => {
        const label = screen.getByLabelText("Select Pokemon Type:");
        expect(label).toBeInTheDocument();
    });

    test("Default option is present and selected", () => {
        const select = screen.getByRole("combobox");
        const opt = screen.getByText("Select Type");

        expect(opt).toBeInTheDocument();
        expect(select).toHaveValue("Select Type");
    });

    test("Options loaded from the API", async () => {
        const opts = screen.getAllByRole("option");
        
        await waitFor(() => {
            const normalType = screen.getByText("normal");
            expect(normalType).toBeInTheDocument();
        });
    });

    test("Option selection", async () => {
        const select = screen.getByRole("combobox");

        await waitFor(() => {
            const normalType = screen.getByText("normal");
            expect(normalType).toBeInTheDocument();
            fireEvent.change(select, {target: {value: "normal"}});
            expect(normalType.selected).toBeTruthy();
        });
    });
    

});