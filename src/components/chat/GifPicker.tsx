
const GIFS = [
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXp1Z2g1cW53Z2g1cW53Z2g1cW53Z2g1cW53Z2g1cW53Z2g1cW53ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKSjRrfIPjeiVyM/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXp1Z2g1cW53Z2g1cW53Z2g1cW53Z2g1cW53Z2g1cW53ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlHJGHe3yAMhdQY/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXp1Z2g1cW53Z2g1cW53Z2g1cW53Z2g1cW53Z2g1cW53ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6ozvv0zsJskzOCbu/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXp1Z2g1cW53Z2g1cW53Z2g1cW53Z2g1cW53Z2g1cW53ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT5LMHxhOfscxPfIfm/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXp1Z2g1cW53Z2g1cW53Z2g1cW53Z2g1cW53Z2g1cW53ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2Je66zG6mAAZxgqI/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXp1Z2g1cW53Z2g1cW53Z2g1cW53Z2g1cW53Z2g1cW53ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKHVU0xsgGDCyPu/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXp1Z2g1cW53Z2g1cW53Z2g1cW53Z2g1cW53Z2g1cW53ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlO3BJ8LALPW4sE/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXp1Z2g1cW53Z2g1cW53Z2g1cW53Z2g1cW53Z2g1cW53ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6ozrStgoWWK9bn6U/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXp1Z2g1cW53Z2g1cW53Z2g1cW53Z2g1cW53Z2g1cW53ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT5LMB2WiOdjpB7K4o/giphy.gif'
];

interface GifPickerProps {
    onSelect: (url: string) => void;
}

const GifPicker = ({ onSelect }: GifPickerProps) => {
    return (
        <div className='bg-background border rounded-lg shadow-lg w-[320px] h-[400px] flex flex-col'>
            <div className='p-3 border-b font-medium'>GIFs</div>
            <div className='flex-1 p-2 overflow-y-auto'>
                <div className='grid grid-cols-2 gap-2'>
                    {GIFS.map((url, index) => (
                        <button
                            key={index}
                            className='relative aspect-video hover:opacity-80 transition-opacity rounded-md overflow-hidden'
                            onClick={() => onSelect(url)}
                        >
                            <img
                                src={url}
                                alt={`GIF ${index + 1}`}
                                className='w-full h-full object-cover'
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GifPicker;
