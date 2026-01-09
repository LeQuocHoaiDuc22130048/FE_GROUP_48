import { GiphyFetch } from '@giphy/js-fetch-api';
import { Grid } from '@giphy/react-components';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';


const giphyFetch = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY || 'YOUR_API_KEY_HERE');

interface StickerPickerProps {
    onSelect: (url: string) => void;
}

const StickerPicker = ({ onSelect }: StickerPickerProps) => {
    const [search, setSearch] = useState('');
    const [debouncedSearch] = useDebounce(search, 500);

    const fetchStickers = (offset: number) => {
        if (debouncedSearch) {
            return giphyFetch.search(debouncedSearch, { offset, limit: 10, type: 'stickers' });
        }
        return giphyFetch.trending({ offset, limit: 10, type: 'stickers' });
    };

    return (
        <div className='bg-background border rounded-lg shadow-lg w-[350px] h-[450px] flex flex-col overflow-hidden'>
            <div className='p-3 border-b'>
                <input
                    type='text'
                    placeholder='Search Stickers...'
                    className='w-full px-3 py-2 bg-muted rounded-md text-sm outline-none focus:ring-1 focus:ring-primary'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className='flex-1 overflow-y-auto custom-scrollbar'>
                <Grid
                    width={350}
                    columns={3}
                    fetchGifs={fetchStickers}
                    key={debouncedSearch} // Force re-render on search change
                    onGifClick={(gif, e) => {
                        e.preventDefault();
                        onSelect(gif.images.original.url);
                    }}
                    noLink={true}
                    hideAttribution={true}
                />
            </div>
        </div>
    );
};

export default StickerPicker;
