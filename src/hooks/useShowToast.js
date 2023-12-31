import { useToast } from '@chakra-ui/react';

function useShowToast() {
    const toast = useToast();
    const showToast = (title, description, status) => {
        toast({
            title: title,
            description: description,
            status: status,
            duration: 3000, // Set the duration in milliseconds (e.g., 3000 for 3 seconds)
            isClosable: true,
        });
    };
    return showToast;
}

export default useShowToast;
