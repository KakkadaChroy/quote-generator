import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { Check } from 'lucide-react';

interface ShareQuoteDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

const ShareQuoteDialog: React.FC<ShareQuoteDialogProps> = ({ isOpen, onClose }) => {
    return (
        <AlertDialog.Root open={isOpen} onOpenChange={onClose}>
            <AlertDialog.Portal>
                <AlertDialog.Overlay className="fixed inset-0 bg-black/30 animate-fade-in" />
                <AlertDialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 max-w-md w-full animate-scale-in">
                    <div className="flex flex-col items-center">
                        <div className="bg-green-100 p-3 rounded-full mb-4">
                            <Check className="text-green-600 w-6 h-6" />
                        </div>

                        <AlertDialog.Title className="text-xl font-medium text-gray-900 mb-2">
                            Success!
                        </AlertDialog.Title>

                        <AlertDialog.Description className="text-gray-600 text-center mb-6">
                            Quote copied to clipboard successfully.
                        </AlertDialog.Description>

                        <div className="flex justify-center w-full">
                            <AlertDialog.Action asChild>
                                <button
                                    className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-6 rounded-md transition-colors"
                                    onClick={onClose}
                                >
                                    Okay
                                </button>
                            </AlertDialog.Action>
                        </div>
                    </div>
                </AlertDialog.Content>
            </AlertDialog.Portal>
        </AlertDialog.Root>
    );
};

export default ShareQuoteDialog;