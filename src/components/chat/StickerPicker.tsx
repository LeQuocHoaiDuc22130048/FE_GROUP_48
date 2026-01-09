

const STICKERS = [
    'https://cdn-icons-png.flaticon.com/512/9375/9375940.png',
    'https://cdn-icons-png.flaticon.com/512/9375/9375926.png',
    'https://cdn-icons-png.flaticon.com/512/9375/9375936.png',
    'https://cdn-icons-png.flaticon.com/512/9375/9375904.png',
    'https://cdn-icons-png.flaticon.com/512/9375/9375949.png',
    'https://cdn-icons-png.flaticon.com/512/9375/9375921.png',
    'https://cdn-icons-png.flaticon.com/512/9375/9375896.png',
    'https://cdn-icons-png.flaticon.com/512/9375/9375928.png',
    'https://cdn-icons-png.flaticon.com/512/9375/9375914.png'
];

interface StickerPickerProps {
    onSelect: (url: string) => void;
}

const StickerPicker = ({ onSelect }: StickerPickerProps) => {
    return (
        <div className='bg-background border rounded-lg shadow-lg w-[300px] h-[350px] flex flex-col'>
            <div className='p-3 border-b font-medium'>Stickers</div>
            <div className='flex-1 p-2 overflow-y-auto'>
                <div className='grid grid-cols-3 gap-2'>
                    {STICKERS.map((url, index) => (
                        <button
                            key={index}
                            className='aspect-square hover:bg-muted rounded-md p-1 transition-colors'
                            onClick={() => onSelect(url)}
                        >
                            <img
                                src={url}
                                alt={`Sticker ${index + 1}`}
                                className='w-full h-full object-contain'
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StickerPicker;
