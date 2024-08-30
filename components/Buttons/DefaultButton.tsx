import React from "react";
import {Button} from "@mui/material";
import {AddBox} from "@mui/icons-material";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: (e?: any) => void;
    icon?: React.ReactNode;
}

export const DefaultButton: React.FC<ButtonProps> = ({onClick, icon, children, ...props}) => {
    return (
        <Button
            variant="contained"
            color="primary"
            startIcon={icon}
            onClick={onClick}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px 16px',
                fontSize: '16px',
                textTransform: 'none',
                boxShadow: 'none',
                backgroundColor: 'black',
                color: 'white', // Text color
                '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Example hover color
                    color: 'black' // Text color on hover
                }
            }}
        >
            {children}
        </Button>
    )

}