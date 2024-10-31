import React from 'react';

interface ConfirmationDialogProps {
    show: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    message: string;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ show, onConfirm, onCancel, message }) => {
    if (!show) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <p>{message}</p>
                <button onClick={onCancel}>Cancel</button>
                <button onClick={onConfirm}>Confirm</button>
            </div>
        </div>
    );
};

export default ConfirmationDialog;
